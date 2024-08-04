import React, { useState } from 'react';
import Login from './Login/Login';
import Navbar from './Navbar/Navbar';
import About from './About/About';
import Title from './Title/Title';
import Events from './Events/Events';
import Testimonials from './Testimonials/Testimonials';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Hero from './Hero/Hero';
import Programs from './Programs/Programs';

const Home = () => {
  const [playState, setPlayState] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      {showLogin && <Login setShowLogin={setShowLogin} />}
      <Navbar setShowLogin={setShowLogin} />
      <Hero />
      <div className="container">
        <Title subTitle="Goals" title="Articles related to LIFE BELOW WATER" />
        <Programs />
        <About setPlayState={setPlayState} />
        <Title subTitle="Events" title="Ocean visuals" />
        <Events />
        <Title subTitle="Testimonial" title="Cohorts" />
        <Testimonials />
        <Title subTitle="Contact Us" title="Get in Touch" />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
