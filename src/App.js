import './App.css';
import React, { useState } from 'react';
//importing Todolist from the components folder so that the table can be rendered
import Todotable from './components/Todolist'

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

  const deleteItem = (event, index) => {
    const deleteThis = event.target.id;
    console.log("we went here");
    // var filtered = todos.filter((todo, i) => i !== index);
    // setTodos([filtered]);
    setTodos(
      todos.filter(
      (todo, index, todos) => index != deleteThis
      )
      );
    console.log(todos);

  }

  return (
    <div className="App">
      <h1>Simple Todo List</h1>
      <form onSubmit={addTodo}>
        Date: <input type="date" name="date" value={todo.date} onChange={inputChanged}/> 
        Description: <input type="text" name="desc" value={todo.desc} onChange={inputChanged}/>
        <input type="submit" value="Add"/>
      </form>
      {/* todos array is passed as a prop to Todolist.js using key "todos" */}
      <Todotable todos={todos} delete={deleteItem}></Todotable>
    </div>
  );
}

export default App;
