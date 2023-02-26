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
    {id : 1 , title : "وزارة النقل تنظم ورشة عمل ....", img: newImg1, text : "تحت رعاية صاحب السمو الملكي الأمير سلطان بن عبد العزيز نائب أمير منطقة مكة المكرمة نظمت وزارة النقل اليوم .. ", badge : ["10", "المركز" ]},
    {id : 2 , title : "المركز الوطني لسلامة الطرق يوقع ....", img: newImg1, text : "وضع المركز الوطني لسلامة الطرق عددا من مذكرات التفاهم على هامش الملتقى والمعرض الدولي الخامس للسلامة المرورية الذي تنظمه الجمعية ...", badge : ["10", "المركز" ]},
    {id : 3 , title : "المركز الوطني لسلامة الطرق يشارك ....", img: newImg1, text : "شارك المركز الوطني لسلامة الطرق بجناح خاص في المعرض المصاحب لملتقى السلامة المرورية المقام بمدينة الدمام حيث قدم فيه تعريفا ...", badge : ["10", "المركز" ]},
    {id : 4 , title : "المركز الوطني لسلامة الطرق بالشراكة....", img: newImg1, text : "دشن المركز الوطني لسلامة الطرق بالشراكة مع القوات الخاصة لأمن الطرق اليوم حملة ' درب السلامة '' تزامنا مع بدء ..", badge : ["10", "المركز" ]},
    {id : 5 , title : "وزارة النقل تنظم ورشة عمل ....", img: newImg1, text : "تحت رعاية صاحب السمو الملكي الأمير سلطان بن عبد العزيز نائب أمير منطقة مكة المكرمة نظمت وزارة النقل اليوم .. ", badge : ["10", "المركز" ]},
    {id : 6 , title : "المركز الوطني لسلامة الطرق يوقع ....", img: newImg1, text : "وضع المركز الوطني لسلامة الطرق عددا من مذكرات التفاهم على هامش الملتقى والمعرض الدولي الخامس للسلامة المرورية الذي تنظمه الجمعية ...", badge : ["10", "المركز" ]},
    {id : 7 , title : "المركز الوطني لسلامة الطرق يشارك ....", img: newImg1, text : "شارك المركز الوطني لسلامة الطرق بجناح خاص في المعرض المصاحب لملتقى السلامة المرورية المقام بمدينة الدمام حيث قدم فيه تعريفا ...", badge : ["10", "المركز" ]},
    {id : 8 , title : "المركز الوطني لسلامة الطرق بالشراكة....", img: newImg1, text : "دشن المركز الوطني لسلامة الطرق بالشراكة مع القوات الخاصة لأمن الطرق اليوم حملة ' درب السلامة '' تزامنا مع بدء ..", badge : ["10", "المركز" ]},
    {id : 9 , title : "وزارة النقل تنظم ورشة عمل ....", img: newImg1, text : "تحت رعاية صاحب السمو الملكي الأمير سلطان بن عبد العزيز نائب أمير منطقة مكة المكرمة نظمت وزارة النقل اليوم .. ", badge : ["10", "المركز" ]},
    {id : 10 , title : "المركز الوطني لسلامة الطرق يوقع ....", img: newImg1, text : "وضع المركز الوطني لسلامة الطرق عددا من مذكرات التفاهم على هامش الملتقى والمعرض الدولي الخامس للسلامة المرورية الذي تنظمه الجمعية ...", badge : ["10", "المركز" ]},
    {id : 11 , title : "المركز الوطني لسلامة الطرق يشارك ....", img: newImg1, text : "شارك المركز الوطني لسلامة الطرق بجناح خاص في المعرض المصاحب لملتقى السلامة المرورية المقام بمدينة الدمام حيث قدم فيه تعريفا ...", badge : ["10", "المركز" ]},
    {id : 12 , title : "المركز الوطني لسلامة الطرق بالشراكة....", img: newImg1, text : "دشن المركز الوطني لسلامة الطرق بالشراكة مع القوات الخاصة لأمن الطرق اليوم حملة ' درب السلامة '' تزامنا مع بدء ..", badge : ["10", "المركز" ]},
]


const NewsSlider = () => {
    const [newsAllData, setNewsAllData] = useState(newsData);
    const [activateSlider, setActivateSlider] = useState(0);
    console.log(activateSlider)
    // console.log( newsAllData.length)

    return (
        <>
           <Box sx={{px:6}}>
            <Box>
                <Grid container spacing={0}>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={9}>
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={15}
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
                                        <Box className='news-card-badge'>
                                            <Typography variant='h4'>{data.badge[0]}</Typography>
                                            <Typography>{data.badge[1]}</Typography>
                                        </Box>
                                    </Card>
                                </Box>
                            </SwiperSlide>
                            )}
                        </Swiper>
                    </Grid>
                </Grid>
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