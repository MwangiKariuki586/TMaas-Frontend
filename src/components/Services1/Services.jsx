import React from "react";
import "./Services.css";
const Services = () => {
  return (
    <div className="service_container">
      <div className="service_wrapper">
        <h1 className="label">Services</h1>
        <p>
          Transform your business with our services across key digital economy
          sectors.
        </p>
      </div>
      <div className="carousel">
        <div className="image">
          <img src="/images/image.png" alt="" />
          <p>Experience 4.0</p>
        </div>
        <div className="image">
          <img src="/images/image2.png" alt="" />
          <p>Agility 4.0</p>
        </div>
        <div className="image">
          <img src="/images/image3.png" alt="" />
          <p>Farming 4.0</p>
        </div>
        <div className="image">
          <img src="/images/image4.png" alt="" />
          <p>Plant 4.0</p>
        </div>
        <div className="image">
          <img src="/images/image5.png" alt="" />
          <p>Infrastracture 4.0</p>
        </div>
        <div className="image">
          <img src="/images/image8.png" alt="" />
          <p>Government 4.0</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
