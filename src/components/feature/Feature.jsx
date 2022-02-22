import React from "react";
import { Features } from "../../containers";
import "./Feature.scss";

const Feature = () => {
  return (
    <div className="pfw2__possibility section__padding">
      <div className="pfw2__possibility__container">
        <div className="pfw2__possibility-col-col1 one pfw2__possibility-col">
          <h1 className="gradient__text pfw2__possibility-title">
            Lorem ipsum dolor, sit amet consectetur adipisicing.
          </h1>
          <h3 className="pfw2__possibility-sub-title">
            Let's explore the world
          </h3>
        </div>
        <div className="pfw2__possibility-col-col2 two pfw2__possibility-col">
          <div className="card__wrapper">
            <div className="line gradient_bg1"></div>
            <Features
              title="web development"
              article="labore architecto vel eaque non delectus exercitationem?"
            />
          </div>
          <div className="card__wrapper">
            <div className="line gradient_bg1"></div>
            <Features
              title="web development"
              article="labore architecto vel eaque non delectus exercitationem?"
            />
          </div>
          <div className="card__wrapper">
            <div className="line gradient_bg1"></div>
            <Features
              title="web development"
              article="labore architecto vel eaque non delectus exercitationem?"
            />
          </div>
          <div className="card__wrapper">
            <div className="line gradient_bg1"></div>
            <Features
              title="web development"
              article="labore architecto vel eaque non delectus exercitationem?"
            />
          </div>
        </div>
        <div className="pfw2__possibility-col-col3 three pfw2__possibility-col">
          <p className="pfw2__col__container-article">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
            officia autem explicabo necessitatibus qui, alias modi reiciendis
          </p>
          <p className="pfw2__col__container-article">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
            officia autem explicabo necessitatibus qui, alias modi reiciendis
          </p>
          <p className="pfw2__col__container-article">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
            officia autem explicabo necessitatibus qui, alias modi reiciendis
          </p>
          <p className="pfw2__col__container-article">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
            officia autem explicabo necessitatibus qui, alias modi reiciendis
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
// "https://github.com/imtowhidulislam/ReactProject.git"
