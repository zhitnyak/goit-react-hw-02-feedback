import React, { Component } from 'react';
import './App.css';
// import Vidget from './components/Vidget';
// import TodoList from './components/TodoList/TodoList';
// import initialTodos from './components/TodoList/todos.json';
import Statistics from './components/Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const res = Math.round((good / this.countTotalFeedback()) * 100);
    if (!res) {
      return 0;
    }
    return res;
  };

  handleButtonClick = e => {
    const key = e.target.id;
    this.setState(prevState => {
      return { [key]: prevState[key] + 1 };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);

    return (
      <div className="App">
        <p title="Please leave feedback">
          <>
            {options.map(option => {
              return (
                <button
                  type="button"
                  onClick={this.handleButtonClick}
                  name={option}
                >
                  {option}
                </button>
              );
            })}
          </>
          <div title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </div>
        </p>
      </div>
    );
  }
}
// class App extends Component {
//   state = {
//     todos: initialTodos,
//   };

//   deleteTodo = todoId => {
//     this.setState(prevState => ({
//       todos: prevState.todos.filter(todo => todo.id !== todoId),
//     }));
//   };
//   render() {
//     const { todos } = this.state;
//     const completedTodo = todos.reduce(
//       (acc, todo) => (todo.completed ? acc + 1 : acc),
//       0,
//     );
//     return (
//       <>
//         <div>
//           <span>ОБЩЕЕ Кол-во: {todos.length}</span>
//           <span>Выполнeнных: {completedTodo}</span>
//         </div>
//         <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
//       </>
//     );
//   }
// }

export default App;
