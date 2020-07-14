import React from "react";
import NavbarAjustes from "../../component/AjustesHome/NavbarAjustes";

const ViewAjustesCerrarSesion = () => {
    return (
        <>
            <NavbarAjustes />
            <h1 className="tituloDelCerrarSesion">¿Seguro Quieres Cerrar Sesion?</h1>
            <div className="bloque">
                <button className="btnDelCerrarSesion" >
                    si
                </button>
                <button className="btnDelCerrarSesion" >
                    no
                </button>
            </div>
        </>
    );
};
export default ViewAjustesCerrarSesion;