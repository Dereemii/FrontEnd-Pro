/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Barra_Progreso } from "../component/Cursos/barra_progreso";
import { Context } from "../store/appContext";
import "../../styles/App.css";
import { waitForElementToBeRemoved } from "@testing-library/react";
import { Link } from "react-router-dom";



export const Curso = ({match}) => {

  
  const { store, actions } = useContext(Context);
  //let indice = match.params.id-1;
  const [indice, setIndice] = useState(0);
  const [respuestaA, setRespuestaA] = useState("btn btn-outline-primary mx-1 btn-block");
  const [respuestaB, setRespuestaB] = useState("btn btn-outline-primary mx-1 btn-block");
  const [respuestaC, setRespuestaC] = useState("btn btn-outline-primary mx-1 btn-block");
  const [invisible, setInvisible] = useState("invisible");
  const [visible, setVisible] = useState("");
  const [cambioColor, setCambioColor] = useState("");
  const [mensaje, setMensaje] = useState(null);
  

  let porcentaje = [{width: "0%"}, {width: "20%"}, {width: "40%"}, {width: "60%"}, {width: "80%"}, {width: "100%"}]
  let mystyle = porcentaje[indice];
 

  function respuesta_correcta(){
    setInvisible("")
    setVisible("invisible")
    setCambioColor("bg-success")
    setMensaje(<div className="col-12 bg-success text-white"><p>Respuesta correcta, haz clic en avanzar</p></div>)

  }

  function respuesta_incorrecta(){
    setCambioColor("bg-danger")
    setMensaje(<div className="col-12 bg-danger text-white"><p>Respuesta incorrecta, intentalo nuevamente</p></div>)
  }

  function avanzar() {

    setIndice(indice +1);
    console.log(indice);
    if (indice > 3){
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
    (actions.getSeleccion(store.respuestas[indice].opcion_a));
    setRespuestaA("btn btn-primary mx-1 btn-block");
    setRespuestaB("btn btn-outline-primary mx-1 btn-block");
    setRespuestaC("btn btn-outline-primary mx-1 btn-block");
  }

  function seleccion_b(){
    (actions.getSeleccion(store.respuestas[indice].opcion_b));
    setRespuestaA("btn btn-outline-primary mx-1 btn-block");
    setRespuestaB("btn btn-primary mx-1 btn-block");
    setRespuestaC("btn btn-outline-primary mx-1 btn-block");
  }

  function seleccion_c(){
    (actions.getSeleccion(store.respuestas[indice].opcion_c));
    setRespuestaA("btn btn-outline-primary mx-1 btn-block");
    setRespuestaB("btn btn-outline-primary mx-1 btn-block");
    setRespuestaC("btn btn-primary mx-1 btn-block");
  }


  

  return(
    (indice<4)?
    <>
    <div className="container ">
    <div className="row my-3">
      <div className="col-1 m-auto text-center">
        <button type="button" className="close" aria-label="Close">
          <span aria-hidden="true">
            &times;
          </span>
        </button>
      </div>
      <div className="col-11 m-auto text-center">
        <div className="progress my-4" >
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
      <div className="container bg-light border rounded">
      <div className="row py-3">
        <div className="col text-center py-2 ">
          <strong>{store.respuestas[indice].pregunta.enunciado}</strong>
        </div>
      </div>
      <div className="row justify-content-center py-2">
      <img className="imagenes img-fluid p-2" src={`../../img/iconos.jpg`} alt="Responive image"/>
      </div>
          <div className="row justify-content-center py-3">
            <div className="col">
            <button 
            type="button" 
            className={respuestaA}
            onClick={() => seleccion_a()}
            >{store.respuestas[indice].respuesta_a}</button>
          </div>
            <div className="col">
            <button 
            type="button" 
            className={respuestaB}
            onClick={() => seleccion_b()}
            >{store.respuestas[indice].respuesta_b}</button>
          </div>
            <div className="col">
            <button 
            type="button" 
            className={respuestaC}
            onClick={() => seleccion_c()}
            >{store.respuestas[indice].respuesta_c}</button>
          </div>
        </div>

        
      </div>
      
      <div className={"row justify-content-center p-2 " + cambioColor }>
        {mensaje}
        <div className="col">
          <button type="button" className="btn btn-block btn-danger mx-1 px-3 invisible" data-toggle="modal" data-target="#salir">Salir</button>
        </div>
        <div className="col">
          <button type="button" className={"btn btn-block btn-success mx-1 px-3 " + invisible} onClick={()=> avanzar()}>AVANZAR</button>
        </div>
        <div className="col">
          <button type="button" className={"btn btn-block btn-secondary mx-1 px3 " + visible} onClick={() => store.seleccion === true?  respuesta_correcta() : respuesta_incorrecta()}>CALIFICAR</button>
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
                <button type="button" className="btn btn-danger">Abandonar la lección</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </> : 
      <>
      <div className="container">
        <div className="row justify-content-center py-2">
          <div className="col-12 text-center">
            <h2>Bien hecho!!</h2>
            <h4>Leccion compeltada!</h4>
            <h4>+ 10 experiencia</h4>
          <div className="col">
            <Link className="btn btn-success mx-1 px-3 " to="/seleccion_curso">CONTINUAR</Link>
          </div>
          </div>
        </div>
        
      </div>
      </>
      )
      
};



  

  

