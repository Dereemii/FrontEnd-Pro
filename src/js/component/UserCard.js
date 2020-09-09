import React, {  useContext } from "react";
import { Context } from "../store/appContext";
import Avatarphoto from "../../img/avatar.JPG"


export const UserCard = props => {


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