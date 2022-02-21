import React from "react";

import "./Header.scss";

const Header = () => {
  return (
    <div className="pfw2__header section__padding">
      <div className="pfw2__header__container">
        <div className="pfw2__header-content">
          <h1 className="gradient__text pfw2__header-content__titel">
            Let's Built Something Cool
          </h1>
          <p className="pfw2__header-content__article">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed omnis
            perferendis, eos qui quasi ducimus ea natus, voluptas rem officia
            nulla hic nemo, nesciunt dolorem vitae minima deleniti! Nulla,
            deserunt.
          </p>
          <div className="pfw2__header-content__input">
            <input type="email" placeholder="your email address" />
            <button className="pfw2__header-content__btn">Sign up</button>
          </div>
          <div className="pfw2__header-content__img-container">
            <div className="pfw2__header-content__images">
              <img
                src="http://unsplash.it/500/500?image=234"
                alt="firstimage"
                className="img img1"
              />
              <img
                src="http://unsplash.it/500/500?image=231"
                alt="secondimage"
                className="img img2"
              />
              <img
                src="http://unsplash.it/500/500?image=235"
                alt="thirdimage"
                className="img img3"
              />
              <img
                src="http://unsplash.it/500/500?image=239"
                alt="forthimage"
                className="img img4"
              />
              <img
                src="http://unsplash.it/500/500?image=278"
                alt="fifthimage"
                className="img img5"
              />
            </div>
            <p className="pwf2__header-content__img-container-article">
              Lorem ipsum dolor <span>12</span> person...
            </p>
          </div>
        </div>
        <div className="pfw2__header-content__img-section">
          <img src="http://unsplash.it/500/500?image=883" alt="six_image" />
        </div>
      </div>
    </div>
  );
};

export default Header;
