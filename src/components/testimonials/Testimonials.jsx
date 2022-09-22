import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'



const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis hic ad laboriosam minus eius nobis impedit provident quas libero accusamus veritatis dolor voluptatem, modi consequuntur corrupti sit qui rem labore!'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonial</h2>

      <div className="container testimonials__container">
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <article key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review} </small>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Testimonials