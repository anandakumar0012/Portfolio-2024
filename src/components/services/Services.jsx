import React from 'react'
import './services.css'

const services = [
  {
    id: 1,
    image: 'src/assets/design.png',
    title: 'UI / UX',
    items: [
      '📌Create automatic and visually appealing user-friendly interfaces.', 
      '📌Develop wireframes and prototypes to illustrate design concepts.', 
      '📌Gather and analyze user feedback to iterate on designs.'
    ]
  },
  {
    id: 2,
    image: 'src/assets/dev.png',
    title: 'Web Development',
    items: [
      '📌Develop responsive web pages using Front-end Development.', 
      '📌Collaborate with back-end developers to integrate front-end and back-end logic.',
      '📌Write and maintain documentation for code and processes.'
    ]
  }
];

const Services = () => {
  return (

    <div className="services-section" id='service'>
    <div className="services-title">
      <h1>Our <span>Services</span></h1>
    </div>
    <div className="services-content">
      {services.map(service => (
        <div key={service.id} className="service-card">
          <img src={service.image} alt={`${service.title} image`} className="service-image" />
          <div className="service-details">
            <h2>{service.title}</h2>
            <ul>
              {service.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>
    
  )
}

export default Services



