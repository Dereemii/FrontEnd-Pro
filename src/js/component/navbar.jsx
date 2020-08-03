import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'
import './navbar.css';


export const Navbar = () => {

	const menuIcon = <FontAwesomeIcon icon={faChevronCircleDown} />

	return (
		<>
			<div className="container-fluid">
				<div>
					<nav className="navbar navbar-expand-lg navbar-light bg-info border border-light">
						<button class="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
							aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
							<span class="nav-icon" title="MENU" >{menuIcon}</span>
						</button>
						<div className="collapse navbar-collapse" id="navbarNav">
							<div class="row navbar-nav mx-auto">
								<div class="col-sm px-5 ">
									<a className="nav-link" href="/"><img className="img-fluid" title="PERFIL" src="../../img/iconoAvatar.png" width="100px" />
									</a>
								</div>
								<div class="col-sm px-5 ">
									<a className="nav-link" href="/"><img className="img-fluid" title="INICIO" src="../../img/iconoHome.png" width="100px" /></a>
								</div>
								<div class="col-sm px-5">
									<a className="nav-link" href="/"> <img className="img-fluid" title="TAREAS" src="../../img/iconodetareas.png" width="100px" /> </a>
								</div>
								<div class="col-sm px-5">
									<a className="nav-link" href="/"> <img className="img-fluid" title="RANKING" src="../../img/iconoTrofeo.png" width="100px" /></a>
								</div>
								<div class="col-sm px-5">
									<a className="nav-link" href="/"> <img className="img-fluid" title="CONFIGURACION " src="../../img/iconoEngranaje.png" width="100px" /></a>
								</div>
							</div>
						</div>
					</nav>
				</div>
			</div>
		</>
	);
};

