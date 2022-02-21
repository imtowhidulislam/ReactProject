import React, { useState, useEffect, useRef } from "react";

import "./Navbar.scss";

// ** BEM => Block Element Modifier..
// ** It is basically a naming convention.
const Navbar = () => {
  const navheight = useRef(null);
  const [size, setSize] = useState(window.innerWidth);
  const [dataVisible, setDatavisible] = useState("false");

  const getWidth = () => {
    setSize(window.innerWidth);
  };

  const handleHide = (e) => {
    setDatavisible(false);
  };

  const SignUp = ({ size }) => (
    <div className="sign_container">
      <a className="links" href="#">
        sign in
      </a>
      <a className="links cus__btn" href="#">
        sign up
      </a>
      {/* <h3>{size}</h3> */}
    </div>
  );
  useEffect(() => {
    window.addEventListener("resize", getWidth);
    // console.log(size);
    return () => window.removeEventListener("resize", getWidth);
  }, [size]);
  return (
    <div>
      <nav ref={navheight}>
        <div className="container">
          <h1 className="nav__logo">Towhid tech</h1>
          <div
            className={`menu menu_col ${dataVisible && "menu--active"}`}
            data-visible={dataVisible}
          >
            <a href="#home" className="links" onClick={handleHide}>
              Home
            </a>
            <a href="#about" className="links" onClick={handleHide}>
              About
            </a>
            <a href="#project" className="links" onClick={handleHide}>
              Projects
            </a>
            <a href="#contact" className="links" onClick={handleHide}>
              Contact
            </a>
            <a href="#testimonial" className="links" onClick={handleHide}>
              Testimonial
            </a>
            {size < 600 && <SignUp />}
          </div>

          {size > 600 && <SignUp />}

          <button
            className={`hamburger ${dataVisible && "is-active"}`}
            onClick={() => setDatavisible(!dataVisible)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
