import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import { Link } from "react-router-dom";

import "../../../styles/home.css"


export const Editar_Usuario = (props) => {
  const { store, actions } = useContext(Context);
 

  return (
    
    <>
      <div className="container m-4">
        <div>
          <h4 className="text-center mb-4">Editar información de contacto</h4>
          </div>
          
		  <div className="row justify-content-center">
      <form className="col-md-auto border rounded" onSubmit={e => actions.handleRegister(e, props.history)}>
        <div className="row">
          <div className="col-10">

          </div>
          <div className="col-2">
            <button type="button" className="close" aria-label="Close" data-toggle="modal" data-target="#salir">
          <span aria-hidden="true">
            &times;
          </span>
        </button>
          </div>
        </div>
            <div className="form-group">
              <label htmlFor="nombre_usuario" className="form-label">
                Nombre
              </label>
              <input
                type="nombre_usuario"
                id="nombre_usuario"
                name="nombre_usuario"
                className="form-control"
                placeholder="Su nombre de usuario"
                defaultValue={store.nombre_usuario}
                onChange={actions.handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="correo" className="form-label">
                Correo
              </label>
              <input
                type="correo"
                id="correo"
                name="correo"
                className="form-control"
                placeholder="correo@ejemplo.com"
                defaultValue={store.correo}
                onChange={actions.handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="telefono" className="form-label">
                Telefono
              </label>
              <input
                type="telefono"
                id="telefono"
                name="telefono"
                /* pattern="[0-9]{8}" */
                className="form-control"
                placeholder="+569 12345678"
                defaultValue={store.telefono}
                onChange={actions.handleChange}
                required
              />
            </div>
 
            <button type="submit" className="btn btn-primary form-control mb-4">
              Guardar cambios
            </button>
          </form>
      </div>
        
      <div className="modal fade" id="salir" tabindex="-1" role="dialog" aria-labelledby="salir" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="salir">Abandonar</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <h5>Los cambios no se guardaran !</h5>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-light" data-dismiss="modal">regresar</button>
                <Link type="button" className="btn btn-danger" to="/seleccion_curso/:usuario">Abandonar</Link>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};
