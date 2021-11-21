import './App.css';
import React, { useState } from 'react';

function App() {
  const [todo, setTodo] = useState({desc: '', date: ''});
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
  }

  return (
    <div className="App">
      <h1>Simple Todo List</h1>
      <form onSubmit={addTodo}>
        Date: <input type="date" name="date" value={todo.date} onChange={inputChanged}/> 
        Description: <input type="text" name="desc" value={todo.desc} onChange={inputChanged}/>
        <input type="submit" value="Add"/>
      </form>
      <table>
        <tbody>
          <tr><th>Date</th><th>Description</th></tr>
         { 
          todos.map((todo, index) => 
            <tr key={index}>
              <td>{todo.date}</td>
              <td>{todo.desc}</td>
            </tr>
          )
        }
        </tbody>
      </table>
    </div>
  );
}

export default App;
