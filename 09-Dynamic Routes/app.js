const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
//const {engine} = require('express-handlebars');
const app = express();

/* app.engine('hbs',engine({ /* defaultLayout: false ,  layoutsDir:'views/layouts', defaultLayout:'main-layout', extname:'hbs'}));
app.set('view engine', 'hbs'); */

app.set('view engine', 'ejs');
app.set('views', 'views');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorRoute = require('./controllers/error');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes.routes);
app.use(shopRoutes.routes);

app.use(errorRoute.get404);

app.listen(3000);
