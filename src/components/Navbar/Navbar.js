import React from 'react';
import './Navbar.css'; // Importing the CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <img src="/images/DQ-logo1.png" alt="Qatalyst Logo" />
        </div>

        {/* Search Bar */}
        <div className="navbar-search">
          <input type="text" placeholder="What services would you like today?" />
          <img src="/images/send-icon.png" alt="Send Icon" className="send-icon" />
        </div>

        {/* Nav Links */}
        <ul className="navbar-links">
          <li><a href="/">Home</a></li>
          <li><a href="/explore">Services</a></li>
          <li><a href="/leaderboard">Resources</a></li>
        </ul>

        {/* Right Section */}
        <div className="navbar-right">
          <img src="/images/web-icon.png" alt="Language" className="web-icon" />
          <button className="sign-in">Sign In</button>
          <button className="get-started">Get Started</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
