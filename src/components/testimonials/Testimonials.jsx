import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    name: 'John Doe 1',
    image: AVTR1,
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus autem ex sunt soluta necessitatibus quia nisi illum atque qui ratione maxime, labore culpa vel cupiditate quasi repellat voluptate debitis dolore'
  },
  {
    id: 2,
    name: 'John Doe 2',
    image: AVTR2,
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus autem ex sunt soluta necessitatibus quia nisi illum atque qui ratione maxime, labore culpa vel cupiditate quasi repellat voluptate debitis dolore'
  },
  {
    id: 3,
    name: 'John Doe 3',
    image: AVTR3,
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus autem ex sunt soluta necessitatibus quia nisi illum atque qui ratione maxime, labore culpa vel cupiditate quasi repellat voluptate debitis dolore'
  },
  {
    id: 4,
    name: 'John Doe 4',
    image: AVTR4,
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus autem ex sunt soluta necessitatibus quia nisi illum atque qui ratione maxime, labore culpa vel cupiditate quasi repellat voluptate debitis dolore'
  }  
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>What the people are saying</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
       modules={[Pagination]}
       spaceBetween={50}
       slidesPerView={1}
       pagination={{clickable: true}}
       >
      {
          data.map(({id, name, image, review}) => {
            return (
              <SwiperSlide key={id} className="testimonial" >
                <div className="client__avatar">
                  <img src={image} alt={name} />
                </div>
                <h5 className="client__name">
                  {name}
                </h5>
                <small className="client__review">
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }
        
      </Swiper>
    </section>
  )
}

export default Testimonials