// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import "./Todo.css";

import Todo from "./Todo";

const todoList = props => (
  <div className='Todo'>
    {props.todos.map(todo => (
      <Todo key={todo.id} todoTask={todo} complete={props.clickedEvent} id={todo.id}/>
    ))}
  </div>
);

export default todoList;
