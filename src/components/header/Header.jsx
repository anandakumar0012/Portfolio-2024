import React, { useState, useEffect } from 'react'
import './header.css'
import Typewriter from "typewriter-effect";
import cv from "../../assets/ANANDA_KUMAR_RESUME.pdf"

function header() {

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (

    <div className="background-image" id='home'>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <ul>
          <li><a href="home">Home</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#resume">My Resume</a></li>
          {/* <li><a href="#service">Service</a></li> */}
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact Me</a></li>
        </ul>
      </nav>
      <div className="content">
        <div className="text">
          <h5>Welcome</h5>
          <h1>
            <Typewriter 
            options={{
              autoStart: true,
              loop: true,
              delay: 50,
              strings: ["I'M Ananda Kumar"]
            }}
            />
          </h1>
          <p>I Studying Master of Computer Application and Working as a
            Front-end Web Developer and this is a simple Information about me.</p>
          <div className="button-container">
            <a href={cv} download  className="btn primary-btn">Download Resume</a>
            <a href="mailto:anandakumar0012@gmail.com" target='_blank' className="btn secondary-btn">Hire Me</a>
          </div>
        </div>
      </div>
    </div>

  )
}

export default header