import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: [{
    id: nanoid(),
    text: 'Hello World'
  }]
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,//: {
  //   todos: [{ id: 1, text: 'Hello World' }]
  // },
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload
      }
      state.todos.push(todo);
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((ele) => (ele.id !== action.payload))
      // state.todos = removeElement;
    },
    updateTodo: (state, action) => { },
  }
})

export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer