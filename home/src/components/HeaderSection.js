import React, { Component } from 'react';                                       
import '../styles/HeaderSection.css';                                           
                                                                                
class HeaderSection extends Component {                                         
    constructor(props) {                                                        
        super(props);                                                           
        this.state = {};                                                        
    }                                                                           
    render() {                                                                  
        return (                                                                
            <div>                                                               
                <div className="introduction"><b> and I am a </b></div>
                <h1>                                                            
                
                    provides useful evaluation about the neighbor              
                    area, given a specific address entered by customer.
  
                </h1>                                                           
                <h1>                                                            
                    analyst and student                                         
                </h1>                                                           
            </div>                                                              
        )                                                                       
    }                                                                           
}                                                                               
                                                                                
export default HeaderSection;  
