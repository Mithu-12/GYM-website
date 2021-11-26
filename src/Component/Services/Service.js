import './Services.css';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import ServiceDetail from '../ServiceDetail/ServiceDetail';


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./generated.json')
            .then(res => res.json())
            .then(data => setServices(data))
    },[])
    return (
        <div>
            <div className="container my-5 d-block" >
                <h1 className='text-center'>OUR<span className='text-danger'> SERVICES</span></h1>
            <Row xs={1} md={3} className="g-4 my-5">
                {
                    services.map(service => <ServiceDetail
                        service={service}
                        key={service.id}
                    ></ServiceDetail>)
                }
            </Row>
            </div>
        </div>
    );
};

export default Services;