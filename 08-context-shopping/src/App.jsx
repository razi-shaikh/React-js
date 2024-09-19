import React from 'react'
import './App.css'
import Product from './components/Product'
import CardList from './components/CardList'

function App() {
  return (
    <>
      <h1>Shopping Cart</h1>
      <Product productName={"apple"} productPrice={50} />
      <Product productName={"samsung"} productPrice={50} />
      <Product productName={"vivo"} productPrice={50} />
      <Product productName={"onePlus"} productPrice={50} />
      <CardList />
    </>
  )
}

export default App