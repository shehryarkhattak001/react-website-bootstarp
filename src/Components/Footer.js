import React from 'react'
import FAQ from './FAQ'
import Privacyandpolicy from './Privacyandpolicy';
import { Link } from "react-router-dom";
import { Nav } from 'react-bootstrap';

function Footer() {
    return (
        <div>


            <footer className="page-footer font-small blue mt-4 pt-4 bg-dark text-light">
                <div className="container-fluid text-center text-md-left">
                    <div className="row">
                        <div className="col-md-6 mt-md-0 mt-3">
                            <h5 className="text-uppercase">Footer Content</h5>
                            <p>Here you can use rows and columns to organize your footer content.</p>
                        </div>

                        <hr className=" w-100 d-md-none pb-0" />

                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase">Links</h5>
                            <ul className="list-unstyled">
                                <Nav.Link as={Link} to="/faq">FAQ's</Nav.Link>
                                <Nav.Link as={Link} to="/privacyandpolicy">Privacy and Policy</Nav.Link>
                                <li><a href="#!">Link 3</a></li>
                                <li><a href="#!">Link 4</a></li>
                            </ul>
                        </div>

                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase">Quick Links</h5>
                            <ul className="list-unstyled">
                                <li><a href="#!">Link 1</a></li>
                                <li><a href="#!">Link 2</a></li>
                                <li><a href="#!">Link 3</a></li>
                                <li><a href="#!">Link 4</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-copyright text-center py-3">© 2022 Copyright:

                </div>

            </footer>

            <FAQ />
            <Privacyandpolicy />


        </div>
    )
}
export default Footer