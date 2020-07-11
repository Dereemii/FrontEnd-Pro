import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const mystyle = { width: "50%" };
const progress = { height: "30px"};

export const Curso1 = () => (
  <div className="container">
    <div className="row my-3">
      <div className="col-1 m-auto text-center">
        <button type="button" className="close" aria-label="Close">
          <span aria-hidden="true">
            &times;
          </span>
        </button>
      </div>
      <div className="col-11 m-auto text-center">
        <div className="progress my-4" style={progress}>
          <div
            className="progress-bar progress-bar-striped bg-info"
            role="progressbar"
            style={mystyle}
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
    <div className="row my-3 border-bottom">
      <div className="col text-center mb-5 py-5">
        <p>
          <strong>Pregunta del curso 1, por ejemplo: ¿Donde se encuentra el boton ...?</strong>
        </p>
        <p className="p-5">Contenido - imagen para responder esa pregunta</p>
        <p>Opciones</p>
        <span className="m-2 p-2 border">Opcion A</span>
        <span className="m-2 p-2 border">Opcion B</span>
        <span className="m-2 p-2 border">Opcion C</span>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
    <div className="row my-3 border-bottom">
      <div className="col m-auto text-center">
        <button type="button" className="btn btn-outline-secondary btn-lg">
          Saltar
        </button>
      </div>
      <div className="col text-center py-5">
        
      </div>
      <div className="col m-auto text-center">
        <button type="button" className="btn btn-secondary btn-lg">
          Calificar
        </button>
      </div>
    </div>
  </div>
);
