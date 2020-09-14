import { get, data } from "jquery";
import { act } from "react-dom/test-utils";

const getState = ({ getStore, getActions, setStore }) => {

	return {
		store: {
			apiUrl: "http://localhost:5000",
			usuarios: [],
			nombre_usuario: null,
			rolSeleccionado: null, 
			correo: null,
			clave: null,
			telefono: null,
			currentUser: null,
			isAuth: null,
			estaAut: null,
			error: null,
			msg: null,
			msg_leccion: null,
			msg_pregunta: null,
			msg_respuestas: null,
			lecciones: [],
			preguntas: [],
			respuestas: [],
			avatares: [],
			seleccion: null,
			nombre_leccion: null,
			enunciado: null,
			id_nueva_leccion: null,
			id_nueva_pregunta: null,
			respuesta_a: null,
			respuesta_b: null,
			respuesta_c: null,
			opcion_a: null,
			opcion_b: null,
			opcion_c: null,
			imagen_leccion: null,
			theme: null,
			avatar: null,
			imagen_pregunta: null,
			imagen_teoria: null,
			teoria: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			handleTheme: () => {
				document.body.classList.toggle("dark");
				setStore({ theme: "dark" })
				//localStorage.setItem('darkTheme', 'true');
				if(document.body.classList.contains("dark")){
					localStorage.setItem("darkTheme", "true");
				} else {
					localStorage.setItem("darkTheme", "false")
				}
			},
			obtenerAvatar: (filename) => {
				const store = getStore();
				console.log("ObtenerAvatar, filename :" + filename)
				return `${store.apiUrl}/fotoperfil/${filename}`
			},			
			handleChange: e => {
				const { name, value } = e.target;
				setStore({
					[name]: value
				})
			},
			handleBoolean: e => {

				const { name, value } = e.target
				value === "verdadero" ?
					setStore({
						[name]: true
					})
					: value === "falso" ?
						setStore({
							[name]: false
						}) :
						setStore({
							[name]: value
						})
			},
			getUsers: async url => {
				const store = getStore();
				const response = await fetch(store.apiUrl + "/usuarios");
				const datos = await response.json();
				setStore({
					usuarios: datos
				})
			},
			obtener_datos: () => {
				const store = getStore();
				setStore({
					nombre_usuario: store.usuarios[0].nombre_usuario,
					correo: store.usuarios[0].correo,
					telefono: store.usuarios[0].telefono,
				})
			},
			handleRegister: async (e, history) => {
				e.preventDefault();
				let regexCorreo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

				const store = getStore();
				const options = {
					method: 'POST',
					body: JSON.stringify({
						"nombre_usuario": store.nombre_usuario,
						"correo": store.correo,
						"clave": store.clave,
						"telefono": store.telefono
					}),
					headers: {
						'Content-Type': 'application/json'
					}
				}
				const resp = await fetch(store.apiUrl + "/registro", options);
				const datos = await resp.json();
				console.log(datos)

				if (datos.success) {
					setStore({
						currentUser: datos.datos,
						nombre_usuario: null,
						correo: null,
						clave: null,
						telefono: null,
						error: null,
						msg: datos.success
					})

				} else {
					setStore({
						error: datos.msg
					})

				}
			},
			actualizarUsuarios: async id => {
				const store = getStore();
				const options = {
					method: 'PUT',
					body: JSON.stringify({
						"nombre_usuario": store.nombre_usuario,
						"correo": store.correo,
						"telefono": store.telefono
					}),
					headers: {
						'Content-Type': 'application/json'
					}
				}
				const resp = await fetch(store.apiUrl + "/usuario", id);
				const datos = await resp.json();
				console.log(datos)

			},
			handleLogin: async (e, history, correo) => {
				e.preventDefault();

				const actions = getActions();
				const store = getStore();
				const options = {
					method: 'POST',
					body: JSON.stringify({
						"correo": store.correo,
						"clave": store.clave
					}),
					headers: {
						'Content-Type': 'application/json'
					}
				}
				const resp = await fetch(store.apiUrl + "/login", options);
				const datos = await resp.json();
				console.log(datos)

				if (datos.success) {
					setStore({
						currentUser: datos.datos,
						clave: null,
						error: null,
						estaAut: true,

					})
					/* actions.obtenerAvatar() */
					localStorage.setItem("currentUser", JSON.stringify(datos.datos))
					localStorage.setItem("estaAut", true)
					history.push("/seleccion_curso")
				} else {
					setStore({
						error: datos.msg
					})

				}

				actions.handleLocal();
			},
			estaAutenticado: () => {
				if(localStorage.getItem("estaAut")){
					setStore({
						currentUser: JSON.parse(localStorage.getItem("currentUser")),
						estaAut: JSON.parse(localStorage.getItem("estaAut"))
					})
				}
			},
			/* autenticacion: () => {
				const store = getStore(); setStore({
					currentUser: JSON.parse(localStorage.getItem("currentUser")),
					estaAutenticado: JSON.parse(localStorage.getItem("estaAutenticado"))
				}); console.log(store.currentUser, store.estaAutenticado);
			}, */

			getSeleccion: (seleccion) => {
				console.log(seleccion);
				setStore({
					seleccion: seleccion
				})

			},
			cambiarTema: (tema) => {
				setStore({ tema: tema })
			},
			adminForm: (valor) => {
				setStore({ rolSeleccionado: valor });
			},
			seleccionarRol: (rol) => {
				setStore({ rolSeleccionado: rol });
			},
			getTodo: async () => {
				const actions = getActions();
				actions.getLecciones();
				actions.getPreguntas();
				actions.getRespuestas();

			},
			getLecciones: async () => {
				const store = getStore();
				const response = await fetch(store.apiUrl + "/leccion");
				const datos = await response.json();
				console.log("getLecciones");
				setStore({
					lecciones: datos
				})
			},
			getPreguntas: async () => {
				const store = getStore();
				const response = await fetch(store.apiUrl + "/preguntas");
				const datos = await response.json();
				console.log("getPreguntas");
				setStore({
					preguntas: datos
				})
			},
			getRespuestas: async () => {
				const store = getStore();
				const response = await fetch(store.apiUrl + "/respuestas");
				const datos = await response.json();
				console.log("getRespuestas");
				setStore({
					respuestas: datos
				})
			},
			handleLocal: () => {
				const store = getStore();
				localStorage.setItem("correo", JSON.stringify(store.correo));
				localStorage.setItem("nombre_usuario", JSON.stringify(store.nombre_usuario))

			},
			getSeleccion: (seleccion) => {
				console.log(seleccion);
				setStore({
					seleccion: seleccion
				})

			},
			handle_registrar_nombre_leccion: async (e) => {
				e.preventDefault();
				const actions = getActions();
				const store = getStore();
				const options = {
					method: 'POST',
					body: JSON.stringify({
						"nombre": store.nombre_leccion,
						"puntuacion": "0"
					}),
					headers: {
						'Content-Type': 'application/json'
					}
				}
				const resp = await fetch(store.apiUrl + "/leccion", options);
				const datos = await resp.json();
				console.log(datos)

				if (datos.success && store.lecciones !== []) {
					actions.getLecciones();
					setStore({
						nombre_leccion: null,
						id_nueva_leccion: store.lecciones[store.lecciones.length - 1].id + 1,
						msg_leccion: datos.success
					})
				} else {
					setStore({
						error: datos.msg,
					})

				};

			},
			handle_files: async e => {
				const { name, files } = e.target;
				setStore({
					[name]: files[0]
				})
			},
			get_imagen_leccion: (nombre_archivo) => {
				const store = getStore();
				return + `${store.apiUrl}/leccion-imagenes/${nombre_archivo}`
			},
			handle_imagenes_leccion: id => {
				id.preventDefault();
				const store = getStore();

				let formData = new formData();
				formData.append("imagen_leccion", store.imagen_leccion);

				fetch(`${store.apiUrl}/leccion-imagenes/${id}`, {
					method: 'POST',
					body: formData
				})
					.then(resp => resp.json())
					.then(data => {
						console.log(data);
						setStore({
							msg: data.success,
							imagen_leccion: null
						})
					})
			},

			handle_registrar_pregunta: async (e) => {
				e.preventDefault();
				const actions = getActions();
				const store = getStore();
				const options = {
					method: 'POST',
					body: JSON.stringify({
						"enunciado": store.enunciado,
						"leccion_id": store.id_nueva_leccion
					}),
					headers: {
						'Content-Type': 'application/json'
					}
				}
				const resp = await fetch(store.apiUrl + "/preguntas", options);
				const datos = await resp.json();
				console.log(datos)

				if (datos.success) {
					actions.getLecciones();
					actions.getPreguntas();
					actions.getRespuestas();
					setStore({
						enunciado: null,
						id_nueva_pregunta: store.preguntas[store.preguntas.length - 1].id + 1,
						msg_pregunta: datos.success
					})
				} else {
					setStore({
						error: datos.msg
					})

				};

			},
			handle_registrar_respuestas: async (e) => {
				e.preventDefault();

				const actions = getActions();
				const store = getStore();
				const options = {
					method: 'POST',
					body: JSON.stringify({
						"respuesta_a": store.respuesta_a,
						"respuesta_b": store.respuesta_b,
						"respuesta_c": store.respuesta_c,
						"opcion_a": store.opcion_a,
						"opcion_b": store.opcion_b,
						"opcion_c": store.opcion_c,
						"pregunta_id": store.id_nueva_pregunta

					}),
					headers: {
						'Content-Type': 'application/json'
					}
				}
				const resp = await fetch(store.apiUrl + "/respuestas", options);
				const datos = await resp.json();
				console.log(datos)
				console.log("datos.success: " + datos.success)

				if (datos.success) {
					actions.getLecciones();
					actions.getPreguntas();
					actions.getRespuestas();
					setStore({
						respuesta_a: null,
						respuesta_b: null,
						respuesta_c: null,
						opcion_a: null,
						opcion_b: null,
						opcion_c: null,
						pregunta_id: null,
						msg_respuestas: datos.success
					})
				} else {
					actions.getLecciones();
					actions.getPreguntas();
					actions.getRespuestas();
					setStore({
						error: datos,
					})

				};

			},
			handle_regresar: (history) => {
				const store = getStore();

				return history.push("/")

			},
			cerrarSesion: (history) => {
				localStorage.removeItem("estaAut");
				localStorage.removeItem("currentUser");
				setStore({
					error: null,
					estaAut: false,
					currentUser: null,
					correo: null
				});
				history.push("/");

			},
			agregarComoInvitado: () => {
				const store = getStore();
				setStore({
					currentUser: "invitado",
					estaAutenticado: true
				});
				localStorage.setItem("currentUser", JSON.stringify(store.currentUser))
				localStorage.setItem("estaAut", store.estaAutenticado)
			},
			cambiarAvatar: e => {
				const {name, files} = e.target;
				setStore({
					[name]: files[0]
				});
			},
			actualizarAvatar: async(e, history) => {
				e.preventDefault();

				const store = getStore();
				let formData = new FormData();
				formData.append("avatar", store.avatar);

				fetch(`${store.apiUrl}/fotoperfil`,{
					method: "POST",
					body: formData,
					headers: {
						"Authorization":`Bearer ${store.currentUser.access_token}`
					}
				})
				.then( resp => resp.json())
				.then( data => {
					console.log(data)
					const {currentUser} = store;
					currentUser["usuario"] = data.usuario
					setStore({
						msg: data.success,
						currentUser: currentUser,
						avatar:null
					})
					/* localStorage.removeItem("estaAut");
					localStorage.removeItem("currentUser");
					localStorage.setItem("currentUser", JSON.stringify(store.currentUser))
					localStorage.setItem("estaAut", true) */
				})
				.catch(error => {
					console.error(error)
					setStore({
						error: data.msg
					})
				})
			},
			actualizar_Imagen_Pregunta: async(e, id) => {
				e.preventDefault();

				const store = getStore();
				let formData = new FormData();
				formData.append("imagen", store.imagen_pregunta);

				fetch(`${store.apiUrl}/preguntas-imagenes/${store.id_nueva_pregunta}`,{
					method: "PUT",
					body: formData,
					headers: {
						"Authorization":`Bearer ${store.currentUser.access_token}`
					}
				})
				.then( resp => resp.json())
				.then( data => {
					console.log(data)
					const {currentUser} = store;
					currentUser["usuario"] = data.usuario
					setStore({
						msg: data.success,
						currentUser: currentUser,
						imagen_pregunta:null
					})
				})
				.catch(error => {
					console.error(error)
					setStore({
						error: data.msg
					})
				})
			},
			obtener_Imagenes_Teoria: (filename) => {
				const store = getStore();
				console.log("ObtenerImagenes, filename :" + filename)
				return `${store.apiUrl}/teoria-imagenes/${filename}`
			},
			getTeoria: async () => {
				const store = getStore();
				const response = await fetch(store.apiUrl + "/teoria");
				const datos = await response.json();
				console.log("getTeoria");
				setStore({
					teoria: datos
				})
			},
			obtener_Imagenes_Preguntas: (filename) => {
				const store = getStore();
				console.log("ObtenerImagenes, filename :" + filename)
				return `${store.apiUrl}/preguntas-imagenes/${filename}`
			},

		}
	};
};

export default getState;