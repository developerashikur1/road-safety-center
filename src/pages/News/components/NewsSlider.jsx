import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
// import required modules
import { Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import newImg1 from '../../../assets/images/news-slider-images/news-img-1.png';
import '../../../assets/styles/News.css';







const newsData = [
    {id : 1 , title : "وزارة النقل تنظم ورشة عمل ....", img: newImg1, text : "تحت رعاية صاحب السمو الملكي الأمير سلطان بن عبد العزيز نائب أمير منطقة مكة المكرمة نظمت وزارة النقل اليوم .. ", badge : [ ]},
    {id : 2 , title : "المركز الوطني لسلامة الطرق يوقع ....", img: newImg1, text : "وضع المركز الوطني لسلامة الطرق عددا من مذكرات التفاهم على هامش الملتقى والمعرض الدولي الخامس للسلامة المرورية الذي تنظمه الجمعية ...", badge : [ ]},
    {id : 3 , title : "المركز الوطني لسلامة الطرق يشارك ....", img: newImg1, text : "شارك المركز الوطني لسلامة الطرق بجناح خاص في المعرض المصاحب لملتقى السلامة المرورية المقام بمدينة الدمام حيث قدم فيه تعريفا ...", badge : [ ]},
    {id : 4 , title : "المركز الوطني لسلامة الطرق بالشراكة....", img: newImg1, text : "دشن المركز الوطني لسلامة الطرق بالشراكة مع القوات الخاصة لأمن الطرق اليوم حملة ' درب السلامة '' تزامنا مع بدء ..", badge : [ ]},
]


const NewsSlider = () => {
    const [newsAllData, setNewsAllData] = useState(newsData);
    const [activateSlider, setActivateSlider] = useState(0);
    console.log(activateSlider)
    // console.log( newsAllData.length)

    return (
        <>
           <Box>
            <Box>
                <Grid container spacing={0}>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={6}>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={10}
                            speed={800}
                            pagination={{
                            type:'progressbar',
                            clickable: true,
                            }}
                            navigation={{
                                clickable:true,
                            }}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                            onSlideChange={(e) => setActivateSlider(e.activeIndex)}
                        >
                            {newsAllData.map((data, index) =>
                            <SwiperSlide key={index}>
                                <Box>
                                    <Card className='news-card-container' sx={{ maxWidth: 445, minHeight: 380 }}>
                                        <CardMedia
                                            sx={{ height: 180 }}
                                            image={data.img}
                                            title="green iguana"
                                        />
                                        <CardContent>
                                            <Typography textAlign='right' gutterBottom variant="h5" component="div">
                                            {data.title}
                                            </Typography>
                                            <Typography textAlign='right' variant="body2" color="text.secondary">
                                            {data.text}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Box>
                            </SwiperSlide>
                            )}
                        </Swiper>
                    </Grid>
                </Grid>
                {console.log( (100 / newsAllData.length) * activateSlider )}
                <Box>
                    {/* <Slider 
                        value={(100 / newsAllData.length) * ( activateSlider + 1 ) }
                        step={ 100 / newsAllData.length }
                        onChange={(e) => console.log(e.target.value)}
                    /> */}
                </Box>
            </Box>
           </Box> 
        </>
    );
};

export default NewsSlider;