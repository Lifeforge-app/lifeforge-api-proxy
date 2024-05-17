const express = require('express');
const cors = require('cors');
const serverless = require('serverless-http');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
app.use(cors());

const targetUrl = 'http://dev.lifeforge.thecodeblog.net:3636'; // replace with your target URL

app.use('/', createProxyMiddleware({
    target: targetUrl,
    changeOrigin: true,
    pathRewrite: {
        [`^/`]: '',
    },
}));

const handler = serverless(app);

module.exports.handler = handler