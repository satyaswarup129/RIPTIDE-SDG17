import React from 'react'
import './About.css'
import about_img from '../../assets/About.jpg' 
import play_icon from '../../assets/play-icon.png' 

const About = ({setPlayState}) => {
  return (
    <div className='about'>
<div className="about-left">
    <img src={about_img} alt="" className='about-img'/>
    <img src={play_icon} alt="" className='play_icon' onClick={()=>{setPlayState(true)}}/>
</div>
<div className="about-right">
    <h3>ABOUT OCEAN</h3>
    <h2>Understanding Life Living Under Water</h2>
    <p>Life under water is incredibly diverse, ranging from tiny plankton to massive whales. Coral reefs host numerous marine species.Life under water is incredibly diverse, ranging from tiny plankton to massive whales. Coral reefs host numerous marine species.Life under water is incredibly diverse, ranging from tiny plankton to massive whales. Coral reefs host numerous marine species.</p>
    <p>Marine ecosystems play a crucial role in global carbon cycles. Healthy oceans regulate climate and support billions of people.Marine ecosystems play a crucial role in global carbon cycles. Healthy oceans regulate climate and support billions of people.</p>
    <p>Human activities threaten underwater life through pollution, overfishing, and climate change. Protecting marine habitats is essential for future sustainability.</p>
</div>
    </div>
  )
}

export default About