import { Box } from '@mui/material';
import React from 'react';
// import required modules
import { EffectCoverflow, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import '../../../assets/styles/Home.css';



const sliderImages =[
    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />,
    <img src="https://swiperjs.com/demos/images/nature-2.jpg" />,
    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />,
    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />,
    <img src="https://swiperjs.com/demos/images/nature-5.jpg" />,
    <img src="https://swiperjs.com/demos/images/nature-6.jpg" />,
    <img src="https://swiperjs.com/demos/images/nature-7.jpg" />,
    <img src="https://swiperjs.com/demos/images/nature-8.jpg" />,
    <img src="https://swiperjs.com/demos/images/nature-9.jpg" />,
];

const CardSlider = () => {
    return (
        <>
            <Box className='card-slider-container'>
                {/* <Grid container spacing={0}>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={6}> */}
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={"auto"}
                        coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 50,
                        modifier: 8,
                        slideShadows: true,
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination]}
                        className="card-swiper-slider"
                    >
                            {sliderImages.map((img, index) => 
                            <SwiperSlide key={index}>
                                <Box >
                                {img}
                                </Box>
                            </SwiperSlide>
                            )}
                        </Swiper>
                    {/* </Grid>
                    <Grid item xs={3}></Grid>
                </Grid> */}
            </Box>
        </>
    );
};

export default CardSlider;