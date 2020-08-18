import "bootstrap/dist/css/bootstrap.min.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import React, { useContext } from "react";

export const Welcome = () => {
  const { actions } = useContext(Context);
  return (
    <>
      <div className="container square my-5">
          <div className="row">
            <div className="col-2"></div>
                    <div className="col">
                      <h4 className="text-center">¿ No tienes cuenta ? </h4>
                    </div>
            <div className="col-2"></div>
          </div>
          <div className="row">
            <div className="col">
              <div className="row my-3 mx-3">
                <div className="col align-sel-center text-center">
                  <Link className="btn btn-success btn-lg btn-block my-5" to={"/seleccion_curso/invitado"} onClick={() =>{actions.getTodo()}}>
                    Ingresa como invitado
                  </Link>
                  <h4>o crea una cuenta</h4>
                  <Link className="btn btn-primary btn-lg btn-block my-5" to={"/registro"}>
                    Crear cuenta
                  </Link>
                </div>

              </div>
            </div>
        </div>
      </div>
    </>
  );
};
