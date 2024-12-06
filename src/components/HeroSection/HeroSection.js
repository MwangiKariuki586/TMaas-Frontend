import React from 'react';
import './HeroSection.css';  

const Hero = () => {
    return (
        <div className="hero-container">
            <img src={process.env.PUBLIC_URL + 'images/Hero_image.png'} alt="Hero" className="hero-image" />
            <div className="hero-overlay">
        </div>

        <div className="hero-text">
            <h1>AI-Powered, Customizable Digital Transformation</h1>
            <p>We accelerate Digital Cognitive Organisations(DCOs) with easy to implement Digital Business Platform blueprints for organisations of all sizes.</p>
            <button className="btn-signin">Get Started with AI</button>
            <button className="btn-get-started">Watch Product Tour</button>
        </div>
        </div>
    );
}

export default Hero;