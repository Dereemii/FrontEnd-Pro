import React from "react";

export const JuegoDosEncender = () => {
    return (
        <>
            <div className="container">

                <div className="row titulos_juego_encender">
                    <h1>Cuando Salga el logo de la Marca de tu Celular, ¿Que Debes Hacer...?</h1>
                </div>

                <div className="container ContainerJuegoDosEncender">
                    <img
                        className="JuegoDosEncender"
                        src="https://i.ibb.co/TMCPvBV/imagen-De-Usuario.png"
                        alt="imagen-De-Usuario"
                        border="0"
                    />
                </div>



                <div className="row container">
                    <div className="col-4">
                        <button className="btn-primary btn-juego-dos-encender ">
                            <p>Contactar a Servicio Tecnico</p>
                        </button>
                    </div>
                    <div className="col-4">
                        <button className="btn-primary btn-juego-dos-encender">
                            <p>Reiniciar el Telefono</p>
                        </button>
                    </div>
                    <div className="col-4">
                        <button className="btn-primary btn-juego-dos-encender">
                            <p>Esperar hasta que se termine de inicializar</p>
                        </button>
                    </div>

                </div>
            </div>

        </>
    );
};