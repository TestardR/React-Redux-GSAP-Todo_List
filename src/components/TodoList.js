import React from 'react';
import Todo from './Todo';
import { useSelector } from 'react-redux';

const TodoList = () => {
  const todoList = useSelector(state => state.todos);

  return (
    <div>
      {todoList.map(todo => (
        <Todo todoInfo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
