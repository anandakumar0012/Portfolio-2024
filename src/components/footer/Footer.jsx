import React from 'react'
import './footer.css'
import cv from "../../assets/ANANDA_KUMAR_RESUME.pdf"


const Footer = () => {
  return (

    <footer className="footer-section">
      <div className="footer-text">
        <p>Ananda-Kumar</p>
      </div>
      <div className="footer-button-container">
        <a href={cv} download className="btn primary-btn footer-primary">Download Resume</a>
        <a href="mailto:anandakumar0012@gmail.com" target='_blank' className="btn secondary-btn footer-secondary">Hire Me</a>
      </div>
    </footer>

  )
}

export default Footer