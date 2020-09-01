import "bootstrap/dist/css/bootstrap.min.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import React, { useContext } from "react";

export const Welcome = () => {
  const { actions } = useContext(Context);
  return (
    <>
      <div className="container my-5">
          <div className="row justify-content-center">
            <form className="col-md-auto mt-4 pt-4">
              <div className="row my-3 mx-3 justify-content-center">
                <div className="col align-self-center text-center">
                <h5 className="text-center">¿ No tienes cuenta ? </h5>
                  <Link className="btn btn-success btn-md btn-block my-5" to={"/seleccion_curso/invitado"} onClick={() =>{actions.getTodo()}}>
                    Ingresa como invitado
                  </Link>
                  <h5>o crea una cuenta</h5>
                  <Link className="btn btn-primary btn-md btn-block my-5" to={"/registro"}>
                    Crear cuenta
                  </Link>
                  <Link className="btn btn-dark btn-md btn-block my-5" to={"/"}>
                    Regresar
                  </Link>
                </div>

              </div>
            </form>
        </div>
      </div>
    </>
  );
};
