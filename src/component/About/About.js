import React from 'react';
import './About.css';
import hero from '../../img/hero_about.jpg';
import vision from '../../img/vision.png';
import Wave from './Wave';
import ServiceA from './ServiceA';
import FunA from './FunA';
import Partners from './Partners';
import WorkingA from './WorkingA';
import FaqComponent from './FaqComponent';

const About = () => {
    return (
        <div>
            {/* Hero Image Section */}
            <div className="about-us-container">
                <img
                    src={hero}
                    alt="Hero"
                    className="background-image"
                />
                <div className="overlay-text">
                    <h1>Your wellbeing is our priority</h1>
                    <p>Sloane Virtual Hospital delivers comprehensive online healthcare, offering video consultations, digital prescriptions, medication delivery, and diagnostic services, all supported by a strong network of medical professionals. </p>
                    <div className="flex-container">
                        <div className="flex-item">
                            <span>Support Line 24/7</span>
                            <span>88 700 600</span>
                        </div>
                        <div className="line"></div>
                        <div className="flex-item">
                            <span>Online Schedule</span>
                            <span>Book here</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Vision Section */}
            <Wave/>
            <div className="vision-section">
                <div className="vision-image">
                    <img src={vision} alt="Vision" />
                </div>
                <div className="vision-text">
                    <h2>Welcome to Sloane Virtual Hospital, where innovative online healthcare meets convenience and care. </h2>
                    <p>Sloane Virtual Hospital delivers comprehensive online healthcare, offering video consultations, digital prescriptions, medication delivery, and diagnostic services, all supported by a strong network of medical professionals. </p>
                    <h2>Our Mission</h2>
                    <p>To revolutionize the healthcare industry by transitioning traditional physical healthcare services to a comprehensive online platform, ensuring that quality medical care is accessible to everyone from the comfort of their homes.</p>
                    <h2>Our Vision</h2>
                    <p>To simplify the patient journey by offering a seamless, virtual healthcare experience that encompasses diagnosis, prescription, medication delivery, and follow-up consultations. Our mission is to eliminate the barriers to healthcare access, reduce patient inconvenience, and provide timely medical interventions. </p>
                </div>

            </div>

            {/* ServiceA Component */}
            {/* <ServiceA/> */}
            {/* <FunA/> */}
            {/* <Partners/> */}
            <WorkingA/>
            <FaqComponent/>
        </div>
        
    );
};

export default About;
