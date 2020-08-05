import { get } from "jquery";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			apiUrl: "http://localhost:5000",
			usuarios: [],
			nombre_usuario: null,
			correo: null,
			clave: null,
			telefono: null,
			currentUser: null,
			error: null
		},
		actions: {
			// Use getActions to call a function within a fuction
			handleChange: e => {
				const {name, value} = e.target;
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
			handleRegister: async (e, history) => {
				e.preventDefault();
				
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

				if (datos.succes){
					setStore({
						currentUser: datos.datos,
						nombre_usuario: null,
						correo: null,
						clave: null,
						telefono: null,
						error: null
					})
					history.push("/login")
				}else{
					setStore({
						error: datos.msg
					})

				}
			},
			handleLogin: async (e, history) => {
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

				if (datos.succes === "Log In exitoso!"){
					setStore({
						currentUser: datos.datos,
						correo: null,
						clave: null,
						error: null,
						telefono: null
					})
					history.push("/curso")
				}else{
					setStore({
						error: datos.msg
					})

				}

				actions.handleLocal();
			},
			handleLocal: () => {
				const store = getStore();
				localStorage.setItem("correo", JSON.stringify(store.correo));
				localStorage.setItem("nombre_usuario", JSON.stringify(store.nombre_usuario))
				
			}

			
			
		}
	};
};

export default getState;
