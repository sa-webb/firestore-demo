import React, { Component } from 'react';
import './App.css';

// eslint-disable-next-line
import User from '.models/User';
import Merchant from '.models/Merchant';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Merchant/>
      </div>
    );
  }
}

export default App;
