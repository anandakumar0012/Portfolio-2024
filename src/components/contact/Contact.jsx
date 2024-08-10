import React from 'react'
import './contact.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser'
import gmail from "../../assets/gmail.png"
import whatsapp from "../../assets/whatsapp.png"
import phone from "../../assets/phone.png"
import cv from "../../assets/ANANDA_KUMAR_RESUME.pdf"

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1jjfeiq', 'template_b1j0w28', form.current, 'Wq2Ya9t1TbmteDaFJ').then((result) => {
      console.log('Email sent successfully:', result.text);
    }, (error) => {
      console.error('Failed to send email:', error.text);
    });

    e.target.reset();
  };

  return (

    <div className="contact-section" id='contact'>
      <h2 className="contact-heading"><span>Contact</span> Me</h2>
      <div className="contact-container">
        <div className="contact-left">
          <div className="contact-card">
            <img src={gmail} alt="Icon 1" className="card-icon" />
            <h3>Email Me At</h3>
            <p>anandakumar0012@gmail.com</p>
            <a href="mailto:anandakumar0012@gmail.com" target='_blank'>Send Message</a>
          </div>
          <div className="contact-card">
            <img src={whatsapp} alt="Icon 2" className="card-icon" />
            <h3>Whatsapp Me On</h3>
            <p>+91 8870223072</p>
            <a href="https://api.whatsapp.com/send?phone+918870223072" target='_blank'>Send Message</a>
          </div>
          <div className="contact-card">
            <img src={phone} alt="Icon 3" className="card-icon" />
            <h3>Call Me On</h3>
            <p>+91 8870223072</p>
            <a href="tel:8870223072" target='_blank'>Send Message</a>
          </div>
        </div>
        <div className="contact-right">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <input type='text' name='name' placeholder='Your Full Name' required />
            <input type='email' name='email' placeholder='Your Email' required />
            <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
            <a href={cv} download className='btn'>Download CV</a>
          </form>


        </div>
      </div>
    </div>

  )
}

export default Contact