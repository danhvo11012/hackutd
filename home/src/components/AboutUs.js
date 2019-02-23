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
                            <Col sm={{ size: 6, offset: 3 }}>                   
                                <AboutCardTitle/>                               
                                <hr></hr>                                       
                                <AboutCardContent/>                             
                            </Col>                                              
                        </Row>                                                  
                        <Row className="row-padding">                           
                            <SkillCard                                          
                                icon="fa fa-university"                         
                                title="Students"                                 
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
                I'm currently a student at the University of Texas at Dallas.   
                Previously, I've worked to build enterprise level solutions     
                for companies in both the public and private sectors.           
            </h4>                                                               
        </div>                                                                  
    );                                                                          
}                              

function AboutCardTitle(props) {                                                
    return (                                                                    
        <div>                                                                   
            <h2>about me</h2>                                                   
        </div>                                                                  
    );                                                                          
}                                                                               
                                                          
                                                                                
function SkillCard(props) {                                                     
    return (                                                                    
        <Col sm={{ size: 3 }}>                                                  
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
