import React from "react";
import moment from 'moment';
import "./Todo.css";

const todo = props => (
    <div className='todo'>{props.todoTask} <span>{moment().format('MMMM Do YYYY, h:mm:ss a')}</span></div>
);

export default todo;
