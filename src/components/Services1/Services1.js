import React from 'react';
import './Services1.css'; // CSS for the styling

const Services1 = () => {
  return (
    <div className="services1-wrapper">
      <div className="services1-header">
        <h2>Why is this the right approach for your organisation to Digitalise?</h2>
        <p>We accelerate DCOs with easy to implement DBP Blueprints.</p>
      </div>
      
      <div className="services1-container">
        <div className="service1-item">
          <img src={`${process.env.PUBLIC_URL}/images/apps.png`} alt="Comprehensive Solutions Icon" />
          <h3>Comprehensive Solutions</h3>
          <p>Access a wide range of digital transformation services all under one roof, simplifying your journey to modernization.</p>
        </div>
        
        <div className="service1-item">
          <img src={`${process.env.PUBLIC_URL}/images/sort-ascending-2.png`} alt="End to End Transformation Icon" />
          <h3>End to End Transformation</h3>
          <p>We guide you through every step of your digital transformation, ensuring a smooth transition from planning to realization.</p>
        </div>

        <div className="service1-item">
          <img src={`${process.env.PUBLIC_URL}/images/adjustments-alt.png`} alt="Structured Yet Flexible Icon" />
          <h3>Structured Yet Flexible</h3>
          <p>Our architecture-based agile methodology adapts to your evolving needs, providing a robust framework for sustainable growth.</p>
        </div>

        <div className="service1-item">
          <img src={`${process.env.PUBLIC_URL}/images/brand-asana.png`} alt="AI-Powered Insights Icon" />
          <h3>AI-Powered Insights</h3>
          <p>Harness the power of AI to optimize service selection, and drive informed decision-making throughout your transformation.</p>
        </div>

        <div className="service1-item">
          <img src={`${process.env.PUBLIC_URL}/images/text-wrap-disabled.png`} alt="Affordable Start Icon" />
          <h3>Affordable Start</h3>
          <p>Begin your digital transformation journey with minimal investment, tailored to suit businesses of all sizes.</p>
        </div>
      </div>
    </div>
  );
};

export default Services1;
