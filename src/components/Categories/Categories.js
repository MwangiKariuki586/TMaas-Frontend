import React from 'react';
import './Categories.css';

function Categories() {
  return (
    <div className="categories-container">
      <div className="category">
        <img src={process.env.PUBLIC_URL + '/images/DO_ICON_1.svg'} alt="Digital Organisation" />
        <p>Digital Organisation</p>
      </div>
      <div className="category">
        <img src={process.env.PUBLIC_URL + '/images/DTMO_ICON_2.png'} alt="Digital Transformation Management Office" />
        <p>Digital Transformation Management Office</p>
      </div>
      <div className="category">
        <img src={process.env.PUBLIC_URL + '/images/DTMP_ICON_3.png'} alt="Digital Transformation Management Platform" />
        <p>Digital Transformation Management Platform</p>
      </div>
      <div className="category">
        <img src={process.env.PUBLIC_URL + '/images/DTMF_ICON_4.svg'} alt="Digital Transformation Frameworks" />
        <p>Digital Transformation Frameworks</p>
      </div>
      <div className="category">
        <img src={process.env.PUBLIC_URL + '/images/DO_ICON_5.png'} alt="Digital Core" />
        <p>Digital Core</p>
      </div>
      <div className="category">
        <img src={process.env.PUBLIC_URL + '/images/DG_ICON_6.png'} alt="Digital GPRC" />
        <p>Digital GPRC</p>
      </div>
      <div className="category">
        <img src={process.env.PUBLIC_URL + '/images/DB_icon_7.svg'} alt="Digital Backoffice" />
        <p>Digital Backoffice</p>
      </div>
    </div>
  );
}

export default Categories;
