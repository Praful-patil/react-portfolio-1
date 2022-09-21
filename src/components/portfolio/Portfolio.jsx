import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolioNew1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolioNew3.jpg'
import IMG4 from '../../assets/portfolioNew4.jpg'
import IMG5 from '../../assets/portfolioNew5.jpg'
import IMG6 from '../../assets/portfolioNew6.jpg'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Data visualization on the map - Figma dashboard',
    github: 'https://github.com/Praful-patil',
    demo: 'https://dribbble.com/shots/19314530-Data-visualization-on-the-map'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Eclipse - Figma dashboard UI kit for data design web apps',
    github: 'https://github.com/Praful-patil',
    demo: 'https://dribbble.com/shots/19314442-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Visualization of data in the form of a node system',
    github: 'https://github.com/Praful-patil',
    demo: 'https://dribbble.com/shots/19314274-Visualization-of-data-in-the-form-of-a-node-system'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Space Exploration Illustration - Figma dashboard',
    github: 'https://github.com/Praful-patil',
    demo: 'https://dribbble.com/shots/19447153-Space-Exploration-Illustration'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Visualization of global data on the interactive map',
    github: 'https://github.com/Praful-patil',
    demo: 'https://dribbble.com/shots/19314386-Visualization-of-global-data-on-the-interactive-map'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Visualization of data in the form of a node system',
    github: 'https://github.com/Praful-patil',
    demo: 'https://dribbble.com/shots/19314274-Visualization-of-data-in-the-form-of-a-node-system'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent work</h5>
      <h2>PortFolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn'>GitHub</a>
                  <a href={demo} target="_blank" className='btn btn-primary'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio