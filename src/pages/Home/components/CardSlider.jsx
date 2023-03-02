import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Avatar, Box, IconButton, Tab, Tabs, Typography } from '@mui/material';
import React from 'react';
// import required modules
import { Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import '../../../assets/styles/Home.css';


const sliderImages =[
    {id:1, img:"https://swiperjs.com/demos/images/nature-1.jpg", title:"عن المركز", content:"تأسس المركز الوطني لسلامة الطرق في اكتوبر 2018.ويعدالمركز أحد مشاريع مبادرة سلامة الطرق لتقليل وفيات حوادث السير ضمن برنامج التحول الوطني 2020.ويهدف إلى تحسين مستويات السلامة المرورية من خلال التنسيق بين الجهات المعنية وتقديم الدعم الفني،وإعدادوتنفيذ نظام بيانات سلامة الطرق وتحديدألية جمع البيانات ذات الصلة."},
    {id:2, img:"https://swiperjs.com/demos/images/nature-2.jpg", title:"عن المركز", content:"تأسس المركز الوطني لسلامة الطرق في اكتوبر 2018.ويعدالمركز أحد مشاريع مبادرة سلامة الطرق لتقليل وفيات حوادث السير ضمن برنامج التحول الوطني 2020.ويهدف إلى تحسين مستويات السلامة المرورية من خلال التنسيق بين الجهات المعنية وتقديم الدعم الفني،وإعدادوتنفيذ نظام بيانات سلامة الطرق وتحديدألية جمع البيانات ذات الصلة."},
    {id:3, img:"https://swiperjs.com/demos/images/nature-4.jpg", title:"عن المركز", content:"تأسس المركز الوطني لسلامة الطرق في اكتوبر 2018.ويعدالمركز أحد مشاريع مبادرة سلامة الطرق لتقليل وفيات حوادث السير ضمن برنامج التحول الوطني 2020.ويهدف إلى تحسين مستويات السلامة المرورية من خلال التنسيق بين الجهات المعنية وتقديم الدعم الفني،وإعدادوتنفيذ نظام بيانات سلامة الطرق وتحديدألية جمع البيانات ذات الصلة."},
    {id:4, img:"https://swiperjs.com/demos/images/nature-3.jpg", title:"عن المركز", content:"تأسس المركز الوطني لسلامة الطرق في اكتوبر 2018.ويعدالمركز أحد مشاريع مبادرة سلامة الطرق لتقليل وفيات حوادث السير ضمن برنامج التحول الوطني 2020.ويهدف إلى تحسين مستويات السلامة المرورية من خلال التنسيق بين الجهات المعنية وتقديم الدعم الفني،وإعدادوتنفيذ نظام بيانات سلامة الطرق وتحديدألية جمع البيانات ذات الصلة."},
    {id:5, img:"https://swiperjs.com/demos/images/nature-5.jpg", title:"عن المركز", content:"تأسس المركز الوطني لسلامة الطرق في اكتوبر 2018.ويعدالمركز أحد مشاريع مبادرة سلامة الطرق لتقليل وفيات حوادث السير ضمن برنامج التحول الوطني 2020.ويهدف إلى تحسين مستويات السلامة المرورية من خلال التنسيق بين الجهات المعنية وتقديم الدعم الفني،وإعدادوتنفيذ نظام بيانات سلامة الطرق وتحديدألية جمع البيانات ذات الصلة."},
    {id:6, img:"https://swiperjs.com/demos/images/nature-6.jpg", title:"عن المركز", content:"تأسس المركز الوطني لسلامة الطرق في اكتوبر 2018.ويعدالمركز أحد مشاريع مبادرة سلامة الطرق لتقليل وفيات حوادث السير ضمن برنامج التحول الوطني 2020.ويهدف إلى تحسين مستويات السلامة المرورية من خلال التنسيق بين الجهات المعنية وتقديم الدعم الفني،وإعدادوتنفيذ نظام بيانات سلامة الطرق وتحديدألية جمع البيانات ذات الصلة."},
    {id:7, img:"https://swiperjs.com/demos/images/nature-7.jpg", title:"عن المركز", content:"تأسس المركز الوطني لسلامة الطرق في اكتوبر 2018.ويعدالمركز أحد مشاريع مبادرة سلامة الطرق لتقليل وفيات حوادث السير ضمن برنامج التحول الوطني 2020.ويهدف إلى تحسين مستويات السلامة المرورية من خلال التنسيق بين الجهات المعنية وتقديم الدعم الفني،وإعدادوتنفيذ نظام بيانات سلامة الطرق وتحديدألية جمع البيانات ذات الصلة."},
    {id:8, img:"https://swiperjs.com/demos/images/nature-8.jpg", title:"عن المركز", content:"تأسس المركز الوطني لسلامة الطرق في اكتوبر 2018.ويعدالمركز أحد مشاريع مبادرة سلامة الطرق لتقليل وفيات حوادث السير ضمن برنامج التحول الوطني 2020.ويهدف إلى تحسين مستويات السلامة المرورية من خلال التنسيق بين الجهات المعنية وتقديم الدعم الفني،وإعدادوتنفيذ نظام بيانات سلامة الطرق وتحديدألية جمع البيانات ذات الصلة."},
];

const CardSlider = () => {
    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    
    return (
        <>
            <Box className='card-tab-panel-container'>
                <Box>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor="secondary"
                        indicatorColor="secondary"
                        aria-label="secondary tabs example"
                        className='card-tab-panel_btns'
                    >
                        <Tab value="one" label="التوعية" />
                        <Tab value="two" label="الاخبار" />
                        <Tab value="three" label="الفعاليات" />
                    </Tabs>
                </Box>
            </Box>
            <Box className='card-slider-container'>
                <Swiper
                    slidesPerView={3}
                    speed={800}
                    // spaceBetween={-280}
                    spaceBetween={-180}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={{
                    clickable: true,
                    }}
                    loop={true}
                    modules={[ Navigation]}
                    className="card-swiper-slider"
                >
                        {sliderImages.map((slider, index) => 
                        <SwiperSlide key={index}>
                            <Box className='card-slider-box'>
                                <Box className='card-slider_header'>
                                    <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
                                    <Box className='card-slider_author'>
                                        <Typography variant='h4'>عن المركز</Typography>
                                        <Typography>@ajelnews24</Typography>
                                    </Box>
                                    <IconButton >
                                        <MoreHorizIcon />
                                    </IconButton>
                                </Box>
                                <Box className='card-slider_body'>
                                     <Typography variant='h4'>{slider.title}</Typography>
                                     <Typography>{slider.content}</Typography>
                                </Box>
                                <Box className='card-slider_media'>
                                    <Typography>Translate Tweet</Typography>
                                    <img src={slider.img} alt="" />
                                </Box>
                            </Box>
                        </SwiperSlide>
                        )}
                </Swiper>
            </Box>
        </>
    );
};

export default CardSlider;




