import React, { useContext, useState } from "react";
import { Context } from "../../store/appContext";

const ItemTeoria = ({match}) => {
    const { store, actions } = useContext(Context);


    const [indice, setIndice] = useState(0);
    const imagen_teoria = !!store.teoria ? actions.obtener_Imagenes_Teoria(store.teoria[0].multimedia) : "../../../src/img/sin-imagen.png";
    

    return (
        <>
                <div className="tarjetaTeoria">
                    <div className="tarjetaTeoria-inner">
                        <div className="tarjetaTeoria-front">
                           <img src={imagen_teoria} alt="" />                          
                        </div>
                        <div className="tarjetaTeoria-back">
                            {/* <h1>{}</h1> */}
                            <ul>
                                <li>
                                    <strong className="contenidoTarjeta">{store.teoria[0].contenido}</strong>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


        </>
    );
};

export default ItemTeoria;
