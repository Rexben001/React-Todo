(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(t,e,o){},11:function(t,e,o){t.exports=o(20)},17:function(t,e,o){},19:function(t,e,o){},20:function(t,e,o){"use strict";o.r(e);var a=o(0),n=o.n(a),d=o(3),c=o(8),r=o(4),l=o(5),s=o(9),i=o(6),u=o(10),m=(o(17),o(1),o(7)),p=o.n(m),k=function(t){return n.a.createElement("div",{className:t.todoTask.completed?"todo complete":"todo",onClick:function(){return t.complete(t.id)}},t.todoTask.task," ",n.a.createElement("span",{className:t.todoTask.completed?"complete":""},p()().format("MMMM Do YYYY, h:mm:ss a")))},f=function(t){return n.a.createElement("div",{className:"Todo"},t.todos.map(function(e){return n.a.createElement(k,{key:e.id,todoTask:e,complete:t.clickedEvent,id:e.id})}))},T=function(t){return n.a.createElement("div",{className:"TodoForm"},n.a.createElement("input",{type:"text",placeholder:"Enter your Todo item...",onChange:t.updateValue,value:t.value,onKeyDown:function(e){13===e.keyCode&&t.addTodo()}}),n.a.createElement("button",{className:"add",onClick:function(){return t.addTodo()}},"Add Todo"),n.a.createElement("button",{onClick:function(){return t.clearTodo()}},"Clear Completed"))},w=function(t){function e(t){var o;return Object(r.a)(this,e),(o=Object(s.a)(this,Object(i.a)(e).call(this,t))).updateTodoState=function(t){o.setState({todoTask:t.target.value})},o.addTodoList=function(){if(""===o.state.todoTask)return alert("Pls, enter todo");var t={task:o.state.todoTask,id:new Date,completed:!1};o.setState({todo:o.state.todo.concat(t),todoTask:""},function(){window.localStorage.setItem("todo",JSON.stringify(o.state.todo))})},o.completedTask=function(t){var e=Object(c.a)(o.state.todo);o.setState({todo:e.map(function(e){return e.id===t&&(e.completed=!0),e})})},o.clearCompletedTask=function(){var t=o.state.todo.filter(function(t){return!0!==t.completed});o.setState({todo:t}),window.localStorage.setItem("todo",JSON.stringify(t))},o.state={todo:v,todoTask:""},o}return Object(u.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("h2",{style:{color:"white"}},"Welcome to your Todo App!"),n.a.createElement(f,{todos:this.state.todo,clickedEvent:this.completedTask}),n.a.createElement(T,{updateValue:this.updateTodoState,addTodo:this.addTodoList,clearTodo:this.clearCompletedTask,value:this.state.todoTask}))}}]),e}(n.a.Component);null===window.localStorage.getItem("todo")&&window.localStorage.setItem("todo",JSON.stringify([{task:"Organize Garage",id:1528817077286,completed:!1},{task:"Bake Cookies",id:1528817084358,completed:!1}]));var v=JSON.parse(window.localStorage.getItem("todo")),E=w;o(19);Object(d.render)(n.a.createElement(E,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.c9772d75.chunk.js.map