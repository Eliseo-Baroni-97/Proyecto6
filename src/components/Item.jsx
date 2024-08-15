import React from 'react'

function Item({producto}) {
  return (
    <div className='producto'>
        <img src={producto.imagen} alt={producto.id} />
        <div>
            <h4>{producto.titulo}</h4>
            <p>Precio:${producto.precio}</p>
            <p>Categoria:{producto.categoria}</p>
            <a className='ver-mas' href={`/item/${producto.id}`}>Ver Mas</a>
        </div>
        
        </div>

  )
}

export default Item