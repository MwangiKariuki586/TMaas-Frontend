import React from "react";
import "./ServiceCard.css";
// import ServiceImg from "../../assets/Service_card_Image.png";
// import checkbox from "../../assets/check.png";
// import X from "../../assets/x.png";
// import shareIcon from "../../assets/share Icon.png";
// import bookmarksIcon from "../../assets/bookmarks icon.png";
const ServiceCard = () => {
  return (
    <div className="container">
      <div className="service_card_overlay">
        <img className="close_icon" src="/images/x.png" alt="" />
        <div className="card_container">
          <div className="left">
            <img
              className="Service_card_Image"
              src="/images/Service_card_Image.png"
              alt=""
            />
            <div className="icons_wrapper">
              <img src="/images/share Icon.png" alt="" />
              <img src="/images/bookmarks icon.png" alt="" />
            </div>
          </div>
          <div className="right">
            <div className="Text_supportText">
              <h3 className="service_name">Digital Physical Channel Design</h3>
              <span className="h4">Design</span>
            </div>
            <p className="description">
              This service sets the direction for a practice within the
              organization through the definition of the vision, mission, goals,
              and objectives. The direction setting ensures that the practice is
              operating aligned with the overall organization’s vision and goals
              and delivering practical impact through its operation.
            </p>
            {/* <div className="divider"></div>
          <span className="h4">Choose Your Service</span> */}
            {/* <div className="box1">
            <div className="service_box">
              <div className="service_box_wrapper">
                <span className="h5">Design</span>
                <span className="h6">
                  Craft a strategy-aligned blueprint for lasting transformation.
                </span>
              </div>

              <div className="checkbox">
                <img src={checkbox} alt="" />
              </div>
            </div>
            <div className="divider"></div>

            <div className="service_box">
              <div className="service_box_wrapper">
                <span className="h5">Deploy</span>
                <span className="h6">
                  Seamlessly integrate with minimal disruption for maximum
                  impact.
                </span>
              </div>

              <div className="checkbox">
                <img src={checkbox} alt="" />
              </div>
            </div>
          </div> */}
            <div className="divider"></div>

            <span className="h4">Customise Your Package</span>
            <div className="service_box">
              <div className="service_box_wrapper">
                <span className="h5">Architecture Design</span>
                <span className="h6">$2,000 </span>
              </div>
              <div className="checkbox">
                <img src="/images/check.png" alt="" />
              </div>
            </div>
            <div className="divider"></div>

            <div className="service_box">
              <div className="service_box_wrapper">
                <span className="h5">Competency Development</span>
                <span className="h6">$2,000 </span>
              </div>
              <div className="checkbox">
                <img src="/images/check.png" alt="" />
              </div>
            </div>
            <div className="divider"></div>

            <div className="service_box">
              <div className="service_box_wrapper">
                <span className="h5">Operations Design</span>
                <span className="h6">$2,000 </span>
              </div>
              <div className="checkbox">
                <img src="/images/check.png" alt="" />
              </div>
            </div>
            <div className="divider"></div>

            <div className="service_box">
              <div className="service_box_wrapper">
                <span className="h5">Strategy & Roadmap</span>
                <span className="h6">$2,000 </span>
              </div>
              <div className="disabled_checkbox">
                {/* <img src={checkbox} alt="" /> */}
              </div>
            </div>
            <div className="divider"></div>

            <button className="btn">
              <div className="btn_container">
                <span>Add to cart</span>
                <span className="dot">.</span>
                <span>$25,000</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
