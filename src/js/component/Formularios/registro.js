import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import { useHistory, Link } from "react-router-dom";

import "../../../styles/home.css"

export const Formulario = (props) => {
  const { store, actions } = useContext(Context);
/*   const { history } = useHistory();
 */

  return (
    <>
      <div className="container">
      { !!store.msg && (<div
            className="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            <strong>Excelente!</strong> {store.msg}
            <Link type="button" className="btn btn-success" to="/login">Login</Link>
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>)}
        <div>
          <h1 className="text-center mt-5">Registrate Aqui</h1>
          
		  
          <form className="container" onSubmit={e => actions.handleRegister(e, props.history, actions.getUsers())}>
            <div className="form-group">
              <label htmlFor="nombre_usuario" className="form-label">
                Nombre de Usuario
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
                Correo Electronico
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
                Numero Telefonico
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
            <div className="form-group">
              <label htmlFor="clave" className="form-label">
                clave
              </label>
              <input
                type="clave"
                id="clave"
                name="clave"
                className="form-control"
                placeholder="Escriba una constraseña facil de recordar"
                defaultValue={store.clave}
                onChange={actions.handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary form-control">
              Registrar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Formulario;
