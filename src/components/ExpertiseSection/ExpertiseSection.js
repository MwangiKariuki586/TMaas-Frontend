import React from 'react';
import './ExpertiseSection.css'; // Assuming you create a CSS file for styling

const ExpertiseSection = () => {
  return (
    <div className="expertise-section">
      <div className="text-content">
      {/* <img src="/images/trophy-icon.png" alt="Expertise Icon" className="icon" /> */}
        <h2>DCOs orchestrate Human and Machine <br></br>Intelligence</h2>
        <p>
          What are quick AI opportunities for your organisation?
        </p>
        <button className="cta-button1">  Take a quick test</button>
      </div>

      <div className="image-content">
      <img src="/images/academy-image2.png" alt="Expertise Img" className="expertise-image" />
      </div>
    </div>
  );
};

export default ExpertiseSection;
