import React, { Component } from 'react'
import './Hero.css'
import dark_arrow from '../../assets/Arrow.png'
import bannerVid from '../../assets/banner-vid.mp4'
import { BrowserRouter, Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className='hero container'>
              <video src={bannerVid} autoPlay loop muted/>
<div className="hero-text">
    <h1>Let's save our Ocean</h1>
    <p>Protecting our oceans ensures a sustainable future by preserving marine biodiversity,<br/> supporting coastal communities, and mitigating climate change impacts. </p>
    <BrowserRouter><Link to="https://sdgs.un.org/goals/goal14"><button className='btn'>Explore More<img src={dark_arrow} alt=""/></button></Link></BrowserRouter>
</div>

    </div>
  )
}

export default Hero