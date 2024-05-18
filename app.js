const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const port = process.env.PORT || 3001;

const app = express();
const router = express.Router();

const targetUrl = 'http://dev.lifeforge.thecodeblog.net:3636'; // replace with your target URL

router.use(cors());
router.use('/', createProxyMiddleware({
    target: targetUrl,
    changeOrigin: true,
    pathRewrite: {
        [`^/`]: '',
    },
}));

app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
