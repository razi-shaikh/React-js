import React from 'react'

function Product({productName,productPrice}) {
  return (
    <div>
      <h4>{productName} Price:{productPrice}</h4>
      <button>Add To Card</button>
    </div>
  )
}

export default Product