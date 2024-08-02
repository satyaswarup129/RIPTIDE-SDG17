import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import { Link as LinkScroll } from 'react-scroll';


const Navbar = ({setShowLogin}) => {
    const [sticky, setSticky] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        })
    },[]);
      const [mobileMenu, setMobileMenu] = useState(false);
      const toggleMenu = ()=>{
        mobileMenu? setMobileMenu(false) : setMobileMenu(true);
      }

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
       <img src={logo} alt=" " className='logo'/>
       <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li><LinkScroll to='hero' smooth={true} offset={0} duration={500}>Home</LinkScroll></li>
        <li><LinkScroll to='programs' smooth={true} offset={-300} duration={500}>Program</LinkScroll></li>
        <li><LinkScroll to='about' smooth={true} offset={-150} duration={500}>About Ocean</LinkScroll></li>
        <li><LinkScroll to='event' smooth={true} offset={-300} duration={500}>Events</LinkScroll></li>
        <li><LinkScroll to='Testimonials' smooth={true} offset={-260} duration={500}>Testimonials</LinkScroll></li>
        <li><LinkScroll to='contact' smooth={true} offset={-300} duration={500} className='btn'>Contact Us</LinkScroll></li>
        <li><div><LinkScroll to='hero' smooth={true} offset={-260} duration={500}><button className="btn" onClick={()=>setShowLogin(true)}>Sign in</button></LinkScroll></div></li>
       </ul>
       <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar