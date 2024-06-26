import { motion } from "framer-motion";
import NumberCounter from "number-counter";
import React from "react";
import Heart from "../../assets/heart.png";
import hero_image from "../../assets/hero__image2.png";
import Header from "../Header/Header";
import "./Hero.css";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/*the best ad*/}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "165px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>The best fitness club in the town</span>
        </div>
        {/*hero heading*/}
        <div className="hero-text">
          <div className="vibe-text">
            <span className="stroke-text">.   .    .                VIBE </span>
          </div>
          <div>
            <span>IT'S IN YOU</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live your life to the fullest
            </span>
          </div>
        </div>
        {/*figures*/}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={1} start={1} delay="4" preFix="+" />
            </span>
            <span>International Coach</span>
          </div>
          <div>
            <span>
              <NumberCounter end={1000} start={800} delay="4" preFix="+" />
            </span>
            <span>Members joined</span>
          </div>
          <div>
            <span>
              <NumberCounter end={25} start={0} delay="4" preFix="+" />
            </span>
            <span>fitness programs</span>
          </div>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>
        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        {/*hero images*/}
        <img src={hero_image} alt="" className="hero-image" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          alt=""
          className="hero-image-back"
        />

        
        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          
        >
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
