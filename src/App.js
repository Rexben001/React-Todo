import React from "react";
import uuid from "uuid";
import './App.css';

import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
      todo: defaultTodoList,
      todoTask: ""
    };
  }

  updateTodoState = event => this.setState({ todoTask: event.target.value });

  addTodoList = () => {
    const newTodo = {
      task: this.state.todoTask,
      id: uuid(),
      completed: false
    };
    this.setState({ todo: this.state.todo.concat(newTodo) });
  };

  render() {
    return (
      <div className='App'>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todo} />
        <TodoForm
          updateValue={this.updateTodoState}
          addTodo={this.addTodoList}
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

export default App;
