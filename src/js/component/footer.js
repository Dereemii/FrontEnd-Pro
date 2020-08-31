import React, { useState, useEffect, useContext} from "react"
import { Link, withRouter, useHistory} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { Context } from "../store/appContext";

export const Footer = () => {

	const { actions, store } = useContext(Context)
	const IconoLuna = <FontAwesomeIcon icon={faMoon} />
	const IconoSol = <FontAwesomeIcon icon={faSun} />
	const history = useHistory();

	/* useEffect(() => {
		
        if(!store.estaAutenticado) history.push("/");

    }, []); */


	return (
			<footer className="pt-5 fixed-bottom text-center ">
				<div className="bordeIconos my-3 d-inline">
					<span  id="luna" onClick={actions.oscuro}className="iconoFooter px-4 active ">{IconoLuna}</span>
					<span id="sol" onClick={actions.claro} className="iconoFooter px-4 active">{IconoSol}</span>
				</div>
				<div className="administrador row">
					<p className="col-md-10"></p>
					<p className="col-md-2 pt-2">
						<img className="iconosContacto mx-2" src="../../img/instagram.png" title="Siguenos" data-toggle="tooltip" data-placement="top" alt="instagram" />
						<img className="iconosContacto mx-2" src="../../img/correo.png" title="Contactanos" data-toggle="tooltip" data-placement="top" alt="correo" />
						{/* {!!store.currentUser && store.currentUser !== "invitado" && store.currentUser.usuario.rol[0].rol === "administrador" ? (
							<img className="iconosContacto mx-2" src="../../img/admin.png" title="Administrador" data-toggle="tooltip" data-placement="top" alt="correo" />
						):
						null} */}
					</p>
				</div>

			</footer>
	);
};

export default withRouter(Footer);