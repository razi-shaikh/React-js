import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../store/todoSlice'


function Todos() {
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch();

  return (
    <>
      Todos
      {
        todos.map((v) => {
          return (
            <li key={v.id}>
              {v.text}
              <button className=' bg-red-500 px-2 rounded-lg' onClick={() => (
                dispatch(removeTodo(v.id))
              )}>del</button>
            </li>
          )
        })
      }
    </>

  )
}

export default Todos