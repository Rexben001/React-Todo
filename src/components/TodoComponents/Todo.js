import React from "react";
import moment from "moment";
import "./Todo.css";

const todo = props => (
  <div
    className={props.todoTask.completed ? `todo complete` : "todo"}
    onClick={() => props.complete(props.id)}
  >
    {props.todoTask.task}{" "}
    <span className={props.todoTask.completed ? `complete` : ''}>{moment().format("MMMM Do YYYY, h:mm:ss a")}</span>
  </div>
);

export default todo;
