import { Box } from '@mui/material';
import React from 'react';
// import required modules
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import heroImg1 from '../../../assets/images/hero-slider/heroimg-1.jpeg';
import heroImg2 from '../../../assets/images/hero-slider/heroimg-2.jpg';
import heroImg3 from '../../../assets/images/hero-slider/heroimg-3.jpeg';
import heroImg4 from '../../../assets/images/hero-slider/heroimg-4.jpg';
import heroImg5 from '../../../assets/images/hero-slider/heroimg-5.jpg';
import '../../../assets/styles/Home.css';





const HeroSlider = () => {
    return (
        <>
            <Box className='hero-swiper-slider-container'>
                <Swiper 
                    pagination={true} 
                    loop={true}
                    modules={[Pagination]} 
                    className="hero-swiper-slider"
                >
                    <SwiperSlide><img src={heroImg1} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={heroImg2} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={heroImg3} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={heroImg4} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={heroImg5} alt="" /></SwiperSlide>
                </Swiper>
            </Box>
        </>
    );
};

export default HeroSlider;