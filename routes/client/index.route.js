const homeRoute = require("./home.route");
const productRouter = require("./product.route");

module.exports = (app) => {
  app.use('/', homeRoute);

  app.use('/products', productRouter );
}