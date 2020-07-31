import React, { Component } from "react";

export const Register = () => {
  return (
    <>
      <div className="container my-5">  
        <div className="row">
          <div className="col mr-5">     
            <form className="px-4 py-3">
              <div className="form-group">
                <label for="exampleDropdownFormEmail1">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleDropdownFormEmail1"
                  placeholder="correo@ejemplo.com"
                />
              </div>
              <div className="form-group">
                <label for="exampleDropdownFormPassword1">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleDropdownFormPassword1"
                  placeholder="Contraseña"
                />
              </div>
              <div className="form-group">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="dropdownCheck"
                  />
                  <label className="form-check-label" for="dropdownCheck">
                    Recuerda mis datos
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block">
                ingresar
              </button>
            </form>
          </div>
          <div className="col">
            <div className="row my-3 mx-3">
              <div className="col align-sel-center text-center">
                <button
                  type="submit"
                  className="btn btn-secondary btn-lg btn-block my-5"
                >
                  ingresa como invitado
                </button>
                <h4>o crea una cuenta</h4>
                <button
                  type="submit"
                  className="btn btn-secondary btn-lg btn-block my-5"
                >
                  Crear cuenta
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
