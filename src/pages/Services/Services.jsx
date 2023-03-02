import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import ServiceCard from './components/ServiceCard';
import ServiceNavigation from './components/ServiceNavigation';

const Services = () => {
    return (
        <>
        <Header />
        <br /><br /><br />
        <Container>
         <Box>
             <Grid container spacing={0}>
                <Grid item xs={8}>
                    <ServiceCard />
                </Grid>
                <Grid item xs={4}>
                    <ServiceNavigation />
                </Grid>
             </Grid>
         </Box>   
        </Container>
        <br /><br /><br />
        <br /><br /><br />
        <br /><br /><br />
         <Footer />
        </>
    );
};

export default Services;