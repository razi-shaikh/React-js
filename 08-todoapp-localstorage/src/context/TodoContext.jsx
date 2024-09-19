import { createContext, useState } from 'react'

export const TodoContext = createContext({});

export const TodoProvider = (props) => {
  const [list, setList] = useState([]);
  return (
    <TodoContext.Provider value={{ list, setList }}>
      {props.children}
    </TodoContext.Provider>
  );
};