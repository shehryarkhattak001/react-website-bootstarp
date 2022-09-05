import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link} from "react-router-dom";
import {Nav} from 'react-bootstrap';

const Contact = () => {
    return (

        <div className='bg-light'>


           <div className='container my-4'>
                <div className='row'>
                    <h1 className='text-center'>Contact</h1>
                </div>
            </div>





        <div className=' d-grid justify-content-center align-items-center'>
            <Form className='bg-info rounded p-4 p-sm-6'>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control type='email' placeholder='Enter Email' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Enter Password' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                <Form.Check type='checkbox' label='Remember Me'/>

            </Form.Group>
            <Button variant='primary' type='submit'>
            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
            </Button>
            </Form>
        </div>




        </div>
    )
}

export default Contact
