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
          className="search_input"
          required
        />
        <button className="add_btn">Add</button>
      </form>
      {todo.length == 0 ? ( 
        <div className="desc">
          You have no tasks to do... Add some tasks
        </div>
        ) : (
          <ul>
        {todo.map(todo => (
          <li className="desc" key={todo.id}>
            <button className="delete_btn" onClick={() => { 
              setTodo(prevTodo => prevTodo.filter(item => item.id !== todo.id));
            }}>
              Done
            </button>
            &emsp;
            {todo.name}
          </li>
        ))}
      </ul>
        )}
      
    </div>
  );
}

export default Form;
