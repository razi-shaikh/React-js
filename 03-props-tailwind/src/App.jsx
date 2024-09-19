import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
const myObject={
  name:'Razi',
  age:20,
}
const myArray=[1,2,3]
  return (
    <>
      <Card userName='Razi' newObject={myObject} newArray={myArray}/>
      <Card bio='autem aliquid maxime pariatur culpa minus doloremque fugit.'/>
    </>
  )
}

export default App
