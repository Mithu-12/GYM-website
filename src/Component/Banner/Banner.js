import './Banner.css';
import React from 'react';

const Banner = () => {
    return (
        <div className="banner-container mb-5">
        <div className="">
      <div className="row d-flex banner align-items-center justify-content-center">
        <div className="col-md-6">
              <div>
              <div className='ms-4'>
          <h1 className="title">
                  Perfect Workout <br />
                  Coach For <span ClassName="text">Body Shape</span>
          </h1>
          <h5 className="text-white mt-3 textWight">
          Quisque leo augue, lobortis ac tellus nec, posuere ultricies nulla. Praesent massa odio, pellentesque in consectetur quis, volutpat sit amet erat.
          </h5>
          <button className="mt-3  about-btn">About Us</button>         
          </div>
          </div>
        </div>
        <div className="col-md-6"></div>
      </div>
    </div>
  </div>
    );
};

export default Banner;