import React from "react";
import { FaCopyright } from "react-icons/fa";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="pfw2__footer section__padding footer__padding">
      <div className="pfw2__footer__container">
        <h2 className="gradient__text footer__title">
          do you want to step in to the future before others
        </h2>
        <div className="btn__container">
          <button className="footer__btn">Wellcome</button>
        </div>

        <div className="footer__links__container">
          <div className="footer__link__content footer__link__content--1">
            <div className="first__child">
              <h3>GPT-3</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Libero, culpa.
              </p>
            </div>
          </div>
          <div className="footer__link__content footer__link__content--2">
            <ul>
              <li>Facebook</li>
              <li>LinkedIn</li>
              <li>Youtube</li>
              <li>Indeed</li>
              <li>Twitter</li>
            </ul>
          </div>
          <div className="footer__link__content footer__link__content--3">
            <ul>
              <li>Portfolio 1</li>
              <li>Portfolio 2</li>
              <li>Portfolio 3</li>
              <li>Portfolio 4</li>
            </ul>
          </div>
          <div className="footer__link__content footer__link__content--4">
            <ul>
              <li>LinkedIn 1</li>
              <li>Youtube 2</li>
              <li>Indeed 3</li>
              <li>Twitter 4</li>
            </ul>
          </div>
        </div>
        <div className="footer__copyright__text">
          <FaCopyright />
          <span>pfw2 reghts reserved.</span>{" "}
        </div>
      </div>
    </div>
  );
};

export default Footer;
