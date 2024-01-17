import React from "react";
import "./Footer.css";
import GitHub from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
        <img src={GitHub} alt="" />
        <a className="social-links" href="https://www.instagram.com/vibe_.studio/">
        <img className="instagram" src={Instagram} alt="" />
        </a>
        <img src={LinkedIn} alt="" />
      </div>
      <div className="logo-f">
        <img src={Logo} alt="" />
      </div>
    </div>
    <div className="blur blur-f-1"></div>
    <div className="blur blur-f-2"></div>
    </div>
  );
};

export default Footer;
