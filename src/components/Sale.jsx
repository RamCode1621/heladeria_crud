import React from 'react'
import './Sale.css'

function Sale({id,categorie,flavor,price,quantity,total,deleteItem,editItem}) {

  return (
    <div  className='sale'>
      <div className='sale--info'>
        <p>Helado:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{categorie}</p>
        <p>Sabor:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{flavor}</p>
        <p>Cantidad:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{quantity}</p>
        <p>Costo:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{price}</p>
        <p>Total:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{total}$</p>
      </div>
      <div className='sale--action'>
        <button className='sale--action__button sale--action__delete' onClick={()=>deleteItem(id)}>Eliminar</button>
        <button className='sale--action__button sale--action__edit'onClick={()=>editItem(id,categorie,flavor,price, quantity, total)} >Editar</button>
      </div>
    </div>
  )
}

export default Sale