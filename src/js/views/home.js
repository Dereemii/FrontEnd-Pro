import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

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
        <Link className="btn btn-primary btn-lg btn-block my-2" to={"/welcome"}>
            Comienza
        </Link>
        <Link className="btn btn-success btn-lg btn-block my-3" to={"/login"}>
            Ya tengo una cuenta
        </Link>
      </div>
      <div className="col-3"></div>
    </div>
  </div>
);
