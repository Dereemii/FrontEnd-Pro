import React, { useContext, useState } from "react";
import { Context } from "../../store/appContext";
import { useHistory, Link } from "react-router-dom";
import ThemeMode from "../ThemeMode";


export const Formulario = (props) => {

  const { store, actions } = useContext(Context);

  const [feedbackCorreo, setFeedbackCorreo] = useState("");
  const [validarCorreo, setValidarCorreo] = useState("");
  const [mensajeCorreo, setMensajeCorreo] = useState("");

  const [feedbackNombre, setFeedbackNombre] = useState("");
  const [validarNombre, setValidarNombre] =useState("");
  const [mensajeNombre, setMensajeNombre] = useState("");

  const [feedbackTelefono, setFeedbackTelefono] = useState("");
  const [validarTelefono, setValidarTelefono] =useState("");
  const [mensajeTelefono, setMensajeTelefono] = useState("");

  const [feedbackClave, setFeedbackClave] = useState("");
  const [validarClave, setValidarClave] =useState("");
  const [mensajeClave, setMensajeClave] = useState("");

  function es_nombre(){
    if(store.nombre_usuario){
      if(store.nombre_usuario.length >= 4){
        setValidarNombre("is-valid")
        setMensajeNombre("Luce bien!")
        setFeedbackNombre("valid-feedback")
      }else{
        setValidarNombre("is-invalid")
        setMensajeNombre("ingresa al menos 4 caracteres")
        setFeedbackNombre("invalid-feedback")
      }
    }
    
  }

  function es_correo(){
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(store.correo){
      if (!regexEmail.test(store.correo)){
        setValidarCorreo("is-invalid");
        setMensajeCorreo("el email no es válido");
        setFeedbackCorreo("invalid-feedback")
      }else{
        setValidarCorreo("is-valid");
        setMensajeCorreo("Luce bien!");
        setFeedbackCorreo("valid-feedback")
      }
    }
    
  }

  function es_telefono(){
    if(store.telefono){
      if(store.telefono.length < 8){
        setValidarTelefono("is-invalid");
        setMensajeTelefono("ingresa al menos 8 numeros");
        setFeedbackTelefono("invalid-feedback")
      } else {
        setValidarTelefono("is-valid");
        setMensajeTelefono("Luce bien!");
        setFeedbackTelefono("valid-feedback")
      }
    }
  }

  function es_clave(){
    if(store.clave){
      if(store.clave.length < 6){
        setValidarClave("is-invalid");
        setMensajeClave("ingresa al menos 6 caracteres");
        setFeedbackClave("invalid-feedback")
      } else {
        setValidarClave("is-valid");
        setMensajeClave("Luce bien!");
        setFeedbackClave("valid-feedback")
      }
    }
  }

  return (
    <>
      <div className="container">
      <ThemeMode />  {/* Lo agrego para ir probando */}
      { !!store.msg && (<div
            className="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            <strong>Excelente!</strong> {store.msg}
            <Link type="button" className="btn btn-success ml-2" to="/login">Login</Link>
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>)}
          { !!store.error && (<div
            className="alert alert-warning alert-dismissible fade show"
            role="alert"
          >
            <strong>Holy guacamole!</strong> {store.error}
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>)}
        <div className="container">
          <div className="row justify-content-center">
            <form className="col-md-auto mt-5 px-5" onSubmit={e => actions.handleRegister(e, props.history, actions.getUsers())}  >
              <div className="row justify-content-center">
                <div className="col-md-auto">
                  <h4 className="col my-4">Registrate Aqui</h4>
                  <label htmlFor="nombre_usuario" className="form-label">
                    Nombre de Usuario
                  </label>
                  <input
                    type="nombre_usuario"
                    id="nombre_usuario"
                    name="nombre_usuario"
                    className={"form-control " + validarNombre}
                    placeholder="Ingresa un nombre"
                    defaultValue={store.nombre_usuario}
                    onChange={actions.handleChange}
                    onBlur={e => es_nombre()}
                    required
                  />
                  <div className={feedbackNombre}>
                  {mensajeNombre}
                  </div>
                </div>
              
              </div>
              <div className="row justify-content-center my-2">
                <div className="col-md-auto">
                  <label htmlFor="correo" className="form-label">
                    Correo Electronico
                  </label>
                  <input
                    type="correo"
                    id="correo"
                    name="correo"
                    className={"form-control " + validarCorreo}
                    placeholder="correo@ejemplo.com"
                    defaultValue={store.correo}
                    onChange={actions.handleChange}
                    onBlur={e => es_correo()}
                    required
                  />
                  <div className={feedbackCorreo}>
                  {mensajeCorreo}
                  </div>
                </div>
                
              </div>
              <div className="row justify-content-center my-2">
                <div className="col-md-auto">
                  <label htmlFor="telefono" className="form-label">
                    Numero Telefónico
                  </label>
                  <input
                    type="telefono"
                    id="telefono"
                    name="telefono"
                    /* pattern="[0-9]{8}" */
                    className={"form-control " + validarTelefono}
                    placeholder="12345678"
                    defaultValue={store.telefono}
                    onChange={actions.handleChange}
                    onBlur={e => es_telefono()}
                    required
                  />
                  <div className={feedbackTelefono}>
                  {mensajeTelefono}
                  </div>
                </div>
              </div>
              <div className="row justify-content-center my-2">
                <div className="col-md-auto">
                  <label htmlFor="clave" className="form-label">
                    Clave
                  </label>
                  <input
                    type="password"
                    id="clave"
                    name="clave"
                    className={"form-control " + validarClave}
                    placeholder="******"
                    defaultValue={store.clave}
                    onChange={actions.handleChange}
                    onBlur={e => es_clave()}
                    required
                  />
                  <div className={feedbackClave}>
                    {mensajeClave}
                  </div>
                  </div>
              </div>
              <div className="row justify-content-center my-2 mt-4">
                <div className="col">
                  <button type="submit" className="btn button1 form-control mb-3">
                    Registrar
                  </button>
                </div>
              </div>
              <div className="row justify-content-center my-2 mt-4">
                <div className="col">
                  <Link type="button" className="btn button2 form-control mb-3" to="/">
                    Regresar
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Formulario;
