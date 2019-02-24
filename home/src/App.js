// App.js
import Geocode from "react-geocode";

import React, { Component } from 'react';
import './styles/App.css';

import AboutUs from './components/AboutUs';
import GetAddress from './components/GetAddress';
import HeaderSection from './components/HeaderSection';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header Header-background">
         <a>
            <b> 
                <font size = "50"> 
                     H0ME
                </font>
            </b> 
         </a>
        </header>
        <GetAddress/>
        <AboutUs/>
      </div>
    );
  }
}

export default App;
