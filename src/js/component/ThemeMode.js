import React, {  useContext, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../store/appContext";

const ThemeMode = () => {
    const IconoLuna = <FontAwesomeIcon icon={faMoon} />;
    const IconoSol = <FontAwesomeIcon icon={faSun} />;
    const { actions } = useContext(Context)

    let switchButton = useRef("0");

    //Cambia #ID del botón
    const handleButton = () => {
          if (localStorage.getItem("darkTheme") === "true"){
             switchButton.current = "active"
         } else {
             switchButton.current = ""
         }
    }
    // Para condicionar que el botón se quede segun el tema del local storage
    if(localStorage.getItem("darkTheme") === "true"){
        document.body.classList.add("dark");
        switchButton.current = "active";
    } else {
        document.body.classList.remove("dark");
        switchButton.current = "";
    }

    return (
        <>
            <div onClick={handleButton}>
                <button onClick={actions.handleTheme} className="switch" id={switchButton.current}>
                    <span >{IconoSol}</span>
                    <span>{IconoLuna}</span>
                </button>
            </div>
        </>
    );
};

export default ThemeMode;
