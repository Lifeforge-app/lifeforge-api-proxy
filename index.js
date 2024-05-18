const express = require('express');
const cors = require('cors');
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

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running on port 3000');
})