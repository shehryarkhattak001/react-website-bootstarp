import React from 'react';
import { Card, Button } from 'react-bootstrap';



const Cards = () => {
    return (
        <>
            <div className='row my-4'>
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



        </>
    )
}

export default Cards 