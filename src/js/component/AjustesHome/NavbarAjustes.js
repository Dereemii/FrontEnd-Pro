import React from "react";
import { Link } from "react-router-dom";

export const NavbarAjustes = () => {

    return(
        <>
        <nav className="navbarAjustes  row">
                <Link className= "btn-de-navajustesOne col-3" to="./viewajustesinfopersonal" >
                    Informacion Personal
                </Link>
                <Link className= "btn-de-navajustes col-3" to="./viewajustesvisuales">
                    Ajustes Visuales
                </Link>
                <Link className= "btn-de-navajustes col-3" to="./viewajustesseguridad" >
                    Seguridad
                </Link>
                <Link className= "btn-de-navajustes col-3" to="viewajustescerrarsesion" >
                    Cerrar Sesion
                </Link>
		</nav>
        </>
        );

};
export default NavbarAjustes;
