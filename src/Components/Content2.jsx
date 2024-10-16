import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import chaneImage from "../images/content4image/chane.jpg"
import fruits from "../images/content4image/fruits.jpg"
import grains from "../images/content4image/grains.jpg"
import maize from "../images/content4image/maize.jpg"
import soyabean from "../images/content4image/soyabean.jpg"
import wheat from "../images/content4image/wheat 1.jpg"
import vegetable from "../images/content4image/vegetables.jpg"
import newvegtable from "../images/content4image/newvegtable.jpg"
const Content2 = () => {
    return (
        <>
            <section className='section-2'>
                <div className='content2'>
                    <div className='box1'>
                        <div>
                            <h2>What We Do</h2>
                            <h1>Currently we are selling and buying crops and food</h1>
                        </div>
                    </div>

                    <div className='box2'>
                        <p> we connect farmers and consumers in a secure marketplace for buying and selling crops and food. Our platform ensures fair prices for farmers and quality products for buyers, with an easy-to-use interface for seamless transactions. Join us today and support sustainable agriculture.
                        </p>
                        <p className='discover'><Link>Discover more</Link></p>
                    </div>
                </div>
                <div className='content2-slider'>
                    <div className='inside-content2'>
                    <Swiper
                        spaceBetween={60 }
                        slidesPerView={3}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        navigation={true}
                        modules={[Autoplay, Navigation]}
                        className="mySwiper"
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide className='new-slide'><img src={wheat} alt="" />
                        <div className='inside-newslide'></div></SwiperSlide>
                        <SwiperSlide className='new-slide'><img src={maize} alt="" /><div className='inside-newslide'></div></SwiperSlide>
                        <SwiperSlide className='new-slide'><img src={grains} alt="" /><div className='inside-newslide'></div></SwiperSlide>
                        <SwiperSlide className='new-slide'><img src={vegetable} alt="" /><div className='inside-newslide'></div></SwiperSlide>
                        <SwiperSlide className='new-slide'><img src={soyabean} alt="" /><div className='inside-newslide'></div></SwiperSlide>
                        <SwiperSlide className='new-slide'><img src={fruits} alt="" /><div className='inside-newslide'></div></SwiperSlide>
                        <SwiperSlide className='new-slide'><img src={chaneImage} alt="" /><div className='inside-newslide'></div></SwiperSlide>
                        <SwiperSlide className='new-slide'><img src={newvegtable} alt="" /><div className='inside-newslide'></div></SwiperSlide>
                        
                    </Swiper>
                    </div>
                </div>
                <div className='content2-2'>
                    <h1>Healthy Life With Fresh Product</h1>
                </div>
            </section>
        </>
    )
}

export default Content2