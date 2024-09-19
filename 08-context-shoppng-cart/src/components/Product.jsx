import React, { useContext, useId } from 'react'
import { CartContext } from '../context/Cart'

function Product({ name, price }) {
  const { item } = useContext(CartContext)
  const { setItem } = useContext(CartContext)
  console.log(item);
  const id = useId();
  return (
    <div>
      <h4>{name}</h4>
      <p>Price : {price}</p>
      <button onClick={() => {
        setItem([{ Id: id, productName: name, productPrice: price }
          , ...item])
      }}>Add to card</button>
    </div>
  )
}

export default Product