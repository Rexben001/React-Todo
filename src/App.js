import React from "react";
import "./App.css";

import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: initalStateTodo,
      todoTask: ""
    };
  }

  updateTodoState = event => {
    this.setState({ todoTask: event.target.value });
  };

  addTodoList = () => {
    if (this.state.todoTask === "") {
      return alert("Pls, enter todo");
    }
    const newTodo = {
      task: this.state.todoTask,
      id: new Date(),
      completed: false
    };
    this.setState({ todo: this.state.todo.concat(newTodo), todoTask: "" }, () => {
      window.localStorage.setItem("todo", JSON.stringify(this.state.todo))
    }
    );
  };

  completedTask = id => {
    const updArr = [...this.state.todo];
    this.setState({
      todo: updArr.map(val => {
        if (val.id === id) {
          val.completed = true;
        }
        return val;
      })
    });
  };

  clearCompletedTask = () => {
    const filteredTodo = this.state.todo.filter(item => item.completed !== true);
    this.setState({
      todo: filteredTodo
    });
    window.localStorage.setItem("todo", JSON.stringify(filteredTodo))
  };

  render() {
    return (
      <div className="App">
        <h2 style={{ color: "white" }}>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todo} clickedEvent={this.completedTask} />
        <TodoForm
          updateValue={this.updateTodoState}
          addTodo={this.addTodoList}
          clearTodo={this.clearCompletedTask}
          value={this.state.todoTask}
        />
      </div>
    );
  }
}

const defaultTodoList = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];
if (window.localStorage.getItem("todo") === null)
{
  window.localStorage.setItem("todo", JSON.stringify(defaultTodoList));
}
const initalStateTodo = JSON.parse(window.localStorage.getItem("todo"));



export default App;
