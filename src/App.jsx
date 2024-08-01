import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Events from './components/Events/Events'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Videoplayer from './components/VideoPlayer/Videoplayer'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login/Login'



const App = () => {
  const [playState, setPlayState] = useState(false);
  const [showLogin,setShowLogin] = useState(false)
  return (
    <div>
      {showLogin?<Login setShowLogin={setShowLogin}/>:<></>}
<Navbar setShowLogin={setShowLogin} />
<Hero/>
<div className="container">
  <Title subTitle ='Goals' title='Articals related to LIFE BELOW WATER'/>
  <Programs/>
  <About setPlayState={setPlayState}/>
  <Title subTitle ='Events' title='Ocean visuals'/>
  <Events/>
  <Title subTitle ='Testimonial' title='What Ocean Says'/>
  <Testimonials/>
  <Title subTitle ='Contact Us' title='Get in Touch'/>
  <Contact/>
  <Footer/>
  </div>
    
    </div>
  )
}

export default App