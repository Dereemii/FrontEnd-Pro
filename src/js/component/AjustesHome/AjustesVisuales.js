import React from "react";
import { useContext } from "react";
import { Context } from "../../store/appContext";
import { useHistory } from "react-router";

export const AjustesVisuales = (props) => {
    const { actions, store } = useContext(Context)
	const { currentUser} = store;
	const avatar = !!currentUser ? currentUser.usuario.avatar : "../../img/iconoAvatar.png" ;
    const history = useHistory();

    return (
        <>
            <div className="row Table">
                <div className="col-sm-4 divisionesDeAjustesVisuales TamañoLetra">
                    <h1 className="Titulo">Tamaño De Letra</h1>
                    <div className="itemVisual">
                        <button className="btnDeAjustesVisuales botonDeVisuales"> - </button>
                        <input className="inputTamañoLetra" type="number" />
                        <button className="btnDeAjustesVisuales botonDeVisuales"> + </button>
                    </div>
                </div>
                <div className="col-sm-4 divisionesDeAjustesVisuales FotoPerfil">
                    <h1 className="Titulo">Foto De Perfil</h1>
                    <img
                        className="Foto"
                        src={actions.obtenerAvatar(avatar)}
                        alt="imagen-De-Usuario"
                        border="0"
                    />
                    <form onSubmit={actions.actualizarAvatar}>
                        <input type="file" name="avatar" onChange={e => actions.cambiarAvatar(e, history)}/>
                        <button className="btn btn-primary btn-block" type="submit">Actualizar</button>
                    </form>
                </div>
                <div className="col-sm-4 divisionesDeAjustesVisuales ColorTema">
                    <h1 className="Titulo">Modo De Pantalla</h1>
                    <div className="itemVisualTres">
                        <button onClick={actions.claro} className="btnDeAjustesVisualesClaro botonDeVisuales">Claro</button>
                        <button onClick={actions.oscuro} className="btnDeAjustesVisualesOscuro botonDeVisuales">Oscuro</button>
                    </div>
                </div>
            </div>
        </>
    );

};
export default AjustesVisuales;
