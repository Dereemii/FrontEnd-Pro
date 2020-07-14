import React from "react";

export const AjustesVisuales = () => {

    return (
        <>
            <div className="row Table">
                <div className="col-sm-4 divisionesDeAjustesVisuales TamañoLetra">
                    <h1 className="Titulo">Tamaño De Letra</h1>
                    <div className="itemVisual">
                        <button className="btnDeAjustesVisuales botonDeVisuales"> - </button>
                        <input type="number" />
                        <button className="btnDeAjustesVisuales botonDeVisuales"> + </button>
                    </div>
                </div>
                <div className="col-sm-4 divisionesDeAjustesVisuales FotoPerfil">
                    <h1 className="Titulo">Foto De Perfil</h1>
                    <img
                        className="Foto"
                        src="https://i.ibb.co/TMCPvBV/imagen-De-Usuario.png"
                        alt="imagen-De-Usuario"
                        border="0"
                    />
                    <input type="file" />
                </div>
                <div className="col-sm-4 divisionesDeAjustesVisuales ColorTema">
                    <h1 className="Titulo">Modo De Pantalla</h1>
                    <div className="itemVisualTres">
                        <button className="btnDeAjustesVisualesClaro botonDeVisuales">Claro</button>
                        <button className="btnDeAjustesVisualesOscuro botonDeVisuales">Oscuro</button>
                    </div>
                </div>
            </div>
        </>
    );

};
export default AjustesVisuales;