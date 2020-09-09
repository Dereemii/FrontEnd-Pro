import React, { useEffect, useState } from 'react';
import axios from "axios";
import Navbar from "../../component/navbar";
import Footer from "../../component/footer";
import LeccionesGrid from "./TeoriaGrid";

export const Seleccion_leccion = () => {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

      /* http://localhost:5000/teoria */
    useEffect(() =>{
        const fetchItems = async () => {
            const result = await axios(`https://breakingbadapi.com/api/characters`)
            console.log(result.data)

            setItems(result.data)
            setIsLoading(false)
        }

        fetchItems();
    }, [])

    return (
        <>
            <Navbar />
            <LeccionesGrid isLoading={isLoading} items={items} />
            <Footer />
        </>
    )
}
export default Seleccion_leccion;
