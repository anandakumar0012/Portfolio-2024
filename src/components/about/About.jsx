import React from 'react'
import './about.css'
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import About from "../../assets/about.jpg";

function about() {
  return (

    <div className="about-me-container" id='about'>
      <div className="left-side">
        <div className="animated-photo">
          <img src={About} alt="Water_Animated" />
        </div>
      </div>
      <div className="right-side">
        <h5 className="subtitle">Hello It's Me</h5>
        <h1 className="title"><span>Ananda Kumar</span><br />I'm a <span>Front-end Web Developer</span></h1>
        <p className="description">
        Results-driven software engineer with 2.8 years of experience in <br />website development. 
        Self-motivated and eager to learn advanced technologies. Experienced in building asset management 
        applications and proficient in <br />self-learning front-end technologies through practical website development.
        </p>
        <div className="social-icons">
          <a className='linkedin' href="https://www.linkedin.com/in/ananda-kumar-b08803228/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a className='github' href="https://github.com/anandakumar0012" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a className='facebook' href="https://www.facebook.com/anandduke.anand" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a className='instagram' href="https://www.instagram.com/anand_hyna/?hl=en" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a className='twitter' href="https://x.com/anandakumar0012" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        </div>
      </div>
    </div>

  )
}

export default about