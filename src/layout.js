import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./js/views/home";
import { Demo } from "./js/views/demo";
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
import { Usuarios } from "./js/views/usuarios"
import { Seleccion_curso } from "./js/views/seleccion_curso";
import { Curso } from "./js/views/curso";
import { Vista_Tutorial_Encender_Celular_Pregunta_Cuatro, Vista_Tutorial_Encender_Celular_Pregunta_Uno, Vista_Tutorial_Encender_Celular_Pregunta_Dos, Vista_Tutorial_Encender_Celular_Pregunta_Tres } from "./js/views/juegos/Encender_Celular";
import { Ruleta } from "./js/views/juegos/ruleta.jsx";
import { Quiz } from "./js/views/juegos/quiz";
import { CrearCurso } from "./js/component/Formularios/crearCurso";
import { Editar_Usuario } from "./js/component/usuario/editar_usuario";
import { RegistrarCurso} from "./js/component/Formularios/registrar-curso"
import { Admin_curso } from "./js/views/admin_cursos";


//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				
					<Switch>
						<Route exact path="/viewajustesinfopersonal" component={ViewAjustesInfoPersonal}/>
						<Route exact path="/viewajustesvisuales" component={ViewAjustesVisuales}/>
						<Route exact path="/viewajustescerrarsesion" component={ViewAjustesCerrarSesion}/>
						<Route exact path="/viewajustesseguridad" component={ViewAjustesSeguridad}/>
						<Route exact path="/registro" component={Formulario}/>
						<Route exact path="/Vista_Tutorial_Encender_Celular_Pregunta_1" component={Vista_Tutorial_Encender_Celular_Pregunta_Uno}/>
						<Route exact path="/Vista_Tutorial_Encender_Celular_Pregunta_2" component={Vista_Tutorial_Encender_Celular_Pregunta_Dos}/>
						<Route exact path="/Vista_Tutorial_Encender_Celular_Pregunta_3" component={Vista_Tutorial_Encender_Celular_Pregunta_Tres}/>
						<Route exact path="/Vista_Tutorial_Encender_Celular_Pregunta_4" component={Vista_Tutorial_Encender_Celular_Pregunta_Cuatro}/>
						<Route exact path="/" component={Home}/>
						<Route exact path="/login" component={Login} />
						<Route exact path="/editar_usuario/:correo" component={Editar_Usuario}/>
						<Route exact path="/welcome" component={Welcome} />
						<Route exact path="/usuarios" component={Usuarios} />
						<Route exact path="/crear_curso" component={CrearCurso}/>
						<Route exact path="/registrar_curso" component={RegistrarCurso}/>
						<Route exact path="/seleccion_curso/:usuario" component={Seleccion_curso} />
						<Route exact path="/admin_curso" component={Admin_curso}/>
						<Route exact path="/curso/:nombre_usuario/:id" component={Curso}/>
						<Route exact path="/ruleta" component={Ruleta}/>
						<Route exact path="/quiz" component={Quiz}/>
						<Route render={() => <h1>No encontrado!</h1>} />
					</Switch>
			
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);

