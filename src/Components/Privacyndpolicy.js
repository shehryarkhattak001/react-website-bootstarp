import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Footer from './Footer'



function Privacyndpolicy() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className='container mt-5'>
                <Button variant="primary" onClick={handleShow}>
                    Click Here to check Privacy
                </Button>

                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Form</Modal.Title>

                    </Modal.Header>
                    <Modal.Body>


                        <form class="form ">
                            <div class="form-group text-dark ">
                                <label for="firstname ">First Name</label>
                                <input type="text " class="form-control " placeholder="First Name " />
                            </div>

                            <div class="form-group text-dark ">
                                <label for="email ">Email</label>
                                <input type="text " class="form-control " id="email " placeholder="Enter your E-mail " />
                            </div>
                            <div class="form-group text-dark ">
                                <label for="password ">Password</label>
                                <input type="text " class="form-control " id="password " placeholder="Enter your Password " />
                            </div>
                            <div class="form-group text-dark ">
                                <label for="confirm password ">Confirm Password</label>
                                <input type="text " class="form-control " id="confirm password " placeholder="Confirm your Password " />
                            </div>

                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary">Log In</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            <Footer />
        </>
    );
}

export default Privacyndpolicy