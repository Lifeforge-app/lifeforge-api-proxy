const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const port = process.env.PORT || 3001;

const app = express();
const router = express.Router();

const targetUrl = process.env.TARGET_URL; 

router.use(cors());
router.use('/', createProxyMiddleware({
    target: targetUrl,
    changeOrigin: true,
    pathRewrite: {
        [`^/`]: '',
    },
}));

app.use('/', router);

app.listen(port, () => console.log(`Proxy server listening on port ${port}!`));
