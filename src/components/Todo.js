import React, { useRef, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { DeleteTodo, ToggleTodo } from '../actions';
import { TimelineMax } from 'gsap/all';

const Todo = ({ todoInfo }) => {
  const dispatch = useDispatch();
  let todoRef = useRef(null);
  const [playState, setPlayState] = useState(true);

  const tIn = new TimelineMax({ paused: true });
  const tOut = new TimelineMax({ paused: true });

  useEffect(() => {
    tIn.fromTo(
      todoRef,
      1,
      { opacity: 0, y: -10 },
      {
        opacity: 1,
        y: 0,
        onComplete: () => {
          setPlayState(false);
        }
      }
    );
    if (playState) tIn.play();
  }, []);

  const handleDelete = id => {
    tOut.fromTo(
      todoRef,
      1,
      { opacity: 1 },
      { opacity: 0, onComplete: () => dispatch(DeleteTodo(id)) }
    );
    tOut.play();
  };

  return (
    <div
      className={`alert alert-dismissible mb-2 pt-0 pb-0 pl-0 text-white todoItem ${
        todoInfo.isCompleted ? 'bg-success' : 'bg-info'
      }`}
      ref={element => {
        todoRef = element;
      }}
    >
      <p className="mb-0 p-3" onClick={() => dispatch(ToggleTodo(todoInfo.id))}>
        {todoInfo.todoText}
      </p>
      <button
        className="close"
        type="button"
        onClick={() => handleDelete(todoInfo.id)}
      >
        Del
      </button>
    </div>
  );
};

export default Todo;
