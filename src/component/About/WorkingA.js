import React from 'react';
import './WorkingA.css'; // Import the custom CSS

function WorkingA() {
  // Sample data for each card
  const cardData = [
    {
      imageSrc: 'path/to/image1.jpg',
      heading: 'Select Expert Doctor',
      text: 'There are many variations of passage of available, but the majority have suffered.',
    },
    {
      imageSrc: 'path/to/image2.jpg',
      heading: 'Make Appointment',
      text: 'There are many variations of passage of available, but the majority have suffered.',
    },
    {
      imageSrc: 'path/to/image3.jpg',
      heading: 'Get Consultation',
      text: 'There are many variations of passage of available, but the majority have suffered.',
    },
    {
      imageSrc: 'path/to/image4.jpg',
      heading: 'Get Care & Relief',
      text: 'There are many variations of passage of available, but the majority have suffered.',
    },
  ];

  return (
    <div className="workingA-container">
      <span className="custom-span">How Does It Works?</span>
      <h2 className="custom-heading">Our Working Process</h2>

      <div className="card-container">
        {cardData.map((card, index) => (
          <div key={index} className="custom-card">
            <div className="card-image">
              <img src={card.imageSrc} alt={`Card ${index + 1}`} />
            </div>
            <h3 className="card-heading">{card.heading}</h3>
            <p className="card-text">{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkingA;
