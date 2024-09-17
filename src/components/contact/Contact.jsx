import React, { useRef, useState } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';
import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLinkedin, FaGithub, FaBehanceSquare, FaTwitter } from 'react-icons/fa';
import Confetti from 'react-confetti';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();
  const [showConfetti, setShowConfetti] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1jjfeiq', 'template_b1j0w28', form.current, 'Wq2Ya9t1TbmteDaFJ')
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        toast.success("Message sent successfully!");
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 5000);
      }, (error) => {
        console.error('Failed to send email:', error.text);
        toast.error("Failed to send message!");
      });

    e.target.reset();
  };

  return (
    <div className="contact-section" id='contact'>
      <h2 className="contact-heading"><span>Contact</span> Me</h2>
      <div className="contact-container">
        <div className="contact-left">
          <p>Get in touch and let me know how i can help. Fill out the form and i’ll be in touch as soon as possible.</p>
          <div className="contact-info">
            <div className="info-item">
              <CiLocationOn className='info-icon' />
              <p>Location: <br /> <span>9/11th cross, Kudlu gate, Bangalore, Karnataka</span> </p>
            </div>
            <div className="info-item">
              <FiPhone className='info-icon' />
              <p>Phone: <br /> <span>(+91) 8870223072</span></p>
            </div>
            <div className="info-item">
              <MdOutlineEmail className='info-icon' />
              <p>Email: <br /> <span>anandakumar0012@gmail.com</span></p>
            </div>
          </div>

          <div className="social-icons">
            <a className='linkedin social-icon' href="https://www.linkedin.com/in/ananda-kumar-b08803228/" target="_blank" rel="noopener noreferrer" data-title="LinkedIn"><FaLinkedin /></a>
            <a className='github social-icon' href="https://github.com/anandakumar0012" target="_blank" rel="noopener noreferrer" data-title="Github"><FaGithub /></a>
            <a className='behance social-icon' href="https://www.behance.net/knrdancers" target="_blank" rel="noopener noreferrer" data-title="Behance"><FaBehanceSquare /></a>
            <a className='twitter social-icon' href="https://x.com/anandakumar0012" target="_blank" rel="noopener noreferrer" data-title="Twitter"><FaTwitter /></a>
          </div>
        </div>
        <div className="contact-right">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <div className="input-with-icon">
                <FaUserCircle className="input-icon" />
                <input type='text' name='name' id="name" placeholder='Name' required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <div className="input-with-icon">
                <IoMdMail className="input-icon" />
                <input type='email' name='email' id="email" placeholder='Email' required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <div className="input-with-icon">
                <FaPhoneAlt className="input-icon" />
                <input type='phone' name='phone' id="phone" placeholder='Phone Number' required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <div className="input-with-icon">
                <AiFillMessage className="input-icon" />
                <textarea name='message' id="message" rows='5' placeholder='Write message...' required></textarea>
              </div>
            </div>

            <button type='submit' className='btn btn-primary'>Send</button>
          </form>
        </div>
      </div>
      {/* Confetti Effect */}
      {showConfetti && <Confetti />}

      {/* Toast Notification */}
      <ToastContainer position="bottom-center" autoClose={3000} hideProgressBar={false} />
    </div>
  )
}

export default Contact;

