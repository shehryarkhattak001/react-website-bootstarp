import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import BannerImg4 from '../assets/img/BannerImg4.jpg'
import {Link} from "react-router-dom";
import {Nav} from 'react-bootstrap';



const About = () =>{
    return(
        <div>
            

        <div className='container my-4'>
                <div className='row'>
                    <h1 className='text-center'>About</h1>

                </div>
            </div>


<div>

      <Container>
        <Row className='px-4 my-5'>


        <Col sm={5}>
                <Image src={BannerImg4} fluid rounded />

            </Col>
            

            <Col sm={5}>

                <h1 className='font-weight-light'>Hello There!!!</h1>
                <p className='mt-4'>
                    Computer programming is the process of performing a particular computation, usually by designing and building an executable computer program. Programming involves task such as analysis, generating algorithms, profiling algorithms.Computer programming is the process of performing a particular computation, usually by designing and building an executable computer program. Programming involves task such as analysis, generating algorithms, profiling algorithms.
                    
                </p>


                <Button variant="outline-primary"><Nav.Link as={Link} to="/about">About</Nav.Link></Button>
            </Col>

            

            



            
            </Row>  
      </Container>



     

       
    




        
      </div>


        </div>
    
        
    )
}
export default About