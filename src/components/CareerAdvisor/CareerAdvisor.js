import React from 'react';
import './CareerAdvisor.css';
import { FaStar } from 'react-icons/fa';

const CareerAdvisor = () => {
  return (
    <div className="career-advisor">
      <div className="title">
        <FaStar className="icon" /> TMaaS Assistant
      </div>
      <div className="description">
        Ask a question about your digital transformation journey to get personalised insights and recommendations <br /> from our AI-powered Transformation as a service Assistant.
      </div>
      <div className="input-wrapper">
        <input type="text" placeholder="How can I..." className="input-field" />
        <button className="submit-button">
          <span className="button-icon">➤</span>
        </button>
      </div>
    </div>
  );
};

export default CareerAdvisor;

