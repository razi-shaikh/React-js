import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(10)

  function addValue(){
    // console.log(`before : ${count}`);
    if(count<20){
      setCount(count+1)
      // console.log(`After : ${count+1}`);
    }
  }
  
  const lessValue=()=>{
    // console.log(`before : ${count}`);
    if(count>0){
      setCount(count-1)
      // console.log(`After : ${count-1}`);
    }
  }

  
  return (
    <>
      <h1>Counter Project</h1>
      <h2>Initial Value : {count}</h2>
      <button
      onClick={addValue}
      >Addition</button>
      <button
      onClick={lessValue}
      >Subtraction</button>
    </>
  )
}

export default App
