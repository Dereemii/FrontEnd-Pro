//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import 'bootstrap/dist/css/bootstrap.min.css';
import "jquery";
 import "popper.js";

import 'jquery'; 
import 'popper.js'; 
import 'bootstrap'; // js bootstrap

import * as $ from 'jquery';

//include your index.scss file into the bundle
import "./styles/index.css";
import "./styles/modo_oscuro.css";

//import your own components
import Layout from "./layout";
import "popper.js";
import "jquery";

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#root"));

$(function () {
    $('[data-toggle="popover"]').popover()
  })

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
