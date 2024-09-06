import React from 'react';
import './About.css';
import hero from '../../img/heroAbout 1.png';
import visionImg from '../../img/SM891296.png';
import Wave from './Wave';
import ServiceA from './ServiceA';
import FunA from './FunA';
import Partners from './Partners';
import WorkingA from './WorkingA';
import FaqComponent from './FaqComponent';
import MissionVisionIcon from '../svg/MissionVisionIcon';
import Mission from '../svg/Mission';
 
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
                    <p>Sloane Virtual Hospital delivers comprehensive online healthcare, offering video consultations, digital prescriptions, medication delivery, and diagnostic services, all supported by a strong network of medical professionals.</p>
                    <div className="flex-container">
                        <div className="flex-item">
                            <p>Support Line 24/7 <br/>
                            <span>88 700 600</span>
                            </p>
                        </div>
                        <div className="line"></div>
                        <div className="flex-item">
                            <p>Online Schedule <br/>
                            <span>Book here</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
 
            {/* Vision Section */}
            <Wave />
            <div className="vision-section">
                <div className="vision-image">
                    <img src={visionImg} alt="Vision" />
                </div>
                <div className="vision-text">
                    <h2>
                        Welcome to Sloane Virtual Hospital, where innovative online healthcare meets convenience and care.
                    </h2>
                    <h3>
                        <Mission /> Our Mission
                    </h3>
                    <p>To revolutionize the healthcare industry by transitioning traditional physical healthcare services to a comprehensive online platform, ensuring that quality medical care is accessible to everyone from the comfort of their homes.</p>
                    <h3>
                        <MissionVisionIcon /> Our Vision
                    </h3>
                    <p>To simplify the patient journey by offering a seamless, virtual healthcare experience that encompasses diagnosis, prescription, medication delivery, and follow-up consultations. Our mission is to eliminate the barriers to healthcare access, reduce patient inconvenience, and provide timely medical interventions.</p>
                </div>
            </div>
 
            {/* ServiceA Component */}
            {/* <ServiceA/> */}
            {/* <FunA/> */}
            {/* <Partners/> */}
            <WorkingA />
            <FaqComponent />
        </div>
    );
};
 
export default About;