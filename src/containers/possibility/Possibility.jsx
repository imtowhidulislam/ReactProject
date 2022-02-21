import React from "react";
import "./Possibility.scss";

const Possibility = () => {
  return (
    <div className="pfw2__poss section__padding">
      <div className="pfw2__poss-container">
        <div className="pfw2__poss-container_img_container">
          <img src="http://unsplash.it/1000/1000?image=453" alt="possimage" />
        </div>
        <div className="pfw2__poss-container-content-container">
          <p>Be an explorer</p>
          <h2 className="gradient__text">
            Never ever disbelieve on you potential
          </h2>
          <p className="poss__article">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            temporibus facere maiores, itaque impedit molestiae magnam natus
            ipsum laudantium inventore.
          </p>
          <p>It will be worth one day</p>
        </div>
      </div>
    </div>
  );
};

export default Possibility;
