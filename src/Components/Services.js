import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Cards from './Cards';

const Services = () => {
    return (

        <div className='bg-light border-top'>
            <div className='container my-4'>
                <div className='row'>
                    <h1 className='text-center'>Services</h1>
                    <p className='text-xl-center '>This is the Services</p>
                </div>
            </div>

            <div className='container my-4'>
                <Cards />

            </div>



            <div className='mt-4 px-4 my-3'>
                <div className='container col-sm-1'>
                    <div className='row'>
                        <button className='btn btn-secondary' type='button'><Nav.Link as={Link} to="/servicesPage">Services</Nav.Link></button>
                    </div>
                </div>
            </div>




        </div>


    )
}
export default Services