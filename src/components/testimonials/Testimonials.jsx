import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
            <h5 className='clients__name'>Ernest Achiever</h5>
            <small className='clients__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quia amet sit et hic mollitia tempora sunt distinctio adipisci delectus.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, fuga!
            </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
            <h5 className='clients__name'>Ernest Achiever</h5>
            <small className='clients__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quia amet sit et hic mollitia tempora sunt distinctio adipisci delectus.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, fuga!
            </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
            <h5 className='clients__name'>Ernest Achiever</h5>
            <small className='clients__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quia amet sit et hic mollitia tempora sunt distinctio adipisci delectus.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, fuga!
            </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials