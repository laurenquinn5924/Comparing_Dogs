import React, { Component } from 'react';
import './App.css';
import Dogs from './components/dogs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dogs />
      </div>
    );
  }
}

export default App;
