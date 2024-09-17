import React from 'react'
import './about.css'
import { FaLinkedin, FaGithub, FaBehanceSquare, FaTwitter } from 'react-icons/fa';
import About from "../../assets/about.jpg";
import WordRotate from '../word-rotate';

const words = ["Front-End Developer", "Web Developer", "Software Developer"];

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
        <h1 className="title">Ananda Kumar</h1>
        <h1 className='title-work'>I'm a <span><WordRotate words={words}/></span></h1>
        <p className="description">
        Passionate software engineer with 2.9 years of hands-on experience in web development. Driven by curiosity and a 
        commitment to mastering new technologies, I have a experience of developing asset management applications and 
        refining my front-end skills through self-taught website projects.
        </p>
        <div className="social-icons">
          <a className='linkedin' href="https://www.linkedin.com/in/ananda-kumar-b08803228/" target="_blank" rel="noopener noreferrer" data-title="LinkedIn"><FaLinkedin /></a>
          <a className='github' href="https://github.com/anandakumar0012" target="_blank" rel="noopener noreferrer" data-title="Github"><FaGithub /></a>
          <a className='behance' href="https://www.behance.net/knrdancers" target="_blank" rel="noopener noreferrer" data-title="Behance"><FaBehanceSquare /></a>
          <a className='twitter' href="https://x.com/anandakumar0012" target="_blank" rel="noopener noreferrer" data-title="Twitter"><FaTwitter /></a>
        </div>
      </div>
    </div>

  )
}

export default about