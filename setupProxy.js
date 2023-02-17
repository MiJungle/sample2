const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://devapi.secondwind.co.kr//api/v1/auth/login",
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};
