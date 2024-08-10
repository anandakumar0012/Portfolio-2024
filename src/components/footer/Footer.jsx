import React from 'react'
import './footer.css'
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (

    <footer className="footer-section">
    <div className="footer-social-icons">
      <a className='linkedin' href="https://www.linkedin.com/in/ananda-kumar-b08803228/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      <a className='github' href="https://github.com/anandakumar0012" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      <a className='facebook' href="https://www.facebook.com/anandduke.anand" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
      <a className='instagram' href="https://www.instagram.com/anand_hyna/?hl=en" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      <a className='twitter' href="https://x.com/anandakumar0012" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
    </div>
    <div className="footer-text">
      <p>2024 &copy; Ananda-Kumar. Design by Ananda-Kumar.</p>
    </div>
  </footer>
    
  )
}

export default Footer