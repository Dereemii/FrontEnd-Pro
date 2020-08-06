/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import TataExpert from "../../img/tataexpert.JPG";

export const Seleccion_curso = () => {
    const { store } = useContext(Context);
    const { currentUser } = store;
    const name = !!currentUser ? currentUser.usuario.nombre_usuario : "Invitado"

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col mt-5 mb-2 text-center text-white bg-info">
                        <h4>{name}</h4>
                        <h4>Selecciona un curso</h4></div>
                </div>
<div className="row">
                {store.lecciones.map((item, index) => (
                    <div className="card w-25 m-4" key={item.index}>
                    <div className="card text-center" >
                        <img className="card-img-top" src={`../../img/${item.nombre}.jpg`} alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">{item.nombre}</h5>
                                <p className="card-text">ID del curso: {item.id}</p>
                                <Link to={`/curso/${item.id}`} className="btn btn-primary">Comenzar</Link>
                            </div>
                    </div>
                    </div>))}
                </div>
                </div>
        </>
        );
};
