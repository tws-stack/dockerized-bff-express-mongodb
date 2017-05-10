exports.setRoutes = app => {
  app.use('/items', require('./routers/items'))
}
