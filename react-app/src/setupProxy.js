const { createProxyMiddleware } = require('http-proxy-middleware')
module.exports = function (app) {
  app.use(
    '/query',
    createProxyMiddleware({
      //   target: 'http://database.trwl.club:8086',
      target: 'http://localhost:4000',

      changeOrigin: false,
    })
  )
}
