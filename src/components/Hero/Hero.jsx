import React, { Component } from "react";
import "./Hero.css";
import dark_arrow from "../../assets/Arrow.png";
import bannerVid from "../../assets/banner-vid.mp4";
import { Link } from "react-router-dom";
import Login from "../Login/Login";

const Hero = ({ showLogin,setShowLogin }) => {
  return (
    <div className="hero container">
    {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}
      <video src={bannerVid} autoPlay loop muted />
      <div className="hero-text">
        <h1>Let's save our Ocean</h1>
        <p>
          Protecting our oceans ensures a sustainable future by preserving
          marine biodiversity,
          <br /> supporting coastal communities, and mitigating climate change
          impacts.{" "}
        </p>
        <Link to="/Explore">
          <button className="btn">
            Explore More
            <img src={dark_arrow} alt="" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
