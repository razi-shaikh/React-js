import './App.css'
import Product from './components/Product'
import Value from './components/Value'

function App() {

  return (
    <>
      <Product name={'apple'} price={55} />
      <Product name={'samsung'} price={65} />
      <Product name={'oneplus'} price={45} />
      <Product name={'vivo'} price={50} />
      <Value />
    </>
  )
}

export default App
