import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import locationImg from '../../assets/images/location.png';
import footerLogo from '../../assets/images/footer-logo.png';
import '../../assets/styles/Footer.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import CallIcon from '@mui/icons-material/Call';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <>
            <Box className='footer-container'>
                <Grid container spacing={2}>
                    <Grid item xs={2.75}>
                        <Box className='footer-details-container'>
                            <Typography variant='h4'>Lorem, ipsum.</Typography>
                            <Box className='footer-location-media'>
                                <img src={locationImg} alt="" />
                            </Box>
                            <Box className='footer-locatin_content'>
                                <LocationOnIcon />
                                <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, adipisci?</Typography>
                            </Box>  
                        </Box>
                    </Grid>
                    <Grid item xs={2.75}>
                        <Box className='footer-contacts-container'>
                            <Typography variant='h4'>Title lorem</Typography>
                            <Box className='footer-contact_content'>
                                <TwitterIcon />
                                <Typography>Lorem ipsum dolor, adipisci?</Typography>
                            </Box>
                            <Box className='footer-contact_content'>
                                <LanguageIcon />
                                <Typography>Lorem ipsum dolor, adipisci?</Typography>
                            </Box>
                            <Box className='footer-contact_content'>
                                <CallIcon />
                                <Typography>Lorem ipsum dolor, adipisci?</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={2.75}>
                        <Box className='footer-external-links-container'>
                            <Typography variant='h4'>Title lorem</Typography>
                            <Link to='/'><Typography>Lorem ipsum dolor sit amet.</Typography></Link>
                            <Link to='/'><Typography>Lorem ipsum dolor sit amet.</Typography></Link>
                            <Link to='/'><Typography>Lorem ipsum dolor sit amet.</Typography></Link>
                            <Link to='/'><Typography>Lorem ipsum dolor sit amet.</Typography></Link>
                            <Link to='/'><Typography>Lorem ipsum dolor sit amet.</Typography></Link>
                            <Link to='/'><Typography>Lorem ipsum dolor sit amet.</Typography></Link>
                        </Box>
                    </Grid>
                    <Grid item xs={2.75}>
                        <Box className='footer-quick-links-container'>
                            <Typography variant='h4'>Title lorem</Typography>
                            <Link to='/'><Typography>Lorem ipsum dolor sit amet.</Typography></Link>
                            <Link to='/'><Typography>Lorem ipsum dolor sit amet.</Typography></Link>
                            <Link to='/'><Typography>Lorem ipsum dolor sit amet.</Typography></Link>
                            <Link to='/'><Typography>Lorem ipsum dolor sit amet.</Typography></Link>
                            <Link to='/'><Typography>Lorem ipsum dolor sit amet.</Typography></Link>
                            <Link to='/'><Typography>Lorem ipsum dolor sit amet.</Typography></Link>
                        </Box>
                    </Grid>
                    <Grid item xs={1}>
                        <Box className='footer-logo-container'>
                            <img src={footerLogo} alt="" />
                        </Box>
                    </Grid>
                </Grid>
            </Box>   
        </>
    );
};

export default Footer;