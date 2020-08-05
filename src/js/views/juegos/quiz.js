import React from "react";
import './quiz.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons'

export const Quiz = () => {

    const arrobaIcono = <FontAwesomeIcon icon={faAt} />
    return (
        <>
         <h2 className="titulo text-center py-5">Leccion 1 - Iconos</h2>

            <div className="container text-center mb-5">
                <div className="row">
                    <div className="col icono">
                        {arrobaIcono}
                    </div>
                    <div className="col">
                        <p>
                        Este es el ícono que usamos para direcciones de E-mail
                        </p>
                        <p><strong>ARROBA</strong></p>       
                    </div>
                </div>
                <p className="pt-4">Ejemplo: tunombre@gmail.com</p>
            </div>
            <div className="container text-center py-5 mt-4">
            <button type="button" className="btn btn-primary btn-lg mx-3">Anterior</button>
            <button type="button" className="btn btn-secondary btn-lg mx-3">Siguiente</button>
            </div>
            
        </>
    )
};