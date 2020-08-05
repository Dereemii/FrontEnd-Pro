import React from "react";

export const JuegoCuatroEncender = () => {
    return (
        <>
            <div className="container">
                <h1>
                    Este Telefono Ya Inicializó, Ahora Trata De Colocarler Su Respectiva Contraseña Numérica
                </h1>
                <div className="contenedor_numbersKeys container">
                    <div className="fila_numbersKeys">
                        <button className="numberKeyGame btn btn-secondary" value="1">1</button>
                        <button className="numberKeyGame btn btn-secondary" value="2">2</button>
                        <button className="numberKeyGame btn btn-secondary" value="3">3</button>
                    </div>
                    <div className="fila_numbersKeys">
                        <button className="numberKeyGame btn btn-secondary" value="4">4</button>
                        <button className="numberKeyGame btn btn-secondary" value="5">5</button>
                        <button className="numberKeyGame btn btn-secondary" value="6">6</button>
                    </div>
                    <div className="fila_numbersKeys">
                        <button className="numberKeyGame btn btn-secondary" value="7">7</button>
                        <button className="numberKeyGame btn btn-secondary" value="8">8</button>
                        <button className="numberKeyGame btn btn-secondary" value="9">9</button>
                    </div>
                    <div className="fila_numbersKeys">
                        <button className="numberKeyGame btn btn-secondary" type="reset">Cancelar</button>
                        <button className="numberKeyGame btn btn-secondary" value="0">0</button>
                        <button className="numberKeyGame btn btn-secondary" type="submit">Enviar</button>
                    </div>

                </div>
            </div>
        </>
    )
}