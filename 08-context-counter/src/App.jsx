import './App.css'
import Button from './cmponents/Button'
import { useContext } from 'react'
import { CounterContext } from './context/CounterContext'
function App() {
  const { count } = useContext(CounterContext);
  console.log('Value is ', count);
  return (
    <div className='App'>
      <h1>Coun is {count}</h1>
      <Button />
      <Button />
      <Button />
      <Button />
    </div>
  )
}

export default App
