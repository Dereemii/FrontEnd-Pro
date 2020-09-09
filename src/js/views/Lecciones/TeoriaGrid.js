import React from 'react'

export const LeccionesGrid = ({ items, isLoading}) => {
    return isLoading ? <h1>Loading ...</h1> : <section className="cardLecciones">
        {items.map(item => (
            <h1>{item.name}</h1>
        ))}
    </section>
}

export default LeccionesGrid;