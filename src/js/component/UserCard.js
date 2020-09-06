import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import Avatarphoto from "../../img/avatar.JPG"

import { Link } from "react-router-dom";

export const UserCard = props => {
	/* const [state, setState] = useState({
		//initialize state here
	}); */

	const { store, actions } = useContext(Context);

	return (
	
			<div className="row-justify-content-center">
				{store.usuarios.map((usuario, index) => (
					<div className="col-md-auto">
						<div className="tarjeta-contactos m-4 border-0" key={usuario.id}>
							<div className="tarjeta-contenido text-center border-0" >
								{<img className="rounded-circle " src={Avatarphoto} alt="img-fluid" key={usuario.index}/>}
								<div className="tarjeta-contenido text-center border-0">
								<h5 >nombre: {usuario.nombre_usuario} </h5>
								<br />
								<h5 >telefono:  {usuario.telefono} </h5>
								<br />
								<h5 >correo:  {usuario.correo} </h5>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
	)}