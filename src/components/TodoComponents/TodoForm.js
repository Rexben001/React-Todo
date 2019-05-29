import React from "react";
import "./Todo.css";

const todoForm = props => (
  <div>
    <input
    type="text"
      placeholder="Enter your Todo item..."
            onChange={props.updateValue}
            value={props.value}
            onKeyDown={(e) => {
                if (e.keyCode === 13)
                {
                    props.addTodo()
                }
            }}
    />
    <button className='add' onClick={() => props.addTodo()}>Add Todo</button>
    <button>Clear Completed</button>
  </div>
);

export default todoForm;
