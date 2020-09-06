import React, { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link, withRouter, useHistory } from "react-router-dom";
import { useEffect } from "react";
import { Context } from "../store/appContext";


export const Navbar = () => {

	const { actions, store } = useContext(Context);
	const history = useHistory();
	const IconoMenu = <FontAwesomeIcon icon={faBars} />
	const { currentUser } = store;
	const avatar = !!currentUser && currentUser !== "invitado" ? actions.obtenerAvatar(currentUser.usuario.avatar) : "../../img/avatar.JPG";
	const name = !!currentUser ? currentUser.usuario.nombre_usuario : "Invitado";


	return (
		<>
			<div className="container-fluid p-0 m-0">
				<div>
					<nav className="navbar navbar-expand-sm navbar-light justify-content-center">
						<div className="row justify-content-center">
								<Link className="navbar-brand text-light" to="/seleccion_curso">TataExpert</Link>
								<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
									<span className="iconoNav">{IconoMenu}</span>
								</button>
								<div className="collapse navbar-collapse" id="navbarNav">
									<ul className="navbar-nav ml-5 text-center">
										<li className="nav-item">
											<Link className="nav-link text-light " to="/seleccion_curso">Cursos <span className="sr-only">(current)</span></Link>
										</li>
										<li className="nav-item">
											<Link className="nav-link text-light " to="/seleccion_curso">Puntos <span className="sr-only">(current)</span></Link>
										</li>
										<li className="nav-item">
											<Link className="nav-link text-light text-center" to="/seleccion_curso">Ajustes</Link>
										</li>
										<li className="nav-item text-center">
											<Link className="nav-link text-light" to="/administrador">Adminisitrador</Link>
										</li>
										<li className="nav-item">
											<Link className="nav-link text-light" to={"/editar_usuario"}>{name}</Link>
										</li>
										<li className="nav-item dropdown">
											<img 
											src={avatar} 
											className="rounded-circle nav-link dropdown-toggle" 
											alt="img-fluid" 
											width="10"
											id="navbarDropdown"
											role="button" 
											data-toggle="dropdown" 
											aria-haspopup="true" 
											aria-expanded="false"
											/>
											<div className="dropdown-menu" aria-labelledby="navbarDropdown">
											{store.currentUser !== null ?
											(
											<Link className="dropdown-item" to={"/editar_usuario"}>Tu perfil</Link>
											) : ""}
												
												{store.currentUser !== null ?
												(
													<a className="dropdown-item" href="/#" onClick={(e) => {
														e.preventDefault();
														actions.cerrarSesion(history);
													}}>Cerrar Sesion</a>
												) : (
													<Link className="dropdown-item" type="button" to="/">Inicio</Link>
												)}
											</div>
										</li>
									</ul>
							</div>
						</div>
					</nav>
					{/* <nav className="navbar navbar-expand-lg navbar-light bg-info">
						<button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
							aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
							<span className="icono-nav ml-auto" title="MENU" >{IconoMenu}</span>
						</button>
						<div className="collapse navbar-collapse" id="navbarNav">
							<div className="row navbar-nav mx-auto">
								<div className="col-sm px-5 ">
									<Link to="/vistajustesinfopersonal" className="nav-link" href="/">
										<img className="icon-img" title="Mi perfil" data-toggle="tooltip" data-placement="bottom" src={avatar} />
									</Link>
								</div>
								<div className="col-sm px-5 ">
									<Link to="/seleccion_curso" className="nav-link" href="/">
										<img className="icon-img" title="Inicio" data-toggle="tooltip" data-placement="bottom" src="../../img/iconoHome.png" />
									</Link>
								</div>
								<div className="col-sm px-5">
									<a className="nav-link" href="/"> <img className="icon-img" title="Tareas" data-toggle="tooltip" data-placement="bottom" src="../../img/iconodetareas.png" /> </a>
								</div>
								<div className="col-sm px-5">
									<a className="nav-link" href="/"> <img className="icon-img" title="Ranking" data-toggle="tooltip" data-placement="bottom" src="../../img/iconoTrofeo.png" /></a>
								</div>
								<div className="col-sm px-5">
									<div className="btn-group">
										<button type="button" className="btn btn-link " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
											<a className="nav-link" href="/"> <img className="icon-img" title="Configuracion" data-toggle="tooltip" data-placement="bottom" src="../../img/iconoEngranaje.png" /></a>
										</button>
										<div className="dropdown-menu dropdown-menu-right">
											<Link to="/vistajustesvisuales" className="dropdown-item" type="button">Ajustes</Link>
											{store.currentUser !== null ?
												(
													<a className="dropdown-item" href="/#" onClick={(e) => {
														e.preventDefault();
														actions.cerrarSesion(history);
													}}>Cerrar Sesion</a>
												) : (
													<Link className="dropdown-item" type="button" to="/welcome">Login</Link>
												)}
										</div>
									</div>
								</div>
							</div>
						</div>
					</nav> */}
				</div>
			</div>
		</>
	);
};
export default withRouter(Navbar);