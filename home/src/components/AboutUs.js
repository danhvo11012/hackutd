// /src/components/AboutUs.js                                              
import React, { Component } from 'react';                                       
import {                                                                        
    Container,                                                                  
    Row,                                                                        
    Col,                                                                        
    Card,                                                                       
    CardText,                                                                   
    CardBody,                                                                   
    CardTitle } from 'reactstrap';                                              
import '../styles/AboutUs.css';                                            
import 'bootstrap/dist/css/bootstrap.min.css';                                  
import 'font-awesome/css/font-awesome.min.css';  

class AboutUs extends Component {                                          
    render() {                                                                  
        return (                                                                
            <div className="about-section">                                     
                <div className="block-padding grey-section">                    
                    <Container>                                                 
                        <Row className="row-padding">                           
                            <Col sm={{ size: 6, offset: 1 }}>                   
                                <AboutCardTitle/>                               
                                <hr></hr>                                       
                                <AboutCardContent/>                             
                            </Col>                                              
                        </Row>                                                  
                        <Row className="row-padding">                           
                            <SkillCard                                          
                                icon="fa fa-university"                         
                                title= "About the Developers"                                 
                                text="We are currently studying computer science at UTD."/>      
                        </Row>                                                  
                    </Container>                                                
                </div>                                                          
            </div>                                                              
        )                                                                       
    }                                                                           
}  

function AboutCardContent(props) {                                              
    return (                                                                    
        <div>                                                                   
            <h4>                                                                
                H0ME provides useful evaluation about the neighbor 
                area, given a specific address entered by customer.  
            </h4>                                                               
        </div>                                                                  
    );                                                                          
}                              

function AboutCardTitle(props) {                                                
    return (                                                                    
        <div>                                                                   
            <h2>about H0ME</h2>                                                   
        </div>                                                                  
    );                                                                          
}                                                                               
                                                          
                                                                                
function SkillCard(props) {                                                     
    return (                                                                    
        <Col sm={{ size: 6 }}>                                                  
            <Card className="about-card">                                       
                <CardBody>                                                      
                    <i className={props.icon}></i>                              
                    <CardTitle>{props.title}</CardTitle>                        
                    <CardText>{props.text}</CardText>                           
                </CardBody>                                                     
            </Card>                                                             
        </Col>                                                                  
    );                                                                          
}  
                                                                               
export default AboutUs;      
