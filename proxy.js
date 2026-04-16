const express = require('express');
const basicAuth = require('express-basic-auth');
const { createProxyMiddleware } = require('http-proxy-middleware');
const { SocksProxyAgent } = require('socks-proxy-agent');
const rateLimit = require('express-rate-limit');

const app = express();
app.set('trust proxy',1);
app.disable('x-powered-by');
// 1. ZABBIX SECURITY 
const protectRoute = basicAuth({
    users: { 'tmpuser': 'TempPasswordasdf5MjATA5KUMDGiLEphP11C' }, // CHANGE THIS
    challenge: true,
    realm: 'Homelab Access'
});
const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10, // Limit each IP to 10 login attempts per window
    message: 'Too many login attempts, please try again later.',
    standardHeaders: true,
    legacyHeaders: false,
    skip: (req) => req.method !== 'POST' // Only rate limit POST requests
});

app.get('/ip', (req, res) => {
    res.send(req.ip);
});
// Login Notification
app.post('/zabbix/index.php', loginLimiter, (req, res, next) => {
    next();
});

const socksAgent = new SocksProxyAgent('socks5://127.0.0.1:25566');




// 2. HOMELAB ROUTE
app.use('/zabbix', protectRoute, createProxyMiddleware({
    target: `http://${process.env.ZABBIX_INTERNAL_IP}/zabbix`, // Replace with your Homelab IP
    agent: socksAgent,
    changeOrigin: true,
    ws: true,
    on: {
        proxyRes: (proxyRes, req, res) => {
            // Remove the headers coming FROM Zabbix
            delete proxyRes.headers['x-powered-by'];
            delete proxyRes.headers['server'];
            delete proxyRes.headers['X-Powered-By'];
            delete proxyRes.headers['Server'];
        }
    },
    pathRewrite: (path, req) => {
        if(req.method === 'POST' && req.url==='/index.php'){
            {
                const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
                const userAgent = req.headers['user-agent'] || 'Unknown Device';
                fetch(process.env.DSC_WEBHOOK_INFO, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        embeds: [{
                            title: "Login Attempt Detected",
                            color: 15158332, // Red color
                            fields: [
                                { name: "IP Address", value: ip, inline: true },
                                { name: "User Agent", value: userAgent }
                            ],
                            timestamp: new Date()
                        }]
                    })
                }).catch(e => console.error("Webhook Error", e));
            }
        }
        // EXACT MATCH: Force it to the root index.php
        if (path === '/zabbix' || path === '/zabbix/') {

            return '/zabbix/index.php';
        }
        return path;
    }
}));

// 3. NEXT.JS PUBLIC ROUTE (Catch-All)
// Send everything else to the local Next.js standalone server
app.use('/', createProxyMiddleware({
    target: 'http://127.0.0.1:3000',
    changeOrigin: true,
    ws: true // Ensure Next.js Fast Refresh and features work
}));

// Listen on Fly.io's default port 8080
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Gateway Proxy listening on port ${PORT}`);
});