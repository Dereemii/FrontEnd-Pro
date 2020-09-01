import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";

import Coach from "../../img/svg/coach.png"


export const Home = () => {
  const {store, actions} = useContext(Context);

  return(
    <>
      <div className="container">
          <div className="row my-5">
            <div className="col"></div>
          </div>
          <div className="row my-5 justify-content-center">
            <div className="col-md-auto p-5 align-self-center text-center mx-2">
              <img src={Coach} alt="picture-coach" className="picture-coach"/>
            </div>
              <form className="col-md-auto p-5 align-self-center text-center mx-2">
            <h4 className="my-4">Bienvenido</h4>
              <Link className="btn button1 btn-md btn-block my-4" to={"/welcome"}>
                  Comienza
              </Link>
              <Link className="btn button2 btn-md btn-block my-4" to={"/login"}>
                  Ya tengo una cuenta
              </Link>
            </form>
            
           
          </div>
        </div>
      </>
  );
  
};
