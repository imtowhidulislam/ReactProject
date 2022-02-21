import React from "react";
import "./Cta.scss";

const Cta = () => {
  return (
    <div className="pfw2__cta section__padding">
      <div className="pfw2__cta__content-container ">
        <div className="col col--1">
          <p className="col__sub__title">Lorem ipsum dolor sit amet.</p>
          <h2 className="col__title ">
            register todya and start exploring the endless possibilities
          </h2>
        </div>
        <div className="col col--2">
          <button className="cta__btn">get started</button>
        </div>
      </div>
    </div>
  );
};

export default Cta;
