import React from "react";


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
									<a className="nav-link" href="/"><img className="img-fluid" title="PERFIL" src="../../img/iconoAvatar.png" width="100px" />
									</a>
								</div>
								<div class="col-sm px-5 ">
									<a className="nav-link" href="/"><img className="img-fluid"  title="INICIO" src="../../img/iconoHome.png" width="100px" /></a>
								</div>
								<div class="col-sm px-5">
									<a className="nav-link" href="/"> <img className="img-fluid" title="TAREAS" src="../../img/iconodetareas.png" width="100px" /> </a>
								</div>
								<div class="col-sm px-5">
									<a className="nav-link" href="/"> <img className="img-fluid" title="RANKING" src="../../img/iconoTrofeo.png" width="100px" /></a>
								</div>
								<div class="col-sm px-5">
									<a className="nav-link" href="/"> <img className="img-fluid" title="CONFIGURACION "src="../../img/iconoEngranaje.png" width="100px" /></a>
								</div>
							</div>
						</div>
					</nav>
				</div>
			</div>
		</>
	);
};

