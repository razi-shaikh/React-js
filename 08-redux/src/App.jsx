import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/slice/counter.slice';

function App() {
  const count = useSelector((state) => state.counter)
  const dispatch = useDispatch();

  return (
    <>
    <h1>
      counter : {count}
    </h1>
    <button onClick={()=>dispatch(increment())}>increment</button>
    <button onClick={()=>dispatch(decrement())}>decrement</button>
    </>
  )
}

export default App
