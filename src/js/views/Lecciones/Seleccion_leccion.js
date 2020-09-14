import React, {  useContext } from 'react';
import Navbar from "../../component/navbar";
import Footer from "../../component/footer";
import { Context } from "../../store/appContext";

export const Seleccion_leccion = ({ match }) => {
    const { store, actions } = useContext(Context);
        
    return (
        <>
            <Navbar />
            <div><h1 className="text-center tituloTeoria">Gira la tarjeta para practicar: Redes Sociales</h1></div>
            <div className="tarjetasTeoria">
                {store.teoria.map((item, index,) => (
                    <div className="container">
                
                        <div className="tarjetaTeoria ">
                            <div className="tarjetaTeoria-inner">
                                <div className="tarjetaTeoria-front bgTarjeta ">
                                <img className="img-fluid" src={`http://localhost:5000/teoria-imagenes/${item.multimedia}`} alt="" />
                                </div>
                                <div className="tarjetaTeoria-back">
                                    {item.titulo}                        
                                    <ul>
                                        <li>
                                            <strong className="contenidoTarjeta">{item.contenido}</strong>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>                 
                    </div>

                ))}
            </div>
            <Footer />
        </>
    )
}
export default Seleccion_leccion;
