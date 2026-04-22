#!/bin/sh

echo "Starting Tailscale..."
# Run in userspace mode, saving state to /tmp to avoid permission errors
tailscaled --tun=userspace-networking --socks5-server=127.0.0.1:25566 --statedir=/tmp/tailscale --socket=/tmp/tailscale.sock &
sleep 2

# Authenticate Tailscale
tailscale --socket=/tmp/tailscale.sock up --authkey=${TAILSCALE_AUTHKEY} --hostname=fly-nextjs-app --accept-routes --accept-dns=false 

echo "Starting Next.js..."
# Start the standalone Next.js server in the background on port 3000
HOSTNAME=127.0.0.1 PORT=3000 node server.js &

sleep 2
echo "Starting Proxy Gateway..."
# Start our Gateway to handle incoming traffic on port 8080
NODE_PATH=/app/proxy-node_modules exec node proxy.js
