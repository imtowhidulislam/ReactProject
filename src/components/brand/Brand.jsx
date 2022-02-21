import React from "react";
import {
  FaLinkedinIn,
  FaAngular,
  FaReact,
  FaJs,
  FaVuejs,
  FaYoutube,
} from "react-icons/fa";
import "./Brand.scss";

const Brand = () => {
  return (
    <div className="pfw2__brand section__padding">
      <div className="skill__container">
        <div className="icons">
          <FaAngular />
        </div>
        <span>Angular</span>
      </div>
      <div className="skill__container">
        <div className="icons">
          <FaLinkedinIn />
        </div>
        <span>LinkedIn</span>
      </div>
      <div className="skill__container">
        <div className="icons">
          <FaYoutube />
        </div>
        <span>Youtube</span>
      </div>
      <div className="skill__container">
        <div className="icons">
          <FaVuejs />
        </div>
        <span>Vue Js</span>
      </div>
      <div className="skill__container">
        <div className="icons">
          <FaReact />
        </div>
        <span>React</span>
      </div>
      <div className="skill__container">
        <div className="icons">
          <FaJs />
        </div>
        <span>JavaScript</span>
      </div>
    </div>
  );
};

export default Brand;
