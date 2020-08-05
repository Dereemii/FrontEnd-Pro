import React from "react";

export const JuegoUnoEncender = () => {
    return (
        <>
            <div className="container">

                <div className="row titulos_juego_encender">
                    <h1>¿Para encender tu Telefono Que Necesita Tener...?</h1>
                </div>

                <div className="row container">
                    <div className="col-4">
                         <button className="botones_de_preguntas">
                            <img
                                className="JuegoUnoEncender"
                                src="https://i.ibb.co/TMCPvBV/imagen-De-Usuario.png"
                                alt="imagen-De-Usuario"
                                border="0"
                            />
                            <p>Mas del 50% de Bateria</p>
                        </button>
                    </div>

                    <div className="col-4">
                         <button className="botones_de_preguntas">
                            <img
                                className="JuegoUnoEncender"
                                src="https://i.ibb.co/TMCPvBV/imagen-De-Usuario.png"
                                alt="imagen-De-Usuario"
                                border="0"
                            />
                            <p>Que se este Cargando</p>
                        </button>
                    </div>

                    <div className="col-4">
                         <button className="botones_de_preguntas">
                            <img
                                className="JuegoUnoEncender"
                                src="https://i.ibb.co/TMCPvBV/imagen-De-Usuario.png"
                                alt="imagen-De-Usuario"
                                border="0"
                            />
                            <p>Menos del 15% de Bateria</p>
                        </button>
                    </div>
                </div>
            </div>

        </>
    );
};