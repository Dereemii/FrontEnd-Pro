//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import 'bootstrap/dist/css/bootstrap.min.css';
import "jquery";
 import "popper.js";

import 'jquery'; 
import 'popper.js'; 
import 'bootstrap';

//include your index.scss file into the bundle
import "./styles/index.css";

//import your own components
import Layout from "./layout";
import "popper.js";
import "jquery";

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#root"));
