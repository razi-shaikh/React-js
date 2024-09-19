import React, { useContext, useState } from 'react'
import { TodoContext } from '../context/TodoContext';

function TodoItem({ todo }) {
  const { list } = useContext(TodoContext)
  const { setList } = useContext(TodoContext)
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState("")

  function deleteTodo(id) {
    setList(list.filter((res) => res.id !== id))
  }

  function editTodo(id, todo) {
    if (todo.completed) return;

    if (isTodoEditable) {
      let obj = { ...todo }
      obj.text = todoMsg
      setList(list.map((res) => {
        if (res.id !== id) {
          return res
        } else {
          return obj
        }
      }))
      setIsTodoEditable(false);
    } else {
      setIsTodoEditable((prev) => !prev);
    }
    setTodoMsg(todo.text)
  }

  function completedTodo(id) {
    let obj = { ...todo }
    obj.completed = !obj.completed
    setList(list.map((res) => {
      if (res.id !== id) {
        return res
      } else {
        return obj
      }
    }))
  }

  return (
    <div
      key={todo.id}
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}`}>
      <input
        type="checkbox"
        className="cursor-pointer"
        defaultChecked={todo.completed}
        onChange={() => completedTodo(todo.id)}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"} ${todo.completed ? "line-through" : ""}`}
        value={isTodoEditable ? todoMsg : todo.text}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => editTodo(todo.id, todo)}
        disabled={todo.completed}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodo(todo.id)}>❌</button>
    </div>
  );
}

export default TodoItem;