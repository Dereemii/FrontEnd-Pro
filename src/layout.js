import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./js/views/home";
import { Demo } from "./js/views/demo";
import { Single } from "./js/views/single";
import injectContext from "./js/store/appContext";
import { Navbar } from "./js/component/navbar";
import { Footer } from "./js/component/footer";
import { Login } from "./js/views/login";
import { Welcome } from "./js/views/welcome";
import { Curso } from "./js/views/curso";
import { Curso1 } from "./js/views/curso1";

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
						<Route exact path="/" component={Home} />
						<Route path="/demo" component={Demo} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/welcome" component={Welcome} />
						<Route exact path="/curso" component={Curso} />
						<Route exact path="/curso/1" component={Curso1}/>
						<Route render={() => <h1>No encontrado!</h1>} />
					</Switch>
					<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
