import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (

        <p className="App-intro">
          <span className="input-wrap">
            <input type="text" className="App-input" placeholder="What needs to be done?"/>
          </span>
        </p>

    );
  }
}

export default App;
