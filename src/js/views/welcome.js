import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Welcome = () => {
  return (
    <>
      <div className="container my-5">
          <div className="row">
			  <div className="col-2"></div>
                <div className="col">
                  <h3 className="text-center">¿ No tienes cuenta ? </h3>
                </div>
				<div className="col-2"></div>
            </div>
        <div className="row">
		<div className="col-2"></div>
          <div className="col">
            <div className="row my-3 mx-3">
              <div className="col align-sel-center text-center">
                <Link className="btn btn-success btn-lg btn-block my-5" to={"/curso"}>
<<<<<<< HEAD
                ingresa como invitado
=======
                  Ingresa como invitado
>>>>>>> 13a93e60dd7c54dcf1dad5c708e50102451379d2
                </Link>
                <h4>o crea una cuenta</h4>
                <Link className="btn btn-primary btn-lg btn-block my-5" to={"/registro"}>
                  Crear cuenta
                </Link>
              </div>
            </div>
          </div>
		  <div className="col-2"></div>
        </div>
      </div>
    </>
  );
};
