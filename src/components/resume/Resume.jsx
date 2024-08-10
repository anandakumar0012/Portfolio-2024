import React from 'react'
import './resume.css'

const cards = [
  {
    id: 1,
    image: 'src/assets/srm.png',
    title: 'SRM Institute of Science and Technology',
    content: ['Master of Computer Application', '2023 - Present']
  },
  {
    id: 2,
    image: 'src/assets/nandha.png',
    title: 'Nandha Arts and Science',
    content: ['Bachelor of Computer Application', '2017 - 2020']
  },
  {
    id: 3,
    image: 'src/assets/ibm.png',
    title: 'International Business Machines',
    content: ['Bangalore - Intern', 'Jul 2024 - Present']
  },
  {
    id: 4,
    image: 'src/assets/hcl.png',
    title: 'Hindustan Computers Limited',
    content: ['Bangalore - Full Time', 'May 2022 - Oct 2023']
  },
  {
    id: 5,
    image: 'src/assets/tcs.png',
    title: 'Tata Consultancy Services',
    content: ['Chennai - Full Time', 'Oct 2020 - Jan 2022']
  },
];

const smallCards = [
  {
    id: 1,
    image: 'src/assets/html.png',
    text: 'HTML'
  },
  {
    id: 2,
    image: 'src/assets/css.png',
    text: 'CSS'
  },
  {
    id: 3,
    image: 'src/assets/js.png',
    text: 'JavaScript'
  },
  {
    id: 4,
    image: 'src/assets/bootstrap.png',
    text: 'Bootstrap'
  },
  {
    id: 5,
    image: 'src/assets/jquery.png',
    text: 'JQuery'
  },
  {
    id: 6,
    image: 'src/assets/api.png',
    text: 'API'
  },
  {
    id: 7,
    image: 'src/assets/react.png',
    text: 'React.js'
  },
  {
    id: 8,
    image: 'src/assets/node.png',
    text: 'Node.js'
  },
  {
    id: 9,
    image: 'src/assets/express.png',
    text: 'Express.js'
  },
  {
    id: 10,
    image: 'src/assets/mongodb.png',
    text: 'MongoDB'
  },
  {
    id: 11,
    image: 'src/assets/git.png',
    text: 'Git'
  },
  {
    id: 12,
    image: 'src/assets/figma.png',
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