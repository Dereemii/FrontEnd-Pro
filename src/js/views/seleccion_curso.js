/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useHistory } from "react-router-dom";
import TataExpert from "../../img/tataexpert.JPG";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";

export const Seleccion_curso = () => {
    const { store, actions } = useContext(Context);
    const { currentUser } = store;
    const history = useHistory();
    const name = !!currentUser ? currentUser.usuario.nombre_usuario : "Invitado";

    const [ocultar, setOcultar]= useState(" d-none")


    /* useEffect(() => { actions.autenticacion(); if (!store.estaAutenticado) history.push("/")
     else history.push("seleccion_curso"); }, []); */
    function ocultarBoton(){

    }

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col mt-5 mb-2 text-center text-white rounded">
                        <h4>Selecciona un curso</h4></div>
                </div>
                <div className="row justify-content-center">
                    {store.lecciones.map((item, index) => (
                        <div className="tarjeta m-4 border-0" key={item.index}>
                            <div className="tarjeta-contenido text-center border-0" >
                                <img className="tarjeta-img-top" src={`../../img/${item.nombre}.jpg`} alt="Card image cap" />
                                <div className="tarjeta-cuerpo my-3">
                                <Link to={`/curso/${item.id}`} className={"oculto btn btn-primary"} >Comenzar</Link>
                                    <h5 className="tarjeta-titulo">{item.nombre}</h5>
                                    
                                </div>
                            </div>
                        </div>))}
                </div>
            </div>
            <Footer />
        </>
    );
};
