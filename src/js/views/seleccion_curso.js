/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useHistory } from "react-router-dom";
import TataExpert from "../../img/tataexpert.JPG";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";

export const Seleccion_curso = () => {
    const { store, actions } = useContext(Context);
    const { currentUser } = store;
    const history = useHistory();
    const name = !!currentUser ? currentUser.usuario.nombre_usuario : "Invitado"

    useEffect(() => {
        if(!store.isAuth) history.push("/login");
        
    }, [])

    return (
        <>
        <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col mt-5 mb-2 text-center text-white bg-info">
                        <h4>{name}</h4>
                        <h4>Selecciona un curso</h4></div>
                </div>
                <div className="row justify-content-center">
                    {store.lecciones.map((item, index) => (
                        <div className="card m-4" key={item.index}>
                        <div className="card text-center" >
                            <img className="card-img-top" src={`../../img/${item.nombre}.jpg`} alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title">{item.nombre}</h5>
                                    <Link to={`/curso/${store.correo}/${item.id}`} className="btn btn-primary">Comenzar</Link>
                                </div>
                        </div>
                        </div>))}
                </div>
            </div>
            <Footer/>
        </>
        );
};
