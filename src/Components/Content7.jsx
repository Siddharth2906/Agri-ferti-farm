import React from 'react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Content7 = () => {
  return (
   <>
<section className='content7'>
<h1>Our Blogs</h1>
<p>These blog topics can help engage our audience, provide educational content, and position our platform as a thought leader in agricultural innovation</p>
<Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          // pagination={{
          //   clickable: true,
          // }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper" 
        >
          
          <SwiperSlide>
            <div className='new-slider-7'>
            
            <h2>1. The Importance of Sustainable Fertilizer Use in Modern Agriculture</h2>
            <p><b>Overview :</b>Discuss the global challenges farmers face due to over-fertilization, environmental degradation, and soil health deterioration. Emphasize the importance of optimizing fertilizer use to ensure food security and sustainable farming.</p>
            <ul>
                <li>Negative impacts of traditional fertilizer overuse (e.g., soil degradation, pollution).</li>
                <li>Benefits of adopting sustainable practices.
                </li>
                <li>Role of technology in achieving balance between higher yield and sustainability.</li>
            </ul>
             
            </div>
          </SwiperSlide>
        



        </Swiper>
</section>
   </>
  )
}

export default Content7