import React from "react";
import iconodetareas from "../component/img/iconodetareas.png"
import iconoTrofeo from "../component/img/iconoTrofeo.png"
import iconoEngranaje from "../component/img/iconoEngranaje.png"
import iconoHome from "../component/img/iconoHome.png"


export const Navbar = () => {

	return (
		<>
			<div className="container-fluid">
				<div>
					<nav className="navbar navbar-expand-lg navbar-light bg-info border border-light">
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarNav">
							<div class="row navbar-nav mx-auto">
								<div class="col-sm px-5 ">
									<a className="nav-link" href="/"><img className="img-fluid" src="../../img/iconoAvatar.png" width="100px" />
									</a>
								</div>
								<div class="col-sm px-5 ">
									<a className="nav-link" href="/"><img className="img-fluid" data-toggle="tooltip" data-placement="top" title="INICIO" src={iconoHome} width="100px" /></a>
								</div>
								<div class="col-sm px-5">
									<a className="nav-link" href="/"> <img className="img-fluid" src={iconodetareas} width="100px" /> </a>
								</div>
								<div class="col-sm px-5">
									<a className="nav-link" href="/"> <img className="img-fluid" src={iconoTrofeo} width="100px" /></a>
								</div>
								<div class="col-sm px-5">
									<a className="nav-link" href="/"> <img className="img-fluid" src={iconoEngranaje} width="100px" /></a>
								</div>
							</div>
						</div>
					</nav>
				</div>
			</div>
		</>
	);
};

