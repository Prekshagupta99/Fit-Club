import React from "react";
import "./Reasons.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import nike from "../../assets/nike.jpg";
import tick from "../../assets/tick.png";
const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
      <div className="left-r">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      <div className="right-r">
        <span>Some Reasons</span>
        <div>
          <span className="stroke-text">Why </span>
          <span>VIBE WITH US?</span>
        </div>

        <div className="details-r">
          <div>
            <img src={tick} alt=""></img>
            <span>Dynamic and Welcoming Community</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Variety of Classes</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Dedicated to helping you reach your personal best</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Personalized guidance</span>
          </div>
        </div>
        <span
          style={{
            color: "var(--gray)",
            fontWeight: "normal",
          }}
        >
          OUR PARTNERS
        </span>
        <div className="partners">
          <img src={nike} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
