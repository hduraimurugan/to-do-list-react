import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ name, description, status: 'Not Completed' });
    setName('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Todo Name" 
        value={name}
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Todo Description" 
        value={description}
        onChange={(e) => setDescription(e.target.value)} 
      />
      <button className='btn-addToDo' type="submit">Add Todo</button >
    </form>
  );
};

export default TodoForm;
