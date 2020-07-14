import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const Home = () => (
  <div className="container">
    <div className="row my-5">
      <div className="col text-center">
        <h3>Bienvenido</h3>
      </div>
    </div>
    <div className="row my-5">
      <div className="col-3"></div>
      <div className="col">
        <Link to={"/welcome"}>
          <button className="btn btn-primary btn-lg btn-block my-2">
            Comienza
          </button>
        </Link>
        <Link to={"/login"}>
          <button className="btn btn-success btn-lg btn-block my-3">
            Ya tengo una cuenta
          </button>
        </Link>
      </div>
      <div className="col-3"></div>
    </div>
  </div>
);
