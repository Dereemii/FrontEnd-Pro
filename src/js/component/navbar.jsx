import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './navbar.css';


export const Navbar = () => {
	const menuIcon = <FontAwesomeIcon icon={faBars} />
	return (
		<>
			<div className="container-fluid p-0 m-0">
				<div>
					<nav className="navbar navbar-expand-lg navbar-light bg-info border border-light">
						<button class="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
							aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
							<span class="nav-icon ml-auto" title="MENU" >{menuIcon}</span>
						</button>
						<div className="collapse navbar-collapse" id="navbarNav">
							<div className="row navbar-nav mx-auto">
								<div className="col-sm px-5 ">
									<a className="nav-link" href="/"><img className="img-fluid" src="../../img/iconoAvatar.png" width="100px" />
									</a>
								</div>
								<div className="col-sm px-5 ">
									<a className="nav-link" href="/"><img className="img-fluid"  title="Inicio" src="../../img/iconoHome.png" width="100px" /></a>
								</div>
								<div className="col-sm px-5">
									<a className="nav-link" href="/"> <img className="img-fluid" title="Tareas" src="../../img/iconodetareas.png" width="100px" /> </a>
								</div>
								<div className="col-sm px-5">
									<a className="nav-link" href="/"> <img className="img-fluid" title="Ranking" src="../../img/iconoTrofeo.png" width="100px" /></a>
								</div>
								<div className="col-sm px-5">
									<a className="nav-link" href="/"> <img className="img-fluid" title="Configuracion" src="../../img/iconoEngranaje.png" width="100px" /></a>
								</div>
							</div>
						</div>
					</nav>
				</div>
			</div>
		</>
	);
};