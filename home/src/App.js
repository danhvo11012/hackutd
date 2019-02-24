// App.js
import React, { Component } from 'react';
import './styles/App.css';
import axios from 'axios'
import AboutUs from './components/AboutUs';
import GetAddress from './components/GetAddress';
import HeaderSection from './components/HeaderSection';

class App extends Component {
// ==========================================
   constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch('http://www.zillow.com/webservice/GetRegionChildren.htm?zws-id=X1-ZWz1gxccka31mz_2t4xn&state=wa&city=seattle&childtype=neighborhood', {mode: 'no-cors'})
      .then(response => {
          const data = response.data.results;
           this.setState({data})
      })
      .catch(error => {
        console.log(error);
      })
  }
//=============================================
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
        { this.state.data.map((item, index) => <UserList key={index} {...item} />) }
      </div>
    );
  }
}

export default App;


const UserList = (props) => (         
    <p><strong>name : </strong> {props.name.first}</p>
)
