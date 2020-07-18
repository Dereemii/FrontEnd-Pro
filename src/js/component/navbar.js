import React from "react";
import iconodetareas from "../component/img/iconodetareas.png"
import iconoTrofeo from "../component/img/iconoTrofeo.png"
import iconoEngranaje from "../component/img/iconoEngranaje.png"
import iconoAvatar from "../component/img/iconoAvatar.png"
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
							<ul className="navbar-nav text-center">
								<li className="col-2"></li>
								<li className="col-2 mx-3">
									<a className="nav-link" href="/"><img src={iconoAvatar} width="80px"/> </a>
								</li>
								<li className="col-2 mx-3">
									<a className="nav-link" href="/"><img src={iconoHome} width="80px"/></a>
								</li>
								<li className="col-2 mx-3">
									<a className="nav-link" href="/"> <img src={iconodetareas} width="80px"/> </a>
								</li>
								<li className="col-2 mx-3">
									<a className="nav-link" href="/"> <img src={iconoTrofeo} width="80px"/></a>
								</li>
								<li className="col-2 mx-3">
									<a className="nav-link" href="/"> <img src={iconoEngranaje} width="80px"/></a>
								</li>
								<li className=""></li>
							</ul>
						</div>
					</nav>
				</div>
			</div>
		</>
	);
};

