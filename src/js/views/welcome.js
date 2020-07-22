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
                <Link to={"/curso"}>
                <button
                  type="submit"
                  className="btn btn-success btn-lg btn-block my-5"
                >ingresa como invitado
                </button>
                </Link>
                <h4>o crea una cuenta</h4>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block my-5"
                >
                  Crear cuenta
                </button>
              </div>
            </div>
          </div>
		  <div className="col-2"></div>
        </div>
      </div>
    </>
  );
};
