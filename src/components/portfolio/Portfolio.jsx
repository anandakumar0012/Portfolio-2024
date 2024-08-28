import React from 'react'
import './portfolio.css'
import health from "../../assets/Project1.png"
import book from "../../assets/Project2.png"
import ecommerce from "../../assets/Project3.png"
import whatsapp from "../../assets/Project4.png"
// import P2_I1 from '../../assets/P2_I1.png'
// import P2_I2 from '../../assets/P2_I2.png'
// import P2_I3 from '../../assets/P2_I3.png'
// import P2_I4 from '../../assets/P2_I4.png'
// import P2_I5 from '../../assets/P2_I5.png'
// import P2_I6 from '../../assets/P2_I6.png'

// import P1_I1 from '../../assets/P1_I1.png'
// import P1_I2 from '../../assets/P1_I2.png'
// import P1_I3 from '../../assets/P1_I3.png'
// import P1_I4 from '../../assets/P1_I4.png'
// import P1_I5 from '../../assets/P1_I5.png'




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

// const verticalImages1 = [
//   { image: P2_I1, title: 'Slidein Menu Page' },
//   { image: P2_I2, title: 'Homepage page' },
//   { image: P2_I3, title: 'Product Details Page' },
//   { image: P2_I4, title: 'Checkout Page' },
//   { image: P2_I5, title: 'Confirmation Page' },
//   { image: P2_I6, title: 'Reviews Page' },
// ];

// const verticalImages2 = [
//   { image: P1_I1, title: 'Main Page' },
//   { image: P1_I2, title: 'Blog Page' },
//   { image: P1_I3, title: 'FoodRecipe Page' },
//   { image: P1_I4, title: 'ClimateWise Precautions Page' },
//   { image: P1_I5, title: 'Shop Page' },
// ];

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
              <div className="portfolio-card-title">{card.title}</div>
              <div className="portfolio-card-links">
                {/* <a href="#">{card.link1}</a>
                <a href="#">{card.link2}</a> */}
                <a href={card.link1} target="_blank" rel="noopener noreferrer">Github</a>
                <a href={card.link2} target="_blank" rel="noopener noreferrer">Live Demo</a>
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
              <div className="portfolio-card-title">{verticalCard.title}</div>
              <div className="portfolio-card-links">
                <a href={verticalCard.link1} target="_blank" rel="noopener noreferrer">Behance</a>
              </div>
            </div>
          ))}
        </div>
        </div>

        {/* <div className="extra-sections">
          <div className="section-heading">
            <h2>Figma <span>Design</span></h2>
          </div>
          <div className="vertical-images-container">
            <h4><span>Health Care Website</span></h4>
            <div className="vertical-images-grid">
              {verticalImages2.map((item, index) => (
                <div key={index} className="vertical-image">
                  <img src={item.image} alt={`Vertical Image ${index + 1}`} />
                  <div className="vertical-image-title">{item.title}</div>
                </div>
              ))}
            </div>
            <h4><span>E-Commerce Website</span></h4>
            <div className="vertical-images-grid">
              {verticalImages1.map((item, index) => (
                <div key={index} className="vertical-image">
                  <img src={item.image} alt={`Vertical Image ${index + 1}`} />
                  <div className="vertical-image-title">{item.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </div>
    </div>

  )
}

export default Portfolio