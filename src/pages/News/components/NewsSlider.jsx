import ArrowLeftRoundedIcon from '@mui/icons-material/ArrowLeftRounded';
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';
import { Box, Button, Card, CardContent, CardMedia, Grid, IconButton, Slider, Typography } from '@mui/material';
import React, { useState } from 'react';
// import required modules
import { Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import newImg1 from '../../../assets/images/news-slider-images/news-img-1.png';
import newsSliderImg from '../../../assets/images/news-slider-img.png';
import sliderLeftLogo from '../../../assets/images/slider-left-btn.png';
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
    const [expanded, setExpanded] = useState(false);
    // console.log( newsAllData.length)

    return (
        <>
           <Box sx={{px:6}}>
            <Box>
                <Box className='news-popup-container'>
                    {expanded && 
                    <Button className='news-swiper-prev-btn'>
                    <img src={sliderLeftLogo} alt="" />
                    </Button>
                    }
                    <Box className='news-popup-elements'>
                        <Box className='news-popup_media'>
                            <img src={newsSliderImg} alt="" />
                        </Box>
                        <Box className={`news-popup_contents ${expanded ? 'news-pupup_contents-expand' : 'news-pupup_contents-not-expand'}`}>
                            <Typography variant='h4'>المركز الوطني لسلامة الطرق بالشراكة مع أمن الطرق يــطـــلـــق حـمــلـــة ” درب الـســـلامــــة “ تــزامــنــــاً مــع الإجـــازة</Typography>
                            <Typography>
                                دشَّن المركز الوطني لسلامة الطرق بالشراكة مع القوات الخاصة لأمن الطرق اليوم حملة ” درب السلامة ” تزامناً مع بدء موسم الإجازة بمركز الضبط الأمني بطريق الرياض / الدمام بحضور قائد القوات الخاصة لأمن الطرق اللواء خالد الضبيب ووكيل وزارة النقل المهندس طارق الشامي ورئيس المركز الوطني لسلامة الطرق الدكتور علي الغامدي
                                وتستهدف الحملة المسافرين خلال موسم الإجازة لرفع مستوى التوعية بالسلامة المرورية عن طريق المنشورات الورقية ولوحات الطرق والمحتوى الرقمي بمواقع التواصل الاجتماعي
                                وركزت الحملة على تعزيز التوعية بأبرز الممارسات السليمة لقائدي المركبات كضرورة ربط حزام الأمان وفحص المركبة والإطارات قبل السفر وأخذ قسط كافي من النوم، إلى جانب تعزيز التنبيه بأبرز الممارسات الخاطئة التي قد يقع فيها قائد المركبة كاستخدام الجوال والسرعة الزائدة 
                                وركز جانب من الحملة على غرس مفاهيم سلامة الأطفال عبر استهدافهم برسائل توعوية تأسس هذه المبادئ
                                وسيتم توسيع نطاق الحملة مستقبلاً لتشمل جميع مناطق المملكة للتوعية بالسلامة على الطرق والحفاظ على الأرواح
                                يشار إلى أن المركز الوطني لسلامة الطرق هو أحد مبادرات برنامج التحول الوطني وبإشراف وزارة النقل
                            </Typography>
                            { expanded || 
                            <Box className='news-expand-btn-container'>
                                <Button onClick={() => setExpanded(true)}>Expand</Button>
                            </Box>
                            }
                        </Box>
                        { expanded || 
                        <Box className='news-bg-gradiant'></Box>
                        }
                    </Box>
                </Box>
                <Grid container spacing={0}>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={9}>
                        <Box>
                            <Swiper
                                slidesPerView={4}
                                spaceBetween={15}
                                speed={800}
                                centeredSlides={true}
                                navigation={{
                                    // clickable:true,
                                    prevEl:'.news-swiper-prev-btn',
                                    nextEl:'.news-swiper-next-btn',
                                }}
                                modules={[ Navigation]}
                                className="news-swiper-slider-container"
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
                                            <Box className='news-card-overlay'></Box>
                                        </Card>
                                    </Box>
                                </SwiperSlide>
                                )}
                            </Swiper>
                            <Box className='news-swiper-slider-control'>
                                <Grid alignItems='center' container spacing={0}>
                                    <Grid item xs={3}></Grid>
                                    <Grid item xs={3}>
                                        <Box className='news-slider-btns'>
                                            <IconButton className='news-swiper-prev-btn' size='small'>
                                                <ArrowLeftRoundedIcon />
                                            </IconButton>
                                            <IconButton className='news-swiper-next-btn' size='small'>
                                                <ArrowRightRoundedIcon />
                                            </IconButton>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Box className='news-swiper-slider-pagination'>
                                            <Slider 
                                                speed={800}
                                                value={(100 / newsAllData.length) * ( activateSlider + 1 ) }
                                                step={ 100 / newsAllData.length }
                                                onChange={(e) => console.log(e.target.value)}
                                            />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
           </Box> 
        </>
    );
};

export default NewsSlider;