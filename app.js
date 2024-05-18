const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const port = process.env.PORT || 3001;

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


const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));
