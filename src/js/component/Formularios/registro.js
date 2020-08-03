import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import { useHistory } from "react-router";

export const Formulario = () => {
  const { store, actions } = useContext(Context);
  const { history } = useHistory();

  return (
    <>
      <div className="container">
        <div>
          <h1 className="text-center mt-5">Registrate Aqui</h1>
          
		  
          <form className="container" onSubmit={e => actions.handleRegister(e, history)}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Nombre de Usuario
              </label>
              <input
                type="name"
                id="name"
                name="name"
                className="form-control"
                placeholder="Su nombre de usuario"
                defaultValue={store.name}
                onChange={actions.handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Correo Electronico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="correo@ejemplo.com"
                defaultValue={store.email}
                onChange={actions.handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                Numero Telefonico
              </label>
              <input
                type="phone"
                id="phone"
                name="phone"
                /* pattern="[0-9]{8}" */
                className="form-control"
                placeholder="+569 12345678"
                defaultValue={store.phone}
                onChange={actions.handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                placeholder="Escriba una constraseña facil de recordar"
                defaultValue={store.password}
                onChange={actions.handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary form-control">
              Registrar y Avanzar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Formulario;
