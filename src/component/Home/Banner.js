import React from 'react';
import './Banner.css'; // Import custom CSS

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <h1 className="banner-text">
          The <span className="highlight">first choice</span> in <span className="highlight neonatology">neonatology</span> medical care
        </h1>
        <div className="buttons-container">
          <button className="btn about-us">About Us</button>
          <button className="btn services">Services</button>
        </div>
        <div className="schedule-container">
          {/* <hr className="divider" /> */}
          <div className="schedule-texts">
            <span className="schedule-text">Make an Appointment</span>
            <hr className="vertical-divider" />
            <span className="schedule-text">Online Schedule</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
