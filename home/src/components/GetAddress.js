import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class GetAddress extends React.Component {
  constructor(props) {
     
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Entered: ' + 'zip code: ' + this.state.value + ', city: ' + this.cityName
            + ', state: ' + this.stateName);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <b> Zip Code   :</b>   
          <input type="text" zipCode={this.state.value} onChange={this.handleChange} />
        </label>
        <label>                                                                 
          <b> City   :</b>                                          
          <input type="text" cityName={this.state.value} onChange={this.handleChange} />
        </label>   
        <label>                                                                 
          <b> State   :</b>                                          
          <input type="text" stateName={this.state.value} onChange={this.handleChange} />
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
