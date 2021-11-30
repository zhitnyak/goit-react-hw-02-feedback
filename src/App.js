import React, { Component } from 'react';
import './App.css';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
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
    this.setState(prevState => ({ [e]: prevState[e] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div className="App">
        {/* <p title="Please leave feedback"> */}
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.handleButtonClick}
        />
        <div title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={`${this.countPositiveFeedbackPercentage()}%`}
          />
        </div>
        {/* </p> */}
      </div>
    );
  }
}

export default App;
