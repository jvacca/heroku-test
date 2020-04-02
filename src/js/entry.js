import '../scss/page.scss';
import apiData from '../../data/data.json';

let template = require('../templates/my_templates.hbs');
let pageData = {};


$(function() {
  pageData.apiData = apiData;

  //$(".page-container").html(template(pageData));
  console.log("Yo here I am");
});