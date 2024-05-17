const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
app.use(cors());

const targetUrl = 'http://dev.lifeforge.thecodeblog.net:3636'; // replace with your target URL

app.use('/*', createProxyMiddleware({ 
    target: targetUrl, 
    changeOrigin: true,
    pathRewrite: {
        '^/': '/', // remove base path
    },
}));

app.listen(80, () => {
    console.log('Proxy server is running on port 80');
});