import './SingleService.css'
import React from 'react';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import {  Card } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const SingleService = () => {
    const {id} = useParams();
    const [singleService, setSingleService] = useState([]);
    const [singleServiceShow, setSingleServiceShow] = useState({});
    useEffect(() => {
        fetch("/generated.json")
            .then(res => res.json())
            .then(data => setSingleService(data))
    }, [])
    useEffect(() => {
        const foundSingleService = singleService.find(single => single.id === id)
        setSingleServiceShow(foundSingleService)
    }, [singleService])
    return (
      <div className="d-flex className='cardWidth'">
        <div className='align-items-center justify-content-center'>
    <Card className='cardWidth'  style={{ width: '28rem' }}>
    <Card.Img variant="top" src={singleServiceShow?.img} />
    <Card.Body>
    <Card.Title>{singleServiceShow?.name}</Card.Title>
    <Card.Text>
    <span className='text-danger'>Description :</span> {singleServiceShow?.discription}
    </Card.Text>
    <NavLink to="/services">
                  <button className='btn btn-primary'>Back</button>
                  </NavLink>
        </Card.Body>
      </Card>
        </div>
        </div>
    );
};

export default SingleService;

