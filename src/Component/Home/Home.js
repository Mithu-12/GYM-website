import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Services from './../Services/Service';
import Offer from './../Offer/Offer';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Offer></Offer>
        </div>
    );
};

export default Home;