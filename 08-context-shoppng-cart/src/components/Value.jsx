import React, { useContext } from 'react'
import { CartContext } from '../context/Cart'

function Value() {
  const { item } = useContext(CartContext)
  let total = 0;
  return (
    <div>
      {item.map((res) => {
        // console.log('try', res.productName);
        total = total + res.productPrice;
        return (
          <h3>{res.productName}</h3>
        )
      })}
      <p>${total}</p>
    </div>
  )
}

export default Value