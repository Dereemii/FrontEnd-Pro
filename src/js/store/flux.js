import { get } from "jquery";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			apiUrl: "http://localhost:5000",
			name: null,
			email: null,
			password: null,
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
			handleRegister: async (e, history) => {
				e.preventDefault();
				
				const store = getStore();
				const options = {
					method: 'POST', 
					body: JSON.stringify({
						"name": store.name,
						"email": store.email, 
						"password": store.password 
					}),
					headers: {
						'Content-Type': 'application/json'
					}
				}
				const resp = await fetch(store.apiUrl + "/register", options);
				const data = await resp.json();

				if (data.success){
					setStore({
						currentUser: data.data,
						email: null,
						password: null,
						error: null
					})
					history.push("/")
				}else{
					setStore({
						error: data.msg
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
						"email": store.email, 
						"password": store.password 
					}),
					headers: {
                        'Content-Type': 'application/json'
                    }
				}
				const resp = await fetch(store.apiUrl + "/login", options);
				const data = await resp.json();

				if (data.success){
					setStore({
						currentUser: data.data,
						email: null,
						password: null,
						error: null
					});
					history.push("/curso");
				}else{
					setStore({
						error: data.msg
					})

				}

				actions.handleLocal();
			},
			handleLocal: () => {
				const store = getStore();
				localStorage.setItem("email", JSON.stringify(store.email));
				
			}

			
			
		}
	};
};

export default getState;
