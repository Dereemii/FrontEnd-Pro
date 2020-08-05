import React from 'react';
import './ruleta.css';


export class Ruleta extends React.Component {

    state = {
        name: "circulo" // estilo circulo
    }

    comenzarRotacion = () => {  {/* Funcion que da inicio a la rotacion */}
        this.setState({
            name: "circulo iniciar-rotacion" // estilo + css animacion
        });
        setTimeout(() => {
            this.setState({
                name: "circulo iniciar-rotacion detener-rotacion"
            })
        }, Math.floor(Math.random() * 10000) + 1); //selecion aleatoria de numero
    }


    render() {
        return (
            <>
                <div className="text-center mt-5">
                    <h1>
                        Presiona el boton para una pregunta aleatoria <br /> {/* pregunta aleatoria */}
                    </h1>
                </div>
                <div className="container-fluid pt-5 ">
                    <div className="flecha-ruleta"></div>
                    <ul className={this.state.name}> {/*  paso estilo css de circulo */}
                        <li class="li-ruleta">
                            <div className="texto-ruleta"
                                contentEditable="true"
                                spellCheck="false">
                                1
            </div>
                        </li>
                        <li class="li-ruleta">
                            <div className="texto-ruleta"
                                contentEditable="true"
                                spellCheck="false">
                                2
            </div>
                        </li>
                        <li class="li-ruleta">
                            <div className="texto-ruleta"
                                contentEditable="true"
                                spellCheck="false">
                                3
            </div>
                        </li>
                        <li class="li-ruleta">
                            <div className="texto-ruleta"
                                contentEditable="true"
                                spellCheck="false">
                                4
            </div>
                        </li>
                        <li class="li-ruleta">
                            <div className="texto-ruleta"
                                contentEditable="true"
                                spellCheck="false">
                                5
            </div>
                        </li>
                        <li class="li-ruleta">
                            <div className="texto-ruleta"
                                contentEditable="true"
                                spellCheck="false">
                                6
            </div>
                        </li>
                        <li class="li-ruleta">
                            <div className="texto-ruleta"
                                contentEditable="true"
                                spellCheck="false">
                                7
            </div>
                        </li>
                        <li class="li-ruleta">
                            <div className="texto-ruleta"
                                contentEditable="true"
                                spellCheck="false">
                                8
            </div>
                        </li>
                        <li class="li-ruleta">
                            <div className="texto-ruleta"
                                contentEditable="true"
                                spellCheck="false">
                                9
            </div>
                        </li>
                        <li class="li-ruleta">
                            <div className="texto-ruleta"
                                contentEditable="true"
                                spellCheck="false">
                                10
            </div>
                        </li>
                        <li class="li-ruleta">
                            <div className="texto-ruleta"
                                contentEditable="true"
                                spellCheck="false">
                                11
            </div>
                        </li>
                        <li class="li-ruleta">
                            <div className="texto-ruleta"
                                contentEditable="true"
                                spellCheck="false">
                                12
            </div>
                        </li>
                    </ul>
                </div>

                <div className="mx-auto py-5 ">
                    <button type="button" className="btn btn-success btn-lg mx-auto px-5 py-3" onClick={this.comenzarRotacion} >GIRAR</button>
                </div>
            </>
        )
    }
}