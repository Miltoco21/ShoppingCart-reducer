
import React from 'react'
//enviamos data desde nuestro shopping reducer, o api si existiera 
const ProductItem = ({data,addToCart}) => {
    let {id,name,price} = data;
  return (
    //agregar al carro el id para tener registro del producto 
    <div style={{border:"thin solid gray",padding:"1rem"}}>
        <h4>{name}</h4>
        <h5>${price}.00</h5>
        <button onClick={()=>addToCart(id)}>Agregar al carro </button>


       

      
    </div>
  )
}

export default ProductItem
