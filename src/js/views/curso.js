import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export const Curso = () => (
  <div className="container">
      <div className="row">
        <div className="col mt-5 mb-2 text-center"><h2>Selecciona un curso</h2></div>
      </div>
      <div className="row my-3 ">
          <div className="col-sm mr-3 text-center"><Link to={"/curso/1"}><button type="button" className="btn btn-primary"><h3 className="my-1">Curso 1</h3><p className="my-2">Icono o imagen</p><p>Breve descripción del curso</p></button></Link></div>
          <div className="col-sm mr-3 text-center"><Link to={"/Vista_Tutorial_Encender_Celular_Pregunta_1"}><button type="button" className="btn btn-secondary"><h3 className="my-1">Curso 2</h3><p className="my-2">Icono o imagen</p><p>Encender un Smartphone</p></button></Link></div>
          <div className="col-sm mr-3 text-center"><button type="button" className="btn btn-success"><h3 className="my-1">Curso 3</h3><p className="my-2">Icono o imagen</p><p>Breve descripción del curso</p></button></div>
      </div>
      <div className="row my-3 ">
          <div className="col-sm mr-3 text-center"><button type="button" className="btn btn-danger"><h3 className="my-1">Curso 4</h3><p className="my-2">Icono o imagen</p><p>Breve descripción del curso</p></button></div>
          <div className="col-sm mr-3 text-center"><button type="button" className="btn btn-warning"><h3 className="my-1">Curso 5</h3><p className="my-2">Icono o imagen</p><p>Breve descripción del curso</p></button></div>
          <div className="col-sm mr-3 text-center"><button type="button" className="btn btn-info"><h3 className="my-1">Curso 6</h3><p className="my-2">Icono o imagen</p><p>Breve descripción del curso</p></button></div>
      </div>
      <div className="row my-3 ">
          <div className="col-sm mr-3 text-center"><button type="button" className="btn btn-light"><h3 className="my-1">Curso 7</h3><p className="my-2">Icono o imagen</p><p>Breve descripción del curso</p></button></div>
          <div className="col-sm mr-3 text-center"><button type="button" className="btn btn-dark"><h3 className="my-1">Curso 8</h3><p className="my-2">Icono o imagen</p><p>Breve descripción del curso</p></button></div>
          <div className="col-sm mr-3 text-center"><button type="button" className="btn btn-link border"><h3 className="my-1">Curso 9</h3><p className="my-2">Icono o imagen</p><p>Breve descripción del curso</p></button></div>
      </div>
    </div>



);
