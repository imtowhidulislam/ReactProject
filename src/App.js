import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Article, Brand, Cta, Feature } from "./components/index";
import {
  Blog,
  Features,
  Footer,
  WhatGPT3,
  Header,
  Possibility,
} from "./containers/index";

function App() {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Feature />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
{
  /* <Router>
  <Routes>
    <Route path="/" element={<Article />} />
    <Route path="/Brand" element={<Brand />} />
    <Route path="/Cta" element={<Cta />} />
    <Route path="/Feature" element={<Feature />} />
  </Routes>
</Router> */
}
