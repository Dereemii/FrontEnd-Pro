import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./js/views/home.jsx";
import { Demo } from "./js/views/demo.jsx";
import { Single } from "./js/views/single.jsx";
import injectContext from "./js/store/appContext";
import { Navbar } from "./js/component/navbar.jsx";
import { Footer } from "./js/component/footer.jsx";
import { Login } from "./js/views/login.jsx";
import { Welcome } from "./js/views/welcome.jsx";
import { Curso } from "./js/views/curso.jsx";
import { Curso1 } from "./js/views/curso1.jsx";

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
