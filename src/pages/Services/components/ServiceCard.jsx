import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import cardImg from '../../../assets/images/hero-slider/heroimg-5.jpg';
import '../../../assets/styles/Services.css';

const servicesAll = [
    {id:1, img:cardImg, title:'الطرق اليوم حملة', text:'دشَّن المركز الوطني لسلامة الطرق بالشراكة مع القوات الخاصة لأمن  ” درب السلامة ” تزامناً مع بدء موسم الإجازة بمركز الضبط'},
    {id:2, img:cardImg, title:'الطرق اليوم حملة', text:'دشَّن المركز الوطني لسلامة الطرق بالشراكة مع القوات الخاصة لأمن  ” درب السلامة ” تزامناً مع بدء موسم الإجازة بمركز الضبط'},
    {id:3, img:cardImg, title:'الطرق اليوم حملة', text:'دشَّن المركز الوطني لسلامة الطرق بالشراكة مع القوات الخاصة لأمن  ” درب السلامة ” تزامناً مع بدء موسم الإجازة بمركز الضبط'},
    {id:4, img:cardImg, title:'الطرق اليوم حملة', text:'دشَّن المركز الوطني لسلامة الطرق بالشراكة مع القوات الخاصة لأمن  ” درب السلامة ” تزامناً مع بدء موسم الإجازة بمركز الضبط'},
    {id:5, img:cardImg, title:'الطرق اليوم حملة', text:'دشَّن المركز الوطني لسلامة الطرق بالشراكة مع القوات الخاصة لأمن  ” درب السلامة ” تزامناً مع بدء موسم الإجازة بمركز الضبط'},
    {id:6, img:cardImg, title:'الطرق اليوم حملة', text:'دشَّن المركز الوطني لسلامة الطرق بالشراكة مع القوات الخاصة لأمن  ” درب السلامة ” تزامناً مع بدء موسم الإجازة بمركز الضبط'},
]

const ServiceCard = () => {
    return (
        <>
            <Box >
                <Grid container rowSpacing={5} columnSpacing={3}>
                    {servicesAll.map((service, index) => 
                    <Grid key={index} item xs={4}>
                        <Box className='service-card-container'>
                            <Card className='service-cards' sx={{ maxWidth: 345 }}>
                                <CardMedia
                                className='service-card_media'
                                    sx={{ height: 200 }}
                                    image={service.img}
                                    title={service.title}
                                />
                                <CardContent className='service-card_content'>
                                    <Typography variant="h5" >
                                    {service.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    {service.text}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>
                    </Grid>
                    )}
                </Grid>
            </Box>   
        </>
    );
};

export default ServiceCard;