import React from 'react';
import './LearningPlatform1.css'; 

const LearningPlatform1 = () => {
  return (
    <div className="why-dtma-container">
      {/* <div className="why-dtma-header">
        <h1>More than just a learning platform</h1>
        <p>
        Establish yourself as a  forward-thinking professional who excels in digital transformation <br></br>
        by sharing your badges, certificates, and projects.
        </p>
      </div> */}
      
      <div className="why-dtma-content1">
        <div className="why-dtma-section1">
          <img src="/images/image-5.png" alt="Academy" className="why-dtma-image1" />
          <div className="why-dtma-text1">
            <h2>Every Technology Solutions should be <br></br>part of your DBP</h2>
            <p>What is a DBP and how do you start your DBP?</p>
            <button className="cta-button1">  Find out More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPlatform1;
