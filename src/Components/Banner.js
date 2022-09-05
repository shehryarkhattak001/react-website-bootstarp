import React from 'react';
import BannerImg1 from '../assets/img/BannerImg1.jpg'
import BannerImg2 from '../assets/img/BannerImg2.jpg'
import BannerImg3 from '../assets/img/BannerImg3.jpg'
import Carousel from 'react-bootstrap/Carousel'


const Banner = () =>{
    return(
        <div>
      <Carousel>
      <Carousel.Item>
        <img
        height= {750}
        width= {450}
          className="d-block w-100 "
          src={BannerImg1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        height= {750}
        width= {450}
          className="d-block w-100"
          src={BannerImg2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        height= {750}
        width= {450}
          className="d-block w-100"
          src={BannerImg3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
           
            </div>
                   
    )
}
export default Banner