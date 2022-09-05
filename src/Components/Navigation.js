import React from "react";
import {Link} from "react-router-dom";
import {Container,Navbar,Nav} from 'react-bootstrap';


const Navigation = () => {
    return (
    
        <div>
        <Navbar bg="dark" variant="dark"> 
        <Container>
          <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand> 
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>  
          <Nav.Link as={Link} to="/services">Services</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>

        
          </Container>
        
       </Navbar> 
      

      </div>
      
        
    )
}

export default Navigation