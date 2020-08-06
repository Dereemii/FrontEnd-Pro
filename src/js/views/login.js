import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";

export const Login = props => {
  const {store, actions} = useContext(Context);
  const {history} = props;

  return (
    <>
      <div className="container my-5">
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

          <div className="row">
              <div className="col mr-5">
              
                  <h3 className="text-center">Ingresar</h3>
                </div>
            </div>
        <div className="row">
            <div className="col-2"></div>
          <div className="col mr-5">
            <form className="container px-4 py-3" onSubmit={e => actions.handleLogin(e, props.history)}>
              <div className="form-group">
                <label htmlFor="correo" className="form-label">
                  Correo electrónico
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
                <label htmlFor="clave" className="form-label">clave</label>
                <input
                  type="clave"
                  id="clave"
                  name="clave"
                  className="form-control"
                  placeholder="******"
                  defaultValue={store.clave}
                  onChange={actions.handleChange}
                  required
                />
              </div>
              
              <button className="btn btn-primary btn-lg btn-block">
                ingresar
              </button>
            </form>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </>
  );
};
