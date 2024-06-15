import React from "react";
import "./Footer.css";
import YouTube from "../../assets/youtube.png";
import Instagram from "../../assets/instagram.png";
import Facebook from "../../assets/facebookk.png";
import Logo from "../../assets/logo.png";
import LOGO from "../../images/logo.png";
const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
        <a className="social-links" href="https://www.youtube.com/@vibe.studio">
        <img src={YouTube} alt="" />
        </a>
        <a className="social-links" href="https://www.instagram.com/vibe_.studio/">
        <img className="instagram" src={Instagram} alt="" />
        </a>
        <a className="social-links" href="https://www.facebook.com/Vibestudioindia?mibextid=LQQJ4d">
        <img src={Facebook} alt="" />
        </a>
      </div>
      <div className="logo-f">
        <img src={LOGO} alt="" />
      </div>
    </div>
    <div className="blur blur-f-1"></div>
    <div className="blur blur-f-2"></div>
    </div>
  );
};

export default Footer;
