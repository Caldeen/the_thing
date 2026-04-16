FROM node:18-alpine AS base

# ==========================================
# 1. DEPS STAGE (Application Dependencies)
# ==========================================
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

# OPTIMIZATION: Use BuildKit cache to speed up npm/yarn installs on rebuilds
RUN --mount=type=cache,target=/root/.npm \
    --mount=type=cache,target=/usr/local/share/.cache/yarn \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

# ==========================================
# 2. PROXY-DEPS STAGE (Isolating our Proxy Packages)
# ==========================================
# We install these separately so NPM cache and temp files don't bloat the final image
FROM base AS proxy-deps
WORKDIR /proxy
RUN npm install express express-basic-auth http-proxy-middleware socks-proxy-agent@7 express-rate-limit

# ==========================================
# 3. BUILDER STAGE (Compiling Next.js)
# ==========================================
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1

# OPTIMIZATION: Cache the Next.js build folder to make subsequent builds blazing fast
RUN --mount=type=cache,target=/app/.next/cache \
    npm run build

# ==========================================
# 4. RUNNER STAGE (Final Production Image)
# ==========================================
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

# Install Tailscale (Native Alpine package - very small)
RUN apk update && apk add --no-cache tailscale

# Setup users
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy Public assets
COPY --from=builder /app/public ./public

# Copy Next.js standalone files and assign ownership instantly (saves duplicating the layer!)
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# OPTIMIZATION: Merge our proxy dependencies into the app's node_modules instantly with correct ownership
COPY --from=proxy-deps --chown=nextjs:nodejs /proxy/node_modules ./node_modules

# Copy scripts with correct ownership
COPY --chown=nextjs:nodejs proxy.js ./
COPY --chown=nextjs:nodejs start.sh ./
RUN chmod +x start.sh

# Switch to non-root user
USER nextjs

EXPOSE 8080
ENV PORT=8080

CMD ["./start.sh"]