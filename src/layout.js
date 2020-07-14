import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./js/views/home";
import { Demo } from "./js/views/demo";
import { Single } from "./js/views/single";
import injectContext from "./js/store/appContext";

import { Navbar } from "./js/component/navbar";
import { Footer } from "./js/component/footer";
import Formulario from "./js/component/Formularios/registro";
import { ViewAjustesInfoPersonal } from "./js/views/ajustesHome/InfoPersonal";
import ViewAjustesSeguridad from "./js/views/ajustesHome/Seguridad";
import ViewAjustesCerrarSesion from "./js/views/ajustesHome/CerrarSesion";
import ViewAjustesVisuales from "./js/views/ajustesHome/AjustesVisuales";

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
						<Route path="/single/:theid" component={Single} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
