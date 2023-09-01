'use client'

import { useState } from "react";

let nextId = 0;

const Form = () => {
  const [input, setInput] = useState('');
  const [todo, setTodo] = useState([]);

  return (
    <div>
      <form onSubmit={(event) => {
        event.preventDefault();
        setTodo([...todo, { id: nextId++, name: input }]);
        setInput('');
      }}>
        <input  
          name="todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          required
        />
        <button>Add</button>
      </form>
      {todo.length == 0 ? (
          'You have no tasks to do... Add some tasks'
        ) : (
          <ul>
        {todo.map(todo => (
          <li key={todo.id}>
            <button onClick={() => { 
              setTodo(prevTodo => prevTodo.filter(item => item.id !== todo.id));
            }}>
              delete
            </button>
            {todo.name}
          </li>
        ))}
      </ul>
        )}
      
    </div>
  );
}

export default Form;
