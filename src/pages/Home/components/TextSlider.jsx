    import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
// import required modules
import { Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import '../../../assets/styles/Home.css';



const texts =[
    {id:1, title:"عن المركز", text:"تأسس المركز الوطني لسلامة الطرق في اكتوبر 2018.ويعدالمركز أحد مشاريع مبادرة سلامة الطرق لتقليل وفيات حوادث السير ضمن برنامج التحول الوطني 2020.ويهدف إلى تحسين مستويات السلامة المرورية من خلال التنسيق بين الجهات المعنية وتقديم الدعم الفني،وإعدادوتنفيذ نظام بيانات سلامة الطرق وتحديدألية جمع البيانات ذات الصلة .وسيسهم نظام البيانات في إصدار التقارير التحليلية للحوادثوالخرائط الرقمية التي تبين أماكن تكرار وقوعها .بالإضافة إلى إصدار المؤشرات الوطنية."},
    {id:2, title:"عن المركز", text:"تأسس المركز الوطني لسلامة الطرق في اكتوبر 2018.ويعدالمركز أحد مشاريع مبادرة سلامة الطرق لتقليل وفيات حوادث السير ضمن برنامج التحول الوطني 2020.ويهدف إلى تحسين مستويات السلامة المرورية من خلال التنسيق بين الجهات المعنية وتقديم الدعم الفني،وإعدادوتنفيذ نظام بيانات سلامة الطرق وتحديدألية جمع البيانات ذات الصلة .وسيسهم نظام البيانات في إصدار التقارير التحليلية للحوادثوالخرائط الرقمية التي تبين أماكن تكرار وقوعها .بالإضافة إلى إصدار المؤشرات الوطنية."},
    {id:3, title:"عن المركز", text:"تأسس المركز الوطني لسلامة الطرق في اكتوبر 2018.ويعدالمركز أحد مشاريع مبادرة سلامة الطرق لتقليل وفيات حوادث السير ضمن برنامج التحول الوطني 2020.ويهدف إلى تحسين مستويات السلامة المرورية من خلال التنسيق بين الجهات المعنية وتقديم الدعم الفني،وإعدادوتنفيذ نظام بيانات سلامة الطرق وتحديدألية جمع البيانات ذات الصلة .وسيسهم نظام البيانات في إصدار التقارير التحليلية للحوادثوالخرائط الرقمية التي تبين أماكن تكرار وقوعها .بالإضافة إلى إصدار المؤشرات الوطنية."},
    {id:4, title:"عن المركز", text:"تأسس المركز الوطني لسلامة الطرق في اكتوبر 2018.ويعدالمركز أحد مشاريع مبادرة سلامة الطرق لتقليل وفيات حوادث السير ضمن برنامج التحول الوطني 2020.ويهدف إلى تحسين مستويات السلامة المرورية من خلال التنسيق بين الجهات المعنية وتقديم الدعم الفني،وإعدادوتنفيذ نظام بيانات سلامة الطرق وتحديدألية جمع البيانات ذات الصلة .وسيسهم نظام البيانات في إصدار التقارير التحليلية للحوادثوالخرائط الرقمية التي تبين أماكن تكرار وقوعها .بالإضافة إلى إصدار المؤشرات الوطنية."},
    {id:5, title:"عن المركز", text:"تأسس المركز الوطني لسلامة الطرق في اكتوبر 2018.ويعدالمركز أحد مشاريع مبادرة سلامة الطرق لتقليل وفيات حوادث السير ضمن برنامج التحول الوطني 2020.ويهدف إلى تحسين مستويات السلامة المرورية من خلال التنسيق بين الجهات المعنية وتقديم الدعم الفني،وإعدادوتنفيذ نظام بيانات سلامة الطرق وتحديدألية جمع البيانات ذات الصلة .وسيسهم نظام البيانات في إصدار التقارير التحليلية للحوادثوالخرائط الرقمية التي تبين أماكن تكرار وقوعها .بالإضافة إلى إصدار المؤشرات الوطنية."},
    {id:6, title:"عن المركز", text:"تأسس المركز الوطني لسلامة الطرق في اكتوبر 2018.ويعدالمركز أحد مشاريع مبادرة سلامة الطرق لتقليل وفيات حوادث السير ضمن برنامج التحول الوطني 2020.ويهدف إلى تحسين مستويات السلامة المرورية من خلال التنسيق بين الجهات المعنية وتقديم الدعم الفني،وإعدادوتنفيذ نظام بيانات سلامة الطرق وتحديدألية جمع البيانات ذات الصلة .وسيسهم نظام البيانات في إصدار التقارير التحليلية للحوادثوالخرائط الرقمية التي تبين أماكن تكرار وقوعها .بالإضافة إلى إصدار المؤشرات الوطنية."},
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
                    modules={[ Navigation]}
                    className="text-swiper-slider"
                >
                    {texts.map((text) => 
                        <SwiperSlide key={text.id}>
                            <Box className='text-slider-container'>
                                <Grid alignItems="center" container spacing={0}>
                                    <Grid item xs={1.5} md={3}></Grid>
                                    <Grid item xs={9} md={6}>
                                        <Box className="text-swiper-slider_content-Box">
                                            <Typography variant="h4">{text.title}</Typography>
                                            <Typography>{text.text}</Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Grid item xs={1.5} md={3}></Grid>
                            </Box>
                        </SwiperSlide>
                    )}
                </Swiper>
            </>
        );
    };
    
    export default TextSlider;