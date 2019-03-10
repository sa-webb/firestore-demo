import React, { Component } from 'react';
import './App.css';

// eslint-disable-next-line
import User from './models/User';
// eslint-disable-next-line
import Customer from './models/Customer';
import Todo from './models/Todo';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Todo/>
      </div>
    );
  }
}

export default App;
