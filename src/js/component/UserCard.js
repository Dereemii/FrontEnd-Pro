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

	return (<div className="card-deck">
	
	{store.usuarios.map((usuario, index) => (

		<div className="card h-100" key={usuario.id}>
			{<img className="rounded-circle mx-auto d-block img-fluid" src={Avatarphoto} alt="Card image cap"/>}
			<div className="card-body">
			<label className="name lead">nombre: {usuario.nombre_usuario} </label>
			<br />
			<label className="name lead">telefono:  {usuario.telefono} </label>
			<br />
			<label className="name lead">correo:  {usuario.correo} </label>
			</div>
		</div>))}
		</div>)}