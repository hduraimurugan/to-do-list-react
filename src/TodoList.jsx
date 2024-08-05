import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, updateTodo, deleteTodo,onChangeHandler }) => {
  
return (
    <div className="todo-list container">
      {todos.map(todo => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          todos={todos}
          onChangeHandler={onChangeHandler}
          updateTodo={updateTodo} 
          deleteTodo={deleteTodo} 
        />
      ))}
    </div>
  );
};

export default TodoList;
