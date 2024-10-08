import React from 'react'
import './portfolio.css'
import health from "../../assets/Project1.png"
import book from "../../assets/Project2.png"
import ecommerce from "../../assets/Project3.png"
import whatsapp from "../../assets/Project4.png"

const cards = [
  {
    id: 1,
    image: health,
    title: 'Health Care Website',
    link1: 'https://github.com/anandakumar0012/Healthy_Living_Tips',
    link2: 'https://healthyhub-anandakumar0012s-projects.vercel.app/',
  },
  {
    id: 2,
    image: book,
    title: 'Book Store Website',
    link1: 'https://github.com/anandakumar0012/Book_Store',
    link2: 'https://book-store-front-ten.vercel.app/',
  },
  {
    id: 3,
    image: ecommerce,
    title: 'E-Commerce Website',
    link1: 'https://github.com/anandakumar0012/E-commerce_Sweet-Sounds',
    link2: 'https://e-commerce-sweet-sounds.vercel.app/',
  },
  {
    id: 4,
    image: whatsapp,
    title: 'Whatsapp Clone',
    link1: 'https://github.com/anandakumar0012/WhatsApp_Clone',
    link2: 'https://whatsapp-mern-a9e9b.web.app/',
  },
];

const verticalCard = [
  {
    id: 1,
    image: health,
    title: 'Health Care Website',
    link1: 'https://www.behance.net/gallery/206513545/Healthy-Hub',
  },
  {
    id: 2,
    image: ecommerce,
    title: 'Ecommerce Website',
    link1: 'https://www.behance.net/gallery/206516459/Goat-Ecommerce',
  },
]

const Portfolio = () => {
  return (

    <div className="full-portfolio" id='portfolio'>
      <div className="portfolio-container">
        <div className='portfolio-heading'>
          <h2>My <span>Works</span></h2>
        </div>
        <div className="portfolio-card-grid">
          {cards.map(card => (
            <div key={card.id} className="portfolio-card">
              <div className="portfolio-card-image">
                <img src={card.image} alt={card.title} />
              </div>
              <div className='bottom-card'>
              <div className="portfolio-card-title">{card.title}</div>
              <div className="portfolio-card-links">
                <a href={card.link1} target="_blank" rel="noopener noreferrer">Github</a>
                <a href={card.link2} target="_blank" rel="noopener noreferrer">Live Demo</a>
              </div>
              </div>
            </div>
          ))}
        </div>

        <div className="extra-sections">
          <div className="section-heading">
            <h2>Figma <span>Design</span></h2>
          </div>
          <div className="portfolio-card-grid">
          {verticalCard.map(verticalCard => (
            <div key={verticalCard.id} className="portfolio-card">
              <div className="portfolio-card-image">
                <img src={verticalCard.image} alt={verticalCard.title} />
              </div>
              <div className='bottom-card'>
              <div className="portfolio-card-title">{verticalCard.title}</div>
              <div className="portfolio-card-links">
                <a href={verticalCard.link1} target="_blank" rel="noopener noreferrer">Behance</a>
              </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>

  )
}

export default Portfolio