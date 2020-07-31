import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

export const Formulario = () => {

    return (
        <>
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Registrate Aqui...</h1>
				<form>
					<div className="form-group">
						<label>Nombre Completo</label>
						<input
							type="text"
							className="form-control"
							name="nombreCompleto"
							placeholder="Su Nombre Completo..."
						/>
					</div>
					<div className="form-group">
						<label>Nombre de Usuario</label>
						<input
							type="text"
							className="form-control"
							name="nombreUsuario"
							placeholder="Su Nombre de Usuario..."
						/>
					</div>
					<div className="form-group">
						<label>Correo Electronico</label>
						<input
							type="email"
							className="form-control"
							name="correoElectronico"
							placeholder="Su Correo Electronico..."
						/>
					</div>
					<div className="form-group">
						<label>Numero Telefonico</label>
                        <div className="numeroTelefono">
                        <p>+56 9</p>
						<input
                            type="tel"
                            pattern="[0-9]{8}" required
							className="form-control"
							name="numeroTelefonico"
                            placeholder="Su Numero Telefonico..."
						/>
                        </div>
					</div>
					<div className="form-group">
						<label>Contraseña</label>
						<input
							type="password"
							className="form-control"
							name="Contraseña"
							placeholder="Escriba una Contraseña..."
						/>
					</div>
					<div className="form-group">
                        <label>Confirmar Contraseña</label>
						<input
							type="password"
							className="form-control"
							name="confirmarContraseña"
							placeholder="Escriba la confirmacion de su Contraseña..."
						/>
					</div>
					<button type="submit" className="btn btn-primary form-control">
						Registrar y Avanzar
					</button>
				</form>
			</div>
		</div>
        </>
    )
}
export default Formulario;