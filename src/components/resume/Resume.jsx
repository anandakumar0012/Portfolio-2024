import React from 'react'
import './resume.css'
import srm from "../../assets/srm.png"
import nandha from "../../assets/nandha.png"
import ibm from "../../assets/ibm.png"
import hcl from "../../assets/hcl.png"
import tcs from "../../assets/tcs.png"
import html from "../../assets/html.png"
import css from "../../assets/css.png"
import javascript from "../../assets/js.png"
import bootstrap from "../../assets/bootstrap.png"
import jquery from "../../assets/jquery.png"
import api from "../../assets/api.png"
import react from "../../assets/react.png"
import node from "../../assets/node.png"
import express from "../../assets/express.png"
import mongodb from "../../assets/mongodb.png"
import git from "../../assets/git.png"
import figma from "../../assets/figma.png"

const cards = [
  {
    id: 1,
    image: srm,
    title: 'SRM Institute of Science and Technology',
    content: ['Master of Computer Application', '2023 - Present']
  },
  {
    id: 2,
    image: nandha,
    title: 'Nandha Arts and Science',
    content: ['Bachelor of Computer Application', '2017 - 2020']
  },
  {
    id: 3,
    image: ibm,
    title: 'International Business Machines',
    content: ['Bangalore - Intern', 'Jul 2024 - Present']
  },
  {
    id: 4,
    image: hcl,
    title: 'Hindustan Computers Limited',
    content: ['Bangalore - Full Time', 'May 2022 - Oct 2023']
  },
  {
    id: 5,
    image: tcs,
    title: 'Tata Consultancy Services',
    content: ['Chennai - Full Time', 'Oct 2020 - Jan 2022']
  },
];

const smallCards = [
  {
    id: 1,
    image: html,
    text: 'HTML'
  },
  {
    id: 2,
    image: css,
    text: 'CSS'
  },
  {
    id: 3,
    image: javascript,
    text: 'JavaScript'
  },
  {
    id: 4,
    image: bootstrap,
    text: 'Bootstrap'
  },
  {
    id: 5,
    image: jquery,
    text: 'JQuery'
  },
  {
    id: 6,
    image: api,
    text: 'API'
  },
  {
    id: 7,
    image: react,
    text: 'React.js'
  },
  {
    id: 8,
    image: node,
    text: 'Node.js'
  },
  {
    id: 9,
    image: express,
    text: 'Express.js'
  },
  {
    id: 10,
    image: mongodb,
    text: 'MongoDB'
  },
  {
    id: 11,
    image: git,
    text: 'Git'
  },
  {
    id: 12,
    image: figma,
    text: 'Figma'
  },
];

const Resume = () => {
  return (

    <div className="resume-section" id='resume'>
    <div className="resume-title">
      <h1>My <span>Resume</span></h1>
    </div>
    <div className="resume-content">
      <div className="left-section">
        <h2>Education</h2>
        <div className="cards-container">
          {cards.slice(0, 2).map(card => (
            <div key={card.id} className="card">
              <img src={card.image} alt="Card image" className="card-image" />
              <div className="card-content">
                <p className="card-title">{card.title}</p>
                {card.content.map((text, index) => (
                  <p key={index} className="card-text">{text}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <h2>Experience</h2>
        <div className="cards-container">
          {cards.slice(2).map(card => (
            <div key={card.id} className="card">
              <img src={card.image} alt="Card image" className="card-image" />
              <div className="card-content">
                <p className="card-title">{card.title}</p>
                {card.content.map((text, index) => (
                  <p key={index} className="card-text">{text}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="right-section">
        <div className="small-cards-container">
          {smallCards.map(card => (
            <div key={card.id} className="small-card">
              <img src={card.image} alt="Card image" className="small-card-image" />
              <p className="small-card-text">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>

  )
}

export default Resume