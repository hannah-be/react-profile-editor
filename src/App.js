import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to my React Profile Editor</h1>
        </header>
        <br />
        <img src="https://randomuser.me/api/portraits/men/18.jpg" />
        <p className="App-intro">Name: Bruce Springsteen</p>
      </div>
    );
  }
}

export default App;
