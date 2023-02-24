import { Box } from "@mui/material";
import React from "react";
import { Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import '../../../assets/styles/Home.css';




export default function TestSlider() {
  return (
    <Box className='test-slider-container'>
      <Swiper
        slidesPerView={3}
        spaceBetween={-300}
        pagination={{
          clickable: true,
        }}
        navigation={{
          clickable: true,
        }}
        loop={true}
        modules={[Pagination, Navigation]}
        className="test-slider-swiper"
      >
        <SwiperSlide>
            <Box>
                
            </Box>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </Box>
  );
}

