import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export const Curso = () => {
  const {store, actions} = useContext(Context);
  const {currentUser} = store;
  const name = !!currentUser ? currentUser.usuario.nombre_usuario : "Invitado"

  return(

  <div className="container">
      <div className="row">
        <div className="col mt-5 mb-2 text-center">
          <h4>{name}</h4>
          <h4>Selecciona un curso</h4></div>
      </div>
      <div className="row my-3 ">
          <div className="col-sm mr-3 text-center"><Link to={"/curso/1"}><button type="button" className="btn btn-primary"><h3 className="my-1">Curso 1</h3><p className="my-2">Icono o imagen</p><p>Breve descripción del curso</p></button></Link></div>
          <div className="col-sm mr-3 text-center"><button type="button" className="btn btn-secondary"><h3 className="my-1">Curso 2</h3><p className="my-2">Icono o imagen</p><p>Breve descripción del curso</p></button></div>
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
)
};
