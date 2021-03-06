import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useHistory } from "react-router-dom";
import ThemeMode from "../component/ThemeMode";
import Coach from "../../img/svg/coach.png"


export const Home = () => {
  const {store, actions} = useContext(Context);
  const { currentUser } = store;
  const history = useHistory();

  useEffect(()=> {
    if(store.estaAut === true){
        console.log("Home esta autenticado")
        console.log(store.estaAut)
        history.push("/seleccion_curso")
    } else{
        console.log("Home no esta autenticado")
        history.push("/")
    };
}, [])

  return(
    <>
      <div className="container">
      <ThemeMode />  {/* Lo agrego para ir probando */}
          <div className="row my-5">
            <div className="col"></div>
          </div>
          <div className="row my-5 justify-content-center">
            <div className="col-md-auto p-5 align-self-center text-center mx-2">
              <img src={Coach} alt="picture-coach" className="picture-coach"/>
            </div>
              <form className="col-md-auto p-5 align-self-center text-center mx-2">
            <h4 className="my-4 bievenido  enunciado">Bienvenido</h4>
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
