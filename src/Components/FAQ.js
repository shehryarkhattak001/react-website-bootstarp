import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Footer from './Footer'


const FAQ = (props) => {
    return (
        <>
            <div className='container'>

                <Accordion className='mt-5'>
                    <Accordion.Item>
                        <Accordion.Header className='align-item-center'>What is the full form of props ?</Accordion.Header>
                        <Accordion.Body>
                            Props stand for properties..
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item>
                        <Accordion.Header>For which purpose we use props in react js ?</Accordion.Header>
                        <Accordion.Body>
                            Because it help us to transfer Components from one to another easily...
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item>
                        <Accordion.Header>Is props works in react-bootstrap..</Accordion.Header>
                        <Accordion.Body>
                            Yes, It works in react-bootstrap..
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>



            </div>
            <Footer />

        </>
    )
}
export default FAQ