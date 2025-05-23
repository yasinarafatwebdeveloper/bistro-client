import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import image from"../../../assets/images/img7.jpg"
import image1 from"../../../assets/images/img8.jpg"
import image2 from"../../../assets/images/img9.jpg"
import image3 from"../../../assets/images/img10.jpg"
import image4 from"../../../assets/images/img11.jpg"
import image5 from"../../../assets/images/img12.jpg"
import image6 from"../../../assets/images/img13.jpg"
import image7 from"../../../assets/images/img14.jpg"
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
const Categori = () => {
    return (
    <section>

      <SectionTitle heading="From 11am to 10 pm" subheading="Online Product"></SectionTitle>
        <Swiper
      slidesPerView={4}
      spaceBetween={30}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
          <img src={image} alt="" />
          <h2 className=' sm:text-sm text-center lg:text-2xl -mt-16 text-white'>Old man dress</h2>
      </SwiperSlide>
      <SwiperSlide>
      <img src={image1} alt="" />
      <h2 className=' sm:text-sm text-center lg:text-2xl -mt-16 text-white'>Baby dress</h2>
      </SwiperSlide>
      <SwiperSlide>
      <img src={image2} alt="" />
      <h2 className=' sm:text-sm text-center lg:text-2xl -mt-16 text-white'>Baby dress</h2>
      </SwiperSlide>
      <SwiperSlide>
      <img src={image3} alt="" />
      <h2 className=' sm:text-sm text-center lg:text-2xl -mt-16 text-white'>Female  dress</h2>
      </SwiperSlide>
      <SwiperSlide>
      <img src={image4} alt="" />
      <h2 className=' sm:text-sm text-center lg:text-2xl -mt-16 text-white'>Male dress</h2>
      </SwiperSlide>
      <SwiperSlide>
      <img src={image5} alt="" />
      <h2 className=' sm:text-sm text-center lg:text-2xl -mt-16 text-white'>Baby dress</h2>
      </SwiperSlide>
      <SwiperSlide>
      <img src={image6} alt="" />
      <h2 className=' sm:text-sm text-center lg:text-2xl -mt-16 text-white'>Female dress</h2>
      </SwiperSlide>
      <SwiperSlide>
      <img src={image7} alt="" />
      <h2 className=' sm:text-sm text-center lg:text-2xl -mt-16 text-white'>Female dress</h2>
      </SwiperSlide>
  
    </Swiper>
    </section>
    );
};

export default Categori;