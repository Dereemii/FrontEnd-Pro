import React from "react";
import iconodetareas from "../component/img/iconodetareas.png"
import iconoTrofeo from "../component/img/iconoTrofeo.png"
import iconoEngranaje from "../component/img/iconoEngranaje.png"

export const Navbar = () => {

	return (
		<>
			<div className="container-fluid">
				<div>
					<nav className="navbar navbar-expand-lg navbar-light bg-light">
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarNav">
							<ul className="navbar-nav">
								<li className="nav-item active">
									<a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="/">Features</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="/"> <img src={iconodetareas} width="30px"/> </a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="/"> <img src={iconoTrofeo} width="30px"/></a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="/"> <img src={iconoEngranaje} width="30px"/></a>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</div>
		</>
	);
};

