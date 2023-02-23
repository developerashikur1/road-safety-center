    import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
// import required modules
import { Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import '../../../assets/styles/Home.css';


const texts =[
    {id:1, title:"Lorem Ipsum", text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere magnam molestiae vero sunt quos cupiditate dolorem nam, eligendi tenetur modi tempore temporibus accusamus iste ipsa!"},
    {id:2, title:"Lorem Ipsum", text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere magnam molestiae vero sunt quos cupiditate dolorem nam, eligendi tenetur modi tempore temporibus accusamus iste ipsa!"},
    {id:3, title:"Lorem Ipsum", text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere magnam molestiae vero sunt quos cupiditate dolorem nam, eligendi tenetur modi tempore temporibus accusamus iste ipsa!"},
    {id:4, title:"Lorem Ipsum", text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere magnam molestiae vero sunt quos cupiditate dolorem nam, eligendi tenetur modi tempore temporibus accusamus iste ipsa!"},
    {id:5, title:"Lorem Ipsum", text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere magnam molestiae vero sunt quos cupiditate dolorem nam, eligendi tenetur modi tempore temporibus accusamus iste ipsa!"},
    {id:6, title:"Lorem Ipsum", text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere magnam molestiae vero sunt quos cupiditate dolorem nam, eligendi tenetur modi tempore temporibus accusamus iste ipsa!"},
]




    
    const TextSlider = () => {
        return (
            <>
               <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="text-swiper-slider"
                >
                    {texts.map((text) => 
                        <SwiperSlide key={text.id}>
                            <Box className='text-slider-container'>
                                <Grid alignItems="center" container spacing={0}>
                                    <Grid item xs={3}></Grid>
                                    <Grid item xs={6}>
                                        <Box className="text-swiper-slider_content-Box">
                                            <Typography variant="h4">{text.title}</Typography>
                                            <Typography>{text.text}</Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Grid item xs={3}></Grid>
                            </Box>
                        </SwiperSlide>
                    )}
                </Swiper>
            </>
        );
    };
    
    export default TextSlider;