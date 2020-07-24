import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./js/views/home";
import { Demo } from "./js/views/demo";
import { Single } from "./js/views/single";
import injectContext from "./js/store/appContext";
import { Navbar } from "./js/component/navbar.jsx";
import { Footer } from "./js/component/footer";
import Formulario from "./js/component/Formularios/registro";
import { ViewAjustesInfoPersonal } from "./js/views/ajustesHome/InfoPersonal";
import ViewAjustesSeguridad from "./js/views/ajustesHome/Seguridad";
import ViewAjustesCerrarSesion from "./js/views/ajustesHome/CerrarSesion";
import ViewAjustesVisuales from "./js/views/ajustesHome/AjustesVisuales";
import { Login } from "./js/views/login";
import { Welcome } from "./js/views/welcome";
import { Curso } from "./js/views/curso";
import { Curso1 } from "./js/views/curso1";
import { Ruleta } from "./js/views/juegos/ruleta.jsx"

//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
					<Navbar />
					<Switch>
						<Route exact path="/viewajustesinfopersonal" component={ViewAjustesInfoPersonal}/>
						<Route exact path="/viewajustesvisuales" component={ViewAjustesVisuales}/>
						<Route exact path="/viewajustescerrarsesion" component={ViewAjustesCerrarSesion}/>
						<Route exact path="/viewajustesseguridad" component={ViewAjustesSeguridad}/>
						<Route exact path="/registro" component={Formulario}/>
						<Route exact path="/" component={Home}/>
						<Route path="/demo" component={Demo} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/welcome" component={Welcome} />
						<Route exact path="/curso" component={Curso} />
						<Route exact path="/curso/1" component={Curso1}/>
						<Route exact path="/ruleta" component={Ruleta}/>
						<Route render={() => <h1>No encontrado!</h1>} />
					</Switch>
					<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);

