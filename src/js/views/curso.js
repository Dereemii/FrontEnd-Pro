/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Barra_Progreso } from "../component/Cursos/barra_progreso";
import { Context } from "../store/appContext";
import "../../styles/App.css";
import { waitForElementToBeRemoved } from "@testing-library/react";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";

import Knowledge from "../../img/svg/hiking_modificado.svg"


export const Curso = ({match}, props) => {

  const {history} = props;
  const { store, actions } = useContext(Context);
  let leccion_id = match.params.id;
  console.log("leccion id: " + leccion_id);
  const [indice, setIndice] = useState(0);
  const [respuestaA, setRespuestaA] = useState("btn btn-outline-primary mx-1 btn-block");
  const [respuestaB, setRespuestaB] = useState("btn btn-outline-primary mx-1 btn-block");
  const [respuestaC, setRespuestaC] = useState("btn btn-outline-primary mx-1 btn-block");
  const [invisible, setInvisible] = useState("invisible");
  const [visible, setVisible] = useState("");
  const [cambioColor, setCambioColor] = useState("");
  const [mensaje, setMensaje] = useState(null);
  

  let porcentaje = [{"width": "0%"}, {"width": "20%"}, {"width": "40%"}, {"width": "60%"}, {"width": "80%"} , {"width": "100%"}]
  let mystyle = porcentaje[indice+1];
 

  function respuesta_correcta(){
    setInvisible("")
    setVisible("invisible")
    setCambioColor("respuesta_correcta")
    console.log("indice: " + indice);
    console.log(mystyle);
    /* setMensaje(<div className="respuesta_correcta col-12 text-center text-white"><p>Respuesta correcta!</p></div>) */
    setMensaje(
      <div className="respuesta_correcta col-12">
        <div className="container">
          <div className="row justify-content-center mt-2">
            Respuesta correcta
          </div>
          <div className="row justify-content-center mt-2">
          <button type="button" className="btn btn-light " onClick={()=> avanzar()}>Avanzar</button>
          </div>
        </div>
      </div>)
  }

  function respuesta_incorrecta(){
    setCambioColor("respuesta_incorrecta")
    setVisible("invisible")
    console.log("indice: " +indice);
    setMensaje(
    <div className="respuesta_incorrecta col-12 text-white">
      <div className="container">
        <div className="row justify-content-center mt-2">
          Respuesta incorrecta
        </div>
        <div className="row justify-content-center mt-2">
        <button className="btn btn-light" onClick={() => {setMensaje(null); setCambioColor(""); setVisible("visible")}}>intentalo nuevamente</button>
        </div>
      </div>
    </div>)
  }

  function avanzar() {

    setIndice(indice +1);
    console.log("indice: "+ indice);
    if (indice > 5){
      console.log("fin del curso")
    };
    setRespuestaA("btn btn-outline-primary mx-1 btn-block");
    setRespuestaB("btn btn-outline-primary mx-1 btn-block");
    setRespuestaC("btn btn-outline-primary mx-1 btn-block");
    setInvisible("invisible")
    setVisible("")
    setCambioColor("")
    setMensaje(null);
    actions.getSeleccion("seleccionar")

  
  }

  function seleccion_a(){
    (actions.getSeleccion(store.preguntas[indice].respuestas[0].opcion_a));
    setRespuestaA("btn btn-primary mx-1 btn-block");
    setRespuestaB("btn btn-outline-primary mx-1 btn-block");
    setRespuestaC("btn btn-outline-primary mx-1 btn-block");
  }

  function seleccion_b(){
    (actions.getSeleccion(store.preguntas[indice].respuestas[0].opcion_b));
    setRespuestaA("btn btn-outline-primary mx-1 btn-block");
    setRespuestaB("btn btn-primary mx-1 btn-block");
    setRespuestaC("btn btn-outline-primary mx-1 btn-block");
  }

  function seleccion_c(){
    (actions.getSeleccion(store.preguntas[indice].respuestas[0].opcion_c));
    setRespuestaA("btn btn-outline-primary mx-1 btn-block");
    setRespuestaB("btn btn-outline-primary mx-1 btn-block");
    setRespuestaC("btn btn-primary mx-1 btn-block");
  }


  

  return(
    (indice<5)?
    <>
    <Navbar/>
    <div className="container">
    <div className="curso mt-3">
    <div className="row mr-2">
      <div className="col-1 m-auto text-center">
        <button type="button" className="close" aria-label="Close" data-toggle="modal" data-target="#salir">
          <span aria-hidden="true">
            &times;
          </span>
        </button>
      </div>
      <div className="col-10 m-auto text-center">
        <div className="progress my-4" >
          <div
            className="progress-bar progress-bar-striped active bg-info my-2"
            role="progressbar"
            style= {mystyle}
            aria-valuenow={indice*20}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
      <div className="contenido">
        <div className="row py-3">
          <div className="col text-center py-2 ">
            <strong>{store.lecciones[leccion_id-1].preguntas[indice].enunciado}</strong>
          </div>
        </div>
        <div className="imagen-pregunta row justify-content-center py-2">
          <img className="imagenes img-fluid p-2" src={`../../img/iconos.jpg`} alt="Responive image"/>
        </div>
        <div className="container">
          <div className="row justify-content-center py-3">
                <div className="col">
                <button 
                type="button" 
                className={respuestaA}
                onClick={() => seleccion_a()}
                >{store.lecciones[leccion_id-1].preguntas[indice].respuestas[0].respuesta_a}</button>
              </div>
                <div className="col">
                <button 
                type="button" 
                className={respuestaB}
                onClick={() => seleccion_b()}
                >{store.lecciones[leccion_id-1].preguntas[indice].respuestas[0].respuesta_b}</button>
              </div>
                <div className="col">
                <button 
                type="button" 
                className={respuestaC}
                onClick={() => seleccion_c()}
                >{store.lecciones[leccion_id-1].preguntas[indice].respuestas[0].respuesta_c}</button>
              </div>
            </div>
        </div> 
      </div>
      <div className="comtainer">
        <div className="row justify-content-center my-1 ">
          {mensaje}
            <div className={"col-4 " + visible}>
              <button 
                  type="button" 
                  className="btn btn-outline-dark btn-block mx-1"
                  onClick={() => store.seleccion === "verdadero"?  respuesta_correcta() : store.seleccion === "falso" ? respuesta_incorrecta() : null}>CALIFICAR
                </button>
            </div>
        </div>
      </div>
      
      </div>
    </div>
    <div className="modal fade" id="salir" tabindex="-1" role="dialog" aria-labelledby="salir" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="salir">Abandonar la lección</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <h5>Perderas tu progreso si abandonas la lección</h5>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-light" data-dismiss="modal">Regresar a la lección</button>
                  <Link type="button" className="btn btn-danger" to="/seleccion_curso">Abandonar la lección</Link>
                </div>
              </div>
            </div>
          </div>
    
      <Footer/>
      </> : 
      <>
      <div className="container">
        <div className="curso mt-4">
          <div className="row justify-content-center py-2">
            <div className="col-12 text-center mt-4">
              <h2>Bien hecho!!</h2>
              <h5>Leccion compeltada!</h5>
              <h5>+ 10 experiencia</h5>
              <br/>
              <img src={Knowledge} alt="picture-coach" className="picture-knowledge"/>
              <br/>
              <br/>
            <div className="col">
              <Link className="btn btn-success mx-1 px-3 " to="/seleccion_curso/invitado">CONTINUAR</Link>
            </div>
            </div>
          </div>
        </div>
      </div>
      
      </>
      )
      
};



  

  

