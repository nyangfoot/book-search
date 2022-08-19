const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    "/search",
    createProxyMiddleware({
      target: "https://dapi.kakao.com/v3",
      changeOrigin: true,
    })
  );
}