import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router";

export const Login = props => {
  const {store, actions} = useContext(Context);
  const { history } = useHistory();
  /* const {history} = props; */

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
                <label htmlFor="email" className="form-label">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="correo@ejemplo.com"
                  defaultValue={store.email}
                  onChange={actions.handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password" className="form-label">Contraseña</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  placeholder="******"
                  defaultValue={store.password}
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
