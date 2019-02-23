import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import AboutUs from './components/AboutUs';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <a>
          Learn React
         </a>
        </header>
        <AboutUs/>
      </div>
    );
  }
}

export default App;
