const express = require('express');
require("dotenv").config();

const database = require("./config/database");
const systemConfig = require("./config/system")

const routeAdmin = require("./routes/admin/index.route")
const route = require("./routes/client/index.route")

database.connect();

const app = express();
const port = process.env.PORT;

app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug');

// App Local Variables
app.locals.prefixAdmin = systemConfig.prefixAdmin;

app.use(express.static(`${__dirname}/public`));

//Routes
routeAdmin(app);
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});