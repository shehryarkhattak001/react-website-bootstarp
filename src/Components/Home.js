import React from 'react';
import Banner from './Banner';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import {Link} from "react-router-dom";
import {Nav} from 'react-bootstrap';


const Home = () =>{
    return(
<div>

        <div className='bg-light border-top'>
            <Banner />

            <div className='container my-4'>
                <div className='row'>
                    <h1 className='text-center'>Services</h1>

                </div>
            </div>

            <div className='container my-4'>
                       
                <div className='row'>
                    <div className='col-md-4' >
                    <Card>
                      <Card.Img variant="top" src="https://picsum.photos/200/150" />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the
                          bulk of the card's content.
                        </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                    
                        </div>
                        <div className='col-md-4' >
                        <Card>
                           <Card.Img variant="top" src="https://picsum.photos/200/150" />
                           <Card.Body>
                             <Card.Title>Card Title</Card.Title>
                             <Card.Text>
                               Some quick example text to build on the card title and make up the
                               bulk of the card's content.
                             </Card.Text>
                             <Button variant="primary">Go somewhere</Button>
                           </Card.Body>
                         </Card>
                        </div>
                        <div className='col-md-4' >
                        <Card >
                        <Card.Img variant="top" src="https://picsum.photos/200/150" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                         </Card.Text>
                           <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        </Card>
                        </div>
                    </div>
                </div>

          


            <div className='container my-4 col-sm-1'>
                <div className='row'>
                <button className='btn btn-secondary' type='button'><Nav.Link as={Link} to="/services">Services</Nav.Link></button>

                </div>
            </div>

            
            </div>

            <About />
            <Contact />
            <Footer />
            </div>

           






      

            
       

            
                   
    )
}
export default Home