import React from 'react'
import { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'

function Button() {
  const { count } = useContext(CounterContext)
  const { setCount } = useContext(CounterContext)

  return (
    <div>
      <button onClick={() => {
        setCount(count + 1)
      }}>Increment</button>
      <button onClick={() => {
        setCount(count - 1)
      }}>Decrement</button>
    </div>
  )
}

export default Button