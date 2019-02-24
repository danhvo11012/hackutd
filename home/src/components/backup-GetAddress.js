import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Zillow} from './Zillow';

class GetAddress extends React.Component {
  constructor(props) {
     
    super(props);
    this.state = {zipCode: '',
                  cityName: '',
                  stateName: '' };

    this.handleChangezipCode = this.handleChangezipCode.bind(this);
    this.handleChangecityName = this.handleChangecityName.bind(this);
    this.handleChangestateName = this.handleChangestateName.bind(this);
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangezipCode(event) {
    this.setState({zipCode: event.target.value});
  }

  handleChangecityName(event) {                                                 
    this.setState({cityName: event.target.value});                               
  }                                                                             

  handleChangestateName(event) {                                                 
    this.setState({stateName: event.target.value});                               
  }                                                                             
      

  handleSubmit(event) {
    
   
    Zillow(this.state.zipCode, this.state.cityName, this.state.stateName); 
    
    alert('Entered: ' + 'zip code: ' + this.state.zipCode + 
            ', city: ' + this.state.cityName +  
            ', state: ' + this.state.stateName);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <b> Zip Code   :</b>   
          <input type="text" name={this.state.value} onChange={this.handleChangezipCode} />
        </label>
        <label>                                                                 
          <b> City   :</b>                                         
          <input type="text" name={this.state.value} onChange={this.handleChangecityName} />
        </label>   
        <label>                                                                 
          <b> State   :</b>                                          
          <input type="text" name={this.state.value} onChange={this.handleChangestateName} />
        </label> 
        <input type="submit" value="Search" />
      </form>
    );
  }
}

ReactDOM.render(
  <GetAddress />,
  document.getElementById('root')
);

export default GetAddress;
