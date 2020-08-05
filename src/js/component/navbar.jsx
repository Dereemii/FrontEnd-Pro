import React from "react";
import iconodetareas from "../component/img/iconodetareas.png"
import iconoTrofeo from "../component/img/iconoTrofeo.png"
import iconoEngranaje from "../component/img/iconoEngranaje.png"
import iconoAvatar from "../component/img/iconoAvatar.png"
import iconoHome from "../component/img/iconoHome.png"
import { Link } from "react-router-dom";


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
									<a className="nav-link" href="/"><img className="img-fluid" src={iconoAvatar} width="100px" /> </a>
								</div>
								<div class="col-sm px-5 ">
									<a className="nav-link" href="/"><Link to={"/curso"}><img className="img-fluid" src={iconoHome} width="100px" /></Link></a>
								</div>
								<div class="col-sm px-5">
									<a className="nav-link" href="/"> <img  className="img-fluid" src={iconodetareas} width="100px" /> </a>
								</div>
								<div class="col-sm px-5">
									<a className="nav-link" href="/"> <img className="img-fluid" src={iconoTrofeo} width="100px" /></a>
								</div>
								<div class="col-sm px-5">
								<div class="btn-group">
										<button type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
											<a className="nav-link" href="/"> <img className="img-fluid" src={iconoEngranaje} width="100px" /></a>
            							</button>
										<div class="dropdown-menu dropdown-menu-right">
											<Link to="..//viewajustesinfopersonal">
												<button class="dropdown-item" type="button">Ajustes</button>
											</Link>
											<button class="dropdown-item" type="button">Cerrar Sesion</button>
										</div>
									</div>
								</div>
							</div>

						</div>
					</nav>
				</div>
			</div>
		</>
	);
};

