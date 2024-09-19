import React, { useContext, useState } from 'react'
import { TodoContext } from '../context/TodoContext';

function TodoForm() {
  const { list } = useContext(TodoContext)
  const { setList } = useContext(TodoContext)
  const [msg, setMsg] = useState("")

  const add = (e) => {
    e.preventDefault()
    if (msg !== '') {
      setList([
        { id: Date.now(), text: msg, completed: false },
        ...list,
      ])
    }
    setMsg('')
  }

  return (
    <form className="flex"
      onSubmit={add}>
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={msg}
        onChange={(e) => setMsg(e.target.value)} />
      <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
        Add
      </button>
    </form>
  );
}

export default TodoForm;