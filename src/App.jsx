import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css"

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('All');

  const addTodo = (todo) => {
    setTodos([...todos, { ...todo, id: Date.now(), status: 'Not Completed' }]);
  };

  const updateTodo = (id, updatedTodo) => {
    setTodos(todos.map(todo => (todo.id === id ? updatedTodo : todo)));
    console.log(updatedTodo)
    
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  function onChangeHandler(id,key,value){
    setTodos((todos)=>{
      return todos.map(todo=>{
        return todo.id === id ?{...todo,[key]:value}: todo;
      })
    })
  }

  const filteredTodos = todos.filter(todo => 
    filter === 'All' || todo.status === filter
  );

  return (
    <div className="app">

      <h1>My to do</h1>

      <TodoForm addTodo={addTodo} /> <br/>

      <div className="filter container">
        <label><h4>Status Filter : </h4></label>
        <select onChange={(e) => setFilter(e.target.value)} value={filter}>
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Not Completed">Not Completed</option>
        </select>
      </div><br/>

      <TodoList 
        todos={filteredTodos} 
        onChangeHandler={onChangeHandler}
        updateTodo={updateTodo} 
        deleteTodo={deleteTodo} 
      />
    </div>
  );
};

export default App;
