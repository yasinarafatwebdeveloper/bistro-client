import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Testimonals = () => {

const [reviews,setReview]=useState([])

useEffect(()=>{
fetch("http://localhost:5000/Review")
.then(res=>res.json())
.then(data=>setReview(data))

},[])


    return (
        <section>
 <SectionTitle heading="With Our Claint Say" subheading={"TESTIMONIALS"}></SectionTitle>

        <div className='text-center justify-center'>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        

        {
            reviews.map(review=><SwiperSlide key={review._id }>
      
           <div className='m-24 my-14'>
           <p>{review.details}</p>
           <h3 className='text-yellow-400'>{review.name}</h3>
           </div>
            </SwiperSlide>)
        }
   
      </Swiper>
        </div>

        </section>
    );
};

export default Testimonals;