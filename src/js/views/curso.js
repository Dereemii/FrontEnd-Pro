/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Barra_Progreso } from "../component/Cursos/barra_progreso";
import { Context } from "../store/appContext";
import "../../styles/App.css";

export const Curso = ({match}) => {

  const { store } = useContext(Context);

  return(
    <>
    <div className="container">
      <Barra_Progreso/>
      <div className="row my-3 border-bottom">
        <div className="col text-center mb-5 py-5">
        <p>
          <strong>{store.preguntas[match.params.id-1].enunciado}</strong>
        </p>
        <img className="img-fluid m-2" src={`../../img/iconos.jpg`} alt="Responive image"/>
          <br/>
          {store.respuestas.map((item, index) => (
          <>
          <button type="button" className="btn btn-outline-primary mx-1">{item.respuesta}</button>
          </>
          ))}

          <br></br>
          <br></br>
        </div>
      </div>

      <div className="row my-3 border-bottom">
        <div className="col m-auto text-center">
          <button type="button" className="btn btn-outline-secondary btn-lg">
            Salir
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
      </>
      )
      
}

  

  

