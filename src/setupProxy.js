const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    "/v3",
    createProxyMiddleware({
      target: "http://dapi.kakao.com",
      changeOrigin: true,
    })
  );
}