import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";

import Coach from "../../img/svg/coach.png"
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";


export const Administrador = () => {
  const {store, actions} = useContext(Context);

  return(
    <>
    <Navbar/>
      <div className="container">

          <div className="row my-5 justify-content-center">
            <div className="col-md-auto p-5 align-self-center text-center mx-2">
              <div className="tarjeta p-4">
                <h4 className="my-4">Crear curso</h4>
                <Link className="btn button1 btn-md btn-block my-4" to={"/registrar_curso"}>
                  Crear
                </Link>
              </div>
              <div className="tarjeta p-4">
                <h4 className="my-4">Editar cursos</h4>
                <Link className="btn button1 btn-md btn-block my-4" to={"/Admin_curso"}>
                   Editar
                </Link>
              </div>
              <div className="tarjeta p-4">
              <h4 className="mt-4">Administrar </h4>
               <h4 className="mb-4">Usuarios</h4>
                 <Link className="btn button1 btn-md btn-block my-4" to={"/usuarios"}>
                   Administrar
                 </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </>
  );
  
};
