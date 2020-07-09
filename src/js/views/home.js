import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export const Home = () => (
  <div className="container">
    <div className="row border">
		<div className="col text-center">
      		<h1>Bienvenido</h1>
	  	</div>
	  </div>
      <div className="row border my-5">
		  <div className="col-3"></div>
		  <div className="col">
			<button type="button" className="btn btn-info btn-lg btn-block">
			Comienza
			</button>
			<button type="button" className="btn btn-dark btn-lg btn-block">
			Ya tengo una cuenta
			</button>
			</div>
			<div className="col-3"></div>
    </div>
  </div>
);
