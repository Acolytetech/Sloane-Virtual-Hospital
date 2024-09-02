import React from 'react';
import './About.css';
import hero from '../../img/hero_about.jpg';
import vision from '../../img/vision.png'
import Wave from './Wave';

const About = () => {
    return (
        <div>
            {/* Hero Image Section */}
            <div className="about-us-container">
                <img
                    src={hero}
                    alt="About Us"
                    className="background-image"
                />
                    

                <div className="overlay-text">
                    <h1>Your wellbeing is our priority</h1>
                    <p>We are dedicated to providing exceptional service and quality products.</p>
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
                    <img
                        src={vision}


                    />
                </div>
                <div className="vision-text">
                    <h2>About Us</h2>
                    <p>We offer a comprehensive online healthcare services, enabling patients to consult doctors via video calls, receive digital prescriptions, and order medications through its app. The platform facilitates diagnostic services by allowing patients to book appointments at centers or arrange home sample collections. Follow-up consultations and continuous health monitoring ensure ongoing patient care. The company partners with medical professionals, diagnostic centers, and pharmacies, creating a seamless, accessible healthcare network. Key activities include digital marketing, customer engagement, and expanding the network to maintain high service quality and scale the business. </p>
                    <h2>Our Mission</h2>
                    <p>To revolutionize the healthcare industry by transitioning traditional physical healthcare services to a comprehensive online platform, ensuring that quality medical care is accessible
                    to everyone from the comfort of their homes.</p>
                    <h2>Our Vision</h2>
                    <p>To simplify the patient journey by offering a seamless, virtual healthcare experience that encompasses diagnosis, prescription, medication delivery, and follow- up consultations. Our mission is to eliminate the barriers to healthcare access, reduce patient inconvenience, interventions.</p>
                </div>
            </div>

            <div className="testimonial-section " >

                <div className="testimonial-text">
                    <h2>Great Place of Medical Hospital Center</h2>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, injected humour, or randomised words.</p>
                    <h2>Our Mission</h2>
                    <p>If you are going to use a passage of Ipsum, you need to be sure there isn't anything hidden.</p>
                    <h2>Our Vision</h2>
                    <p>If you are going to use a passage of Ipsum, you need to be sure there isn't anything hidden.</p>
                </div>

                <div className='testimonial-cards'>
                    <div className='testimonial-card card1'>
                        <h1>hello</h1>
                    </div>
                    <div className='testimonial-card card2'>
                        <h1>hello</h1>

                    </div>
                    <div className='testimonial-card card3'>
                        <h1>hello</h1>

                    </div>
                    <div className='testimonial-card card4'>
                        <h1>hello</h1>

                    </div>
                </div>
            </div>

            {/* review */}


        </div>
    );
};

export default About;
