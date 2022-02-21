import React from "react";
import "./Blog.scss";

const Blog = () => {
  return (
    <div className="pfw2__blog section__padding">
      <h2 className="pfw2__blog-title gradient__text">
        a lot is happening we are blogging about it.
      </h2>
      <div className="pfw2__blog-container grid">
        <article className="testimonial one grid__col__span--2 one testimonial--1">
          <div className="testimonial__profile">
            <img
              src="http://unsplash.it/500/500?image=232"
              alt="frist__image"
              className="image"
            />
          </div>
          <div className="testimonial__content-container">
            <p>Lorem ipsum dolor </p>
            <h2 className="testimonial__content-container-title">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </h2>
            <p className="testimonial__article">Lorem ipsum dolor sit amet</p>
          </div>
        </article>
        <article className="testimonial two testimonial--1">
          <div className="testimonial__profile">
            <img
              src="http://unsplash.it/500/500?image=211"
              alt="frist__image"
              className="image"
            />
          </div>
          <div className="testimonial__content-container">
            <p>Lorem ipsum dolor </p>
            <h2 className="testimonial__content-container-title">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </h2>
            <p className="testimonial__article">Lorem ipsum dolor sit amet</p>
          </div>
        </article>
        <article className="testimonial three testimonial--1">
          <div className="testimonial__profile">
            <img
              src="http://unsplash.it/500/500?image=255"
              alt="frist__image"
              className="image"
            />
          </div>
          <div className="testimonial__content-container">
            <p>Lorem ipsum dolor </p>
            <h2 className="testimonial__content-container-title">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </h2>
            <p className="testimonial__article">Lorem ipsum dolor sit amet</p>
          </div>
        </article>
        <article className="testimonial four testimonial--1">
          <div className="testimonial__profile">
            <img
              src="http://unsplash.it/500/500?image=244"
              alt="frist__image"
              className="image"
            />
          </div>
          <div className="testimonial__content-container">
            <p>Lorem ipsum dolor </p>
            <h2 className="testimonial__content-container-title">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </h2>
            <p className="testimonial__article">Lorem ipsum dolor sit amet</p>
          </div>
        </article>
        <article className="testimonial five testimonial--1">
          <div className="testimonial__profile">
            <img
              src="http://unsplash.it/500/500?image=256"
              alt="frist__image"
              className="image"
            />
          </div>
          <div className="testimonial__content-container">
            <p>Lorem ipsum dolor </p>
            <h2 className="testimonial__content-container-title">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </h2>
            <p className="testimonial__article">Lorem ipsum dolor sit amet</p>
          </div>
        </article>
        <article className="testimonial six testimonial--1">
          <div className="testimonial__profile">
            <img
              src="http://unsplash.it/500/500?image=342"
              alt="frist__image"
              className="image"
            />
          </div>
          <div className="testimonial__content-container">
            <p>Lorem ipsum dolor </p>
            <h2 className="testimonial__content-container-title">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </h2>
            <p className="testimonial__article">Lorem ipsum dolor sit amet</p>
          </div>
        </article>
        <article className="testimonial seven testimonial--1">
          <div className="testimonial__profile">
            <img
              src="http://unsplash.it/500/500?image=28"
              alt="frist__image"
              className="image"
            />
          </div>
          <div className="testimonial__content-container">
            <p>Lorem ipsum dolor </p>
            <h2 className="testimonial__content-container-title">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </h2>
            <p className="testimonial__article">Lorem ipsum dolor sit amet</p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Blog;
