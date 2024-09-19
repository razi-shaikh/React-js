import React from 'react'
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'
function App() {
  return (
    <>
    {/* <div className=' text-green-600'>App</div> */}
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default App