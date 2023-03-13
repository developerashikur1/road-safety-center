import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Box, Button, ButtonGroup, Card, CardContent, CardMedia, Grid, TextField, Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
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
    {id:7, img:cardImg, title:'الطرق اليوم حملة', text:'دشَّن المركز الوطني لسلامة الطرق بالشراكة مع القوات الخاصة لأمن  ” درب السلامة ” تزامناً مع بدء موسم الإجازة بمركز الضبط'},
    {id:8, img:cardImg, title:'الطرق اليوم حملة', text:'دشَّن المركز الوطني لسلامة الطرق بالشراكة مع القوات الخاصة لأمن  ” درب السلامة ” تزامناً مع بدء موسم الإجازة بمركز الضبط'},
    {id:9, img:cardImg, title:'الطرق اليوم حملة', text:'دشَّن المركز الوطني لسلامة الطرق بالشراكة مع القوات الخاصة لأمن  ” درب السلامة ” تزامناً مع بدء موسم الإجازة بمركز الضبط'},
    {id:10, img:cardImg, title:'الطرق اليوم حملة', text:'دشَّن المركز الوطني لسلامة الطرق بالشراكة مع القوات الخاصة لأمن  ” درب السلامة ” تزامناً مع بدء موسم الإجازة بمركز الضبط'},
    // {id:11, img:cardImg, title:'الطرق اليوم حملة', text:'دشَّن المركز الوطني لسلامة الطرق بالشراكة مع القوات الخاصة لأمن  ” درب السلامة ” تزامناً مع بدء موسم الإجازة بمركز الضبط'},
    // {id:12, img:cardImg, title:'الطرق اليوم حملة', text:'دشَّن المركز الوطني لسلامة الطرق بالشراكة مع القوات الخاصة لأمن  ” درب السلامة ” تزامناً مع بدء موسم الإجازة بمركز الضبط'},
    // {id:13, img:cardImg, title:'الطرق اليوم حملة', text:'دشَّن المركز الوطني لسلامة الطرق بالشراكة مع القوات الخاصة لأمن  ” درب السلامة ” تزامناً مع بدء موسم الإجازة بمركز الضبط'},
    // {id:14, img:cardImg, title:'الطرق اليوم حملة', text:'دشَّن المركز الوطني لسلامة الطرق بالشراكة مع القوات الخاصة لأمن  ” درب السلامة ” تزامناً مع بدء موسم الإجازة بمركز الضبط'},
    // {id:15, img:cardImg, title:'الطرق اليوم حملة', text:'دشَّن المركز الوطني لسلامة الطرق بالشراكة مع القوات الخاصة لأمن  ” درب السلامة ” تزامناً مع بدء موسم الإجازة بمركز الضبط'},
    // {id:16, img:cardImg, title:'الطرق اليوم حملة', text:'دشَّن المركز الوطني لسلامة الطرق بالشراكة مع القوات الخاصة لأمن  ” درب السلامة ” تزامناً مع بدء موسم الإجازة بمركز الضبط'},
    // {id:17, img:cardImg, title:'الطرق اليوم حملة', text:'دشَّن المركز الوطني لسلامة الطرق بالشراكة مع القوات الخاصة لأمن  ” درب السلامة ” تزامناً مع بدء موسم الإجازة بمركز الضبط'},
    // {id:18, img:cardImg, title:'الطرق اليوم حملة', text:'دشَّن المركز الوطني لسلامة الطرق بالشراكة مع القوات الخاصة لأمن  ” درب السلامة ” تزامناً مع بدء موسم الإجازة بمركز الضبط'},
    // {id:19, img:cardImg, title:'الطرق اليوم حملة', text:'دشَّن المركز الوطني لسلامة الطرق بالشراكة مع القوات الخاصة لأمن  ” درب السلامة ” تزامناً مع بدء موسم الإجازة بمركز الضبط'},
    // {id:20, img:cardImg, title:'الطرق اليوم حملة', text:'دشَّن المركز الوطني لسلامة الطرق بالشراكة مع القوات الخاصة لأمن  ” درب السلامة ” تزامناً مع بدء موسم الإجازة بمركز الضبط'},
    // {id:21, img:cardImg, title:'الطرق اليوم حملة', text:'دشَّن المركز الوطني لسلامة الطرق بالشراكة مع القوات الخاصة لأمن  ” درب السلامة ” تزامناً مع بدء موسم الإجازة بمركز الضبط'},
    // {id:22, img:cardImg, title:'الطرق اليوم حملة', text:'دشَّن المركز الوطني لسلامة الطرق بالشراكة مع القوات الخاصة لأمن  ” درب السلامة ” تزامناً مع بدء موسم الإجازة بمركز الضبط'},
    // {id:23, img:cardImg, title:'الطرق اليوم حملة', text:'دشَّن المركز الوطني لسلامة الطرق بالشراكة مع القوات الخاصة لأمن  ” درب السلامة ” تزامناً مع بدء موسم الإجازة بمركز الضبط'},
    // {id:24, img:cardImg, title:'الطرق اليوم حملة', text:'دشَّن المركز الوطني لسلامة الطرق بالشراكة مع القوات الخاصة لأمن  ” درب السلامة ” تزامناً مع بدء موسم الإجازة بمركز الضبط'},
    // {id:25, img:cardImg, title:'الطرق اليوم حملة', text:'دشَّن المركز الوطني لسلامة الطرق بالشراكة مع القوات الخاصة لأمن  ” درب السلامة ” تزامناً مع بدء موسم الإجازة بمركز الضبط'},
]

const ServiceCard = () => {
    

    const handleDownloadImg = (imgUrl, imgTitle) => {
        // create an <a> element with the image data and download attribute
        const link = document.createElement("a");
        link.download = `${imgTitle}.jpg`;
        link.href = imgUrl;
        // simulate a click on the <a> element to download the image
        link.click();
      };

      const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };


    return (
        <>
            <Box className='sv-sorting-container' sx={{pb:6}}>
                <Grid alignItems='center' justifyContent='center' container spacing={3}>
                    <Grid item xs={12} md={2}>
                        <ButtonGroup className='sv-variant-btn' variant="text" aria-label="text button group">
                            <Button size='small'>Newest</Button>
                            <Button size='small'>Oldest</Button>
                        </ButtonGroup>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <TextField className='sv-search-filed' fullWidth placeholder='Search' variant="outlined" />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Box className='sv-sorting-filter'>
                            <Typography>Filter: </Typography>
                            <FormControl fullWidth>
                                <Select
                                    // labelId="demo-simple-select-label"
                                    // id="demo-simple-select"
                                    value={age}
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box >
                <Grid container spacing={3}>
                    {servicesAll.map((service, index) => 
                    <Grid key={index} item xs={12} sm={4} md={2.4}>
                        <Box className='service-card-container'>
                            <Card className='service-cards' sx={{ maxWidth: 345 }}>
                                <CardMedia
                                className='service-card_media'
                                    sx={{ height: {xs:220, sm:160, md:140} }}
                                    image={service.img}
                                    title={service.title}
                                />
                                <CardContent className='service-card_content'>
                                    <Button onClick={() => handleDownloadImg(service.img, service.title)}>
                                    <FileDownloadIcon /> &nbsp;  المركز 
                                    </Button>
                                    <Typography variant="h5" >
                                    {service.title}
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