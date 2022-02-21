import React from "react";
import { Features } from "../index";
import "./WhatGPT3.scss";

const WhatGPT3 = () => {
  const num = 34;
  // console.log("🚀 ~ file: WhatGPT3.jsx ~ line 7 ~ WhatGPT3 ~ num", num);

  return (
    <div className="pfw2__whatGpt3 section__padding">
      <div className="pfw2__main__container">
        <div className="pfw2__col-col1">
          <div className="card__wrapper">
            <div className="line gradient_bg1"></div>
            <Features
              title="web development"
              article="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui eius doloribus omnis eveniet labore architecto vel eaque non delectus exercitationem?"
            />
          </div>
          <p className="pfw2__col__container-article">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
            officia autem explicabo necessitatibus qui, alias modi reiciendis
            ducimus illo enim omnis deleniti id voluptates libero expedita nemo
            beatae sapiente. Esse.
          </p>
        </div>
        <div className="pfw2__col-col2">
          <h1 className="gradient__text pfw2__whatGpt3-title">
            Lorem ipsum dolor, sit amet consectetur adipisicing.
          </h1>
          <h3 className="pfw2__whatGpt3-sub-title">Let's explore the world</h3>
        </div>
        <div className="pfw2__col-col3">
          <div className="card__wrapper">
            <div className="line gradient_bg1"></div>
            <Features
              title="web development"
              article="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui eius doloribus omnis eveniet labore architecto vel eaque non delectus exercitationem?"
            />
          </div>
          <div className="card__wrapper">
            <div className="line gradient_bg1"></div>
            <Features
              title="web development"
              article="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui eius doloribus omnis eveniet labore architecto vel eaque non delectus exercitationem?"
            />
          </div>
          <div className="card__wrapper">
            <div className="line gradient_bg1"></div>
            <Features
              title="web development"
              article="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui eius doloribus omnis eveniet labore architecto vel eaque non delectus exercitationem?"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatGPT3;
