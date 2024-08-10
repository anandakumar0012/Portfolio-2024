import React from 'react'
import './portfolio.css'

const cards = [
  {
    id: 1,
    image: 'src/assets/Project1.png',
    title: 'Health Care Website',
    link1: 'https://github.com/anandakumar0012/Healthy_Living_Tips',
    link2: 'https://healthyhub-anandakumar0012s-projects.vercel.app/',
  },
  // {
  //   id: 2,
  //   image: 'src/assets/Project2.png',
  //   title: 'Book Store Website',
  //   link1: 'Github',
  //   link2: 'Live Demo',
  // },
  {
    id: 3,
    image: 'src/assets/Project3.png',
    title: 'E-Commerce Website',
    link1: 'https://github.com/anandakumar0012/E-commerce_Sweet-Sounds',
    link2: 'https://e-commerce-sweet-sounds.vercel.app/',
  },
  // {
  //   id: 4,
  //   image: 'src/assets/Project4.png',
  //   title: 'Whatsapp Clone',
  //   link1: 'Github',
  //   link2: 'Live Demo',
  // },
];

const verticalImages1 = [
  { image: 'src/assets/P2_I1.png', title: 'Slidein Menu Page' },
  { image: 'src/assets/P2_I2.png', title: 'Homepage page' },
  { image: 'src/assets/P2_I3.png', title: 'Product Details Page' },
  { image: 'src/assets/P2_I4.png', title: 'Checkout Page' },
  { image: 'src/assets/P2_I5.png', title: 'Confirmation Page' },
  { image: 'src/assets/P2_I6.png', title: 'Reviews Page' },
];

const verticalImages2 = [
  { image: 'src/assets/P1_I1.png', title: 'Main Page' },
  { image: 'src/assets/P1_I2.png', title: 'Blog Page' },
  { image: 'src/assets/P1_I3.png', title: 'FoodRecipe Page' },
  { image: 'src/assets/P1_I4.png', title: 'ClimateWise Precautions Page' },
  { image: 'src/assets/P1_I5.png', title: 'Shop Page' },
];

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
        </div>
      </div>
    </div>

  )
}

export default Portfolio