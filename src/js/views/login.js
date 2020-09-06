import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useHistory, Link } from "react-router-dom";
import ThemeMode from "../component/ThemeMode";

export const Login = props => {
  const {store, actions} = useContext(Context);
  const history = useHistory();

  const [feedbackCorreo, setFeedbackCorreo] = useState("");
  const [mensajeCorreo, setMensajeCorreo] = useState("");

  const [feedbackClave, setFeedbackClave] = useState("");
  const [mensajeClave, setMensajeClave] = useState("");

  function es_correo(){
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(store.correo){
      if (!regexEmail.test(store.correo)){
        console.log("el email no es válido");
        setMensajeCorreo("el email no es válido");
        setFeedbackCorreo("invalid-feedback")
      }
    }
    
  };

  function es_clave(){
    if(store.clave){
      if(store.clave.length < 6){
        console.log("ingresa al menos 6 caracteres")
        setMensajeClave("ingresa al menos 6 caracteres");
        setFeedbackClave("invalid-feedback")
      }
    }
  };
  

  return (
    <>
      <div className="container my-5">
      <ThemeMode />  {/* Lo agrego para ir probando */}
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

          
        <div className="row justify-content-center">              
                <form className="col-md-auto px-4 py-3" onSubmit={e => actions.handleLogin(e, history)}>
                  <div className="row m-4">
                    <div className="col">
                      <h3 className="text-center enunciado">Ingresar</h3>
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-md-auto">
                      <label htmlFor="correo" className="form-label enunciado">
                        Correo electrónico
                      </label>
                      <input
                        type="correo"
                        id="correo"
                        name="correo"
                        className="form-control "
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
                  <div className="row justify-content-center">
                    <div className="col-md-auto">
                      <label htmlFor="clave" className="form-label  enunciado">Clave</label>
                      <input
                        type="password"
                        id="clave"
                        name="clave"
                        className="form-control "
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
                  
                  <button className="btn button1 btn-block mt-4">
                    Ingresar
                  </button>
                  <Link className="btn button2 btn-block my-3" to={"/welcome"}>
                    Regresar
                  </Link>
                </form>
              </div>
              </div>
    </>
  );
};
