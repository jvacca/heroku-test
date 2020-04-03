import '../scss/page.scss';
import apiData from '../../data/data.json';
import React from "react";
import ReactDOM from "react-dom";
import Form from "./components/Form";

console.log("Yo here I am");

//let template = require('../templates/my_templates.hbs');
let pageData = {};

//pageData.apiData = apiData;
//$(".page-container").html(template(pageData));


const wrapper = document.getElementById("page-container");
ReactDOM.render(<Form />, wrapper);