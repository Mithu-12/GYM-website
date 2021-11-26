import React from 'react';

import './About.css'
import AboutCarosel from '../AboutCarosel/AboutCarosel';


const About = () => {
    
    return (
        <div className='mt-5'>
            <h1 className='text-center'>ABOUT <span className='text-danger'>US</span></h1>
            <div className="row d-flex assets align-items-center justify-content-center my-5">
                <div className="col-md-3 my-5">
                    <div className='element'> <h1><i class="fas fa-user"></i></h1>
                        <h2>320+</h2>
                        <h2>Total Student</h2>
                        
                </div>
            </div>
                <div className="col-md-3">
                <div className='element'> <h1><i class="fas fa-dumbbell"></i></h1>
                        <h2>12</h2>
                        <h2>Upright bike</h2>
                        
                </div>
            </div>
                <div className="col-md-3">
                <div className='element'> <h1><i class="fas fa-person-booth"></i></h1>
                        <h2>24</h2>
                        <h2>Stair mill</h2>
                </div>
            </div>
                <div className="col-md-3">
                <div className='element'> <h1><i class="fas fa-chalkboard-teacher"></i></h1>
                        <h2>15</h2>
                        <h2>Trainers</h2>
                        
                    </div>
            </div>
          
            </div>
            <AboutCarosel></AboutCarosel>
        </div>
    );
};

export default About;