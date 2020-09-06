import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UserCard} from "../component/UserCard"
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";
import { Context } from "../store/appContext";
/* import { Modal } from "../component/Modal"; */
import Avatarphoto from "../../img/avatar.JPG"

export const Usuarios = () => {
	const [state, setState] = useState({
		showModal: false
	});

	const { store } = useContext(Context);

	return (
		<>
		<Navbar/>
		<div className="container">
			<div className="row justify-content-center">
				{store.usuarios.map((usuario, index) => (
						<div className="tarjeta-contactos m-4 border-0" key={usuario.id*22}>
							<div className="tarjeta-contenido text-center border-0" >
								<div className="tarjeta-cuerpo my-3">
									{<img className="tarjeta-img-top rounded-circle mb-3" src={Avatarphoto} alt="Card image cap" key={usuario.index}/>}
									<div className="row">
										<div className="col">
											<div className="row justify-content-center">
												<div className="col-4 text-right"><h5>Nombre:</h5></div>
												<div className="col-8 text-left"><h5 >{usuario.nombre_usuario} </h5></div>
											</div>
											<div className="row justify-content-center">
												<div className="col-4 text-right"><h5 >Telefono:</h5></div>
												<div className="col-8 text-left"><h5 >{usuario.telefono} </h5></div>
											</div>
											<div className="row justify-content-center">
												<div className="col-4 text-right"><h5 >Correo:</h5></div>
												<div className="col-8 text-left"><h5 >{usuario.correo} </h5></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
				))}
			</div>
		</div>
		<Footer/>
		</>
	);
};
