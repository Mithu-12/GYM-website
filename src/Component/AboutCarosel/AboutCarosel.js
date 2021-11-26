
import React from 'react';
import { Carousel } from 'react-bootstrap';
import './AboutCarosel.css'

const AboutCarosel = () => {
    return (
        <Carousel className='container my-5'>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 caroselImg"
            src="https://static.seattletimes.com/wp-content/uploads/2020/05/urn-publicid-ap-org-6dbd9ad370add2ba299c7da46c25004fVirus_Outbreak_Florida_39312-780x519.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Cardiovascular machines</h3>
            <p>We want to help you achieve your health and fitness goals, and transform your body, by offering the best fitness equipment and knowledge you need.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100 caroselImg"
            src="https://images.unsplash.com/photo-1540496905036-5937c10647cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGhlJTIwZ3ltfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Rowing machine (aka rower)</h3>
            <p>We want to help you achieve your health and fitness goals, and transform your body, by offering the best fitness equipment and knowledge you need.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 caroselImg"
            src="https://img.freepik.com/free-photo/beautiful-young-sporty-couple-training-workout-gym-together_155003-42101.jpg?size=626&ext=jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Recumbent exercise bike</h3>
            <p>We want to help you achieve your health and fitness goals, and transform your body, by offering the best fitness equipment and knowledge you need.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default AboutCarosel;