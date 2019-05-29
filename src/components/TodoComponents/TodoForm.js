import React from "react";
import "./Todo.css";

const todoForm = props => (
  <div>
    <input
    type="text"
      placeholder="Enter your Todo item..."
      onChange={props.updateValue}
    />
    <button className='add' onClick={() => props.addTodo()}>Add Todo</button>
    <button>Clear Completed</button>
  </div>
);

export default todoForm;
