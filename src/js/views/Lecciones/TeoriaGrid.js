import React from 'react';
import ItemTeoria from "./ItemTeoria";

export const LeccionesGrid = ({ items, isLoading}) => {
    return isLoading ? (
    <h1>Loading ...</h1>
    ) : (
    <section className="tarjetasTeoria">
        {items.map((item) => ( 
            <ItemTeoria key={item.contenido} item={item}></ItemTeoria>
        ))}
    </section>
    )
        }

export default LeccionesGrid;