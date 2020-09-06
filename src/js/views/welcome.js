import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import ThemeMode from "../component/ThemeMode";

export const Welcome = () => {
  const { actions } = useContext(Context);
  return (
    <>
      <div className="container my-5">
      <ThemeMode />  {/* Lo agrego para ir probando */}
          <div className="row justify-content-center">
            <form className="col-md-auto mt-4 pt-4 ">
              <div className="row my-3 mx-3 justify-content-center">
                <div className="col align-self-center text-center">
                <h5 className="text-center  enunciado">¿ No tienes cuenta ? </h5>
                  <Link className="btn btn-md btn-block mt-4 mb-5 button2" to={"/seleccion_curso"} onClick={() =>{actions.getTodo()}}>
                    Ingresa como invitado 
                  </Link >
                  <h5 className=" enunciado">Crea una cuenta</h5>
                  <Link className="btn  btn-md btn-block my-4 button3" to={"/registro"}>
                    Crear cuenta
                  </Link>
                  <Link className="btn  btn-md btn-block my-5 button1" to={"/"}>
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
