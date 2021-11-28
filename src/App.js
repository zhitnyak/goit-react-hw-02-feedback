import React, { Component } from 'react';
import './App.css';
// import Vidget from './components/Vidget';
import TodoList from './components/TodoList/TodoList';
import initialTodos from './components/TodoList/todos.json';

class App extends Component {
  state = {
    todos: initialTodos,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };
  render() {
    const { todos } = this.state;
    const completedTodo = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0,
    );
    return (
      <>
        <div>
          <span>ОБЩЕЕ Кол-во: {todos.length}</span>
          <span>Выполнeнных: {completedTodo}</span>
        </div>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </>
    );
  }
}

export default App;
