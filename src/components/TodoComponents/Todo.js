import React from "react";
import "./Todo.css";

const todo = props => (
    <div className='todo'>{props.todoTask}</div>
);

export default todo;
