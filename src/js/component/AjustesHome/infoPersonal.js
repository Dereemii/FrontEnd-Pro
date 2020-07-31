import React from "react";
import { Link } from "react-router-dom"

export const InfoPersonal = () => {

    return (
        <>
            <div className="container">

                <br /><br /><br />

                <div className="contenedorConEdit">
                    <div className="ContenedorDeInfoPersonal">
                        <img
                            className="imagenDeUsuario"
                            src="https://i.ibb.co/TMCPvBV/imagen-De-Usuario.png"
                            alt="imagen-De-Usuario"
                            border="0"
                        />
                        <div className="infoPersonal">
                            <h1>Nombre Completo</h1>
                            <p>Nombre Completo</p>
                        </div>
                    </div>
                    <Link to="./edit" className="btnEdit">
                        Edit...
                        </Link>
                </div>

                <br /><br /><br />

                <div className="contenedorConEdit">
                    <div className="ContenedorDeInfoPersonal">
                        <img
                            className="imagenDeUsuario"
                            src="https://i.ibb.co/TMCPvBV/imagen-De-Usuario.png"
                            alt="imagen-De-Usuario"
                            border="0"
                        />
                        <div className="infoPersonal">
                            <h1>Nombre de Usuario</h1>
                            <p>Nombre de Usuario</p>
                        </div>
                    </div>
                    <Link to="./edit" className="btnEdit">
                        Edit...
                        </Link>
                </div>

                <br /><br /><br />

                <div className="contenedorConEdit">
                    <div className="ContenedorDeInfoPersonal">
                        <img
                            className="imagenDeUsuario"
                            src="https://i.ibb.co/TMCPvBV/imagen-De-Usuario.png"
                            alt="imagen-De-Usuario"
                            border="0"
                        />
                        <div className="infoPersonal">
                            <h1>Fecha De Nacimiento</h1>
                            <p>Fecha De Nacimiento</p>
                        </div>
                    </div>
                    <Link to="./edit" className="btnEdit">
                        Edit...
                        </Link>
                </div>

                <br /><br /><br />

                <div className="contenedorConEdit">
                    <div className="ContenedorDeInfoPersonal">
                        <img
                            className="imagenDeUsuario"
                            src="https://i.ibb.co/TMCPvBV/imagen-De-Usuario.png"
                            alt="imagen-De-Usuario"
                            border="0"
                        />
                        <div className="infoPersonal">
                            <h1>Edad</h1>
                            <p>Edad</p>
                        </div>
                    </div>
                    <Link to="./edit" className="btnEdit">
                        <i className="fas fa-edit"></i>
                        Edit...
                        </Link>
                </div>

                <br />

                <button type="submit" className="btn btn-primary botonesAjustes">
                    Confirmar
				</button>
                <button type="submit" className="btn btn-secondary botonesAjustes">
                    Cancelar
				</button>
            </div>
        </>
    );
};

export default InfoPersonal;