import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './ServiceDetail.css'
import { Link } from 'react-router-dom';

const ServiceUiDetail = props => {
  const {id, name, img, discription } = props.service;
  return (
    <div>
      <Col className='mx-auto '>
        <Card className='card-details cardHeight '>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              <span className='text-danger'>Description :</span> {discription}
            </Card.Text>
            <Link to={`/singleService/${id}`}><button className='btn btn-primary'>Details</button></Link>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default ServiceUiDetail;