import React from 'react';
import './Footer.css'; // Importing the CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="newsletter-section">
          <img src="/images/DQ-logo.png" alt="Qatalyst Logo" className="footer-logo" />
          <p>Subscribe to our newsletter to receive the latest insights on Digital Transformation!</p>
          <div className="newsletter-input">
            <input type="email" placeholder="Your email" />
            <button className="subscribe-button">Subscribe</button>
          </div>
        </div>
        
        <div className="links-section">
          <div className="quick-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/courses">Explore Courses</a></li>
              <li><a href="/resources">Resources</a></li>
              <li><a href="/account">Your Account</a></li>
            </ul>
          </div>
          
          <div className="know-us">
            <h4>Get to Know Us</h4>
            <ul>
              <li><a href="/about">About DTMA</a></li>
              <li><a href="/updates">Updates <span className="new-badge">New</span></a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
          
          <div className="legal-links">
            <h4>Legal</h4>
            <ul>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/cookies">Cookie Policy</a></li>
              <li><a href="/terms">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 TMAAS</p>
        <div className="social-icons">
        <img src="/images/Social-icons.png" alt="Qatalyst Logo" className="footer-logo" />
          <a href="https://linkedin.com" className="social-link linkedin"></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
