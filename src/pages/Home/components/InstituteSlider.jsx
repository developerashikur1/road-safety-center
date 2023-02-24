import { Box, Typography } from '@mui/material';
import React from 'react';
// import required modules
import { FreeMode, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import instituteImg1 from '../../../assets/images/company-slider-images/Asset-1.png';
import instituteImg2 from '../../../assets/images/company-slider-images/Asset-2.png';
import instituteImg3 from '../../../assets/images/company-slider-images/Asset-3.png';
import instituteImg4 from '../../../assets/images/company-slider-images/Asset-4.png';
import { default as instituteImg10, default as instituteImg5 } from '../../../assets/images/company-slider-images/Asset-5.png';
import instituteImg6 from '../../../assets/images/company-slider-images/Asset-6.png';
import instituteImg7 from '../../../assets/images/company-slider-images/Asset-7.png';
import instituteImg8 from '../../../assets/images/company-slider-images/Asset-8.png';
import instituteImg9 from '../../../assets/images/company-slider-images/Asset-9.png';
import '../../../assets/styles/Home.css';





const instituteContents = [
    {id : 1, img : instituteImg1},
    {id : 2, img : instituteImg2},
    {id : 3, img : instituteImg3},
    {id : 4, img : instituteImg4},
    {id : 5, img : instituteImg5},
    {id : 6, img : instituteImg6},
    {id : 7, img : instituteImg7},
    {id : 8, img : instituteImg8},
    {id : 9, img : instituteImg9},
    {id : 10, img : instituteImg10},
]

const InstituteSlider = () => {
    return (
        <>
            <Box className='institute-slider_title'>
                <Typography>
                شركاؤنا
                </Typography>
            </Box>
            <Box className='institute-slider-contianer'>
                <Swiper
                    slidesPerView={9}
                    spaceBetween={10}
                    freeMode={true}
                    loop={true}
                    navigation={{
                    clickable: true,
                    }}
                    modules={[FreeMode, Navigation]}
                    className="institute-swiper-slider"
                >
                    {instituteContents.map((institute) => 
                    <SwiperSlide key={institute.id}>
                        <Box className='institute-swiper-slider-contents'>
                            <img src={institute.img} alt="" />
                        </Box>
                    </SwiperSlide>
                    )}
                </Swiper>
            </Box>
        </>
    );
};

export default InstituteSlider;