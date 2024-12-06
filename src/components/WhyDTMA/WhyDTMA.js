import React from 'react';
import './WhyDTMA.css'; 

const WhyDTMA = () => {
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
          <img src="/images/academy-image.png" alt="Academy" className="why-dtma-image1" />
          <div className="why-dtma-text1">
            <h2>Digital Cognitive Organisations (DCO)  <br></br>will dominate in the Digital Economy</h2>
            <p>Where do you stand in your Digital Journey?</p>
            <button className="cta-button1">  Take an Assessment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyDTMA;
