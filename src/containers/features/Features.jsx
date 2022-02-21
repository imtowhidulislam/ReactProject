import React from "react";
import "./Features.scss";

const Features = ({ title, article }) => {
  return (
    <div className="card__container">
      {/* <div className="line gradient_bg1"></div> */}
      <h2 className="title">{title}</h2>
      <p className="article">{article}</p>
    </div>
  );
};

export default Features;
