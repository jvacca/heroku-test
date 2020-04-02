const express = require('express');
const app = express();
const webpack = require('webpack');
const webpack_config = require('./webpack.dev.js');
const middleware = require('webpack-dev-middleware');
const compiler = webpack(webpack_config);


const siteData = require('./campaigns/suits-ways-to-wear-it/server/data/data_2020_04_20.json');

const path = require('path');
const bodyParser = require('body-parser');
//const cookieParser = require('cookie-parser');
const exphbs = require('express-handlebars');

const env = process.env.NODE_ENV || 'dev';
app.set('port', '1111');
let hbs = exphbs.create({
	extname: '.hbs'
});

app.set('views', __dirname + '/views');
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

app.use(express.static(path.join(__dirname, webpack_config.output.publicPath)));

app.use(middleware(compiler, {
  publicPath: webpack_config.output.publicPath
}));

app.get('/', function (req, res) {
  res.render('main', siteData);
});

app.listen(app.get('port'), function() {
	console.log("Listening on port " + app.get('port'));
});