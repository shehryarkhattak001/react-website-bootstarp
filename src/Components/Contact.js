import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import {Link} from "react-router-dom";
import {Nav} from 'react-bootstrap';

// import {label, input} from 'react-bootstrap'

const Contact = () => {
    return (

        <div className='bg-light'>


         
            <div className='container col-md-4'>


            <section id="contact" class="bg-colors justify-content-center align-items-center">
        <div class="container ">
            <h2 class="text-center pt-5 font-weight-bold ">Contact Us</h2>
            <div class="pb-5">
                <div class="container ">
                    <form class="form ">
                        <div class="form-group my-3 pt-5 pb-3 text-dark ">
                            <label for="firstname ">First Name</label>
                            <input type="text " class="form-control " placeholder="First Name "/>
                        </div>
                        <div class="form-group my-3 py-2 text-dark ">
                            <label for="lastname ">Last Name</label>
                            <input type="text " class="form-control " id="lastname " placeholder="Last Name "/>
                        </div>
                        <div class="form-group my-3 py-2 text-dark ">
                            <label for="email ">Email</label>
                            <input type="text " class="form-control " id="email " placeholder="Enter your E-mail "/>
                        </div>
                        <button className='btn btn-secondary' type='button'><Nav.Link as={Link} to="/contact">Contact</Nav.Link></button>
                    </form>

                </div>
            </div>
        </div>
    </section>
    </div>

        </div>
    )
}

export default Contact
