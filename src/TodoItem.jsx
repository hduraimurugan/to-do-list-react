import React from 'react';
import {EditableText} from '@blueprintjs/core'
import 'bootstrap/dist/css/bootstrap.css';


const TodoItem = ({todo, updateTodo, deleteTodo,onChangeHandler }) => {
  
  const handleStatusChange = (e) => {
    updateTodo(todo.id, { ...todo, status: e.target.value });
  };

 

  return (
    <div className="todo-item">

      <span>Name :<EditableText onChange={value => onChangeHandler(todo.id, 'name', value)} value={todo.name} /></span>
      <span>Description :<EditableText onChange={value => onChangeHandler(todo.id, 'description', value)} value={todo.description}/></span>

      <div className="status">
        <label>Status:  </label>
        <select className='dropdown' onChange={handleStatusChange} value={todo.status}>
          <option className='completed dropdown-item' value="Completed">Completed</option>
          <option className='not-completed dropdown-item' value="Not Completed">Not Completed</option>
        </select>
      </div>

      <div className='btn'>
      <button className='edit btn-primary' onClick={() => updateTodo(todo.id, todo)}>Edit</button>
      <button className='delete btn-primary' onClick={() => deleteTodo(todo.id)}>Delete</button>
      </div>
      
    </div>
  );
};

export default TodoItem;
