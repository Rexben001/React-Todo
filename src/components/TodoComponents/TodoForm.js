import React from "react";
import "./Todo.css";

const todoForm = props => (
  <div>
    <input
      type="text"
      placeholder="Enter your ToDo"
      onChange={props.updateValue}
    />
    <button onClick={() => props.addTodo()}>Add Todo</button>
    <button>Clear Completed</button>
  </div>
);

export default todoForm;
