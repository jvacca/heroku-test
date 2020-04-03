const express = require('express');
const app = express();
const siteData = require(__dirname + '/data/data.json');

const path = require('path');
const bodyParser = require('body-parser');
//const cookieParser = require('cookie-parser');
const handlebars = require('express-handlebars');

const env = process.env.NODE_ENV || 'dev';
console.log("Running express app in " + env + " mode");

app.set('port', process.env.port || '3000');

app.set('view engine', 'hbs');
app.engine('hbs', handlebars({
  layoutsDir: __dirname + '/views/layouts',
  extname: 'hbs'
}))

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function (req, res) {
  console.log("root rendering")
  //res.render('server_side_template', siteData);
  res.render('main', {layout: 'index', apiData:siteData});
});

app.listen(app.get('port'), function() {
	console.log("Listening on port " + app.get('port'));
});