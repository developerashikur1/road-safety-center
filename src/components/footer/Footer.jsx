import CallIcon from '@mui/icons-material/Call';
import LanguageIcon from '@mui/icons-material/Language';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import footerLogo from '../../assets/images/footer-logo.png';
import locationImg from '../../assets/images/location.png';
import '../../assets/styles/Footer.css';


const Footer = () => {
    return (
        <>
            <Box className='footer-container'>
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={6} md={2.75}>
                        <Box className='footer-details-container'>
                            <Typography variant='h4'>موقع المركز</Typography>
                            <Box className='footer-location-media'>
                                <img src={locationImg} alt="" />
                            </Box>
                            <Box className='footer-locatin_content'>
                                <LocationOnIcon />
                                <Typography>طريق الملك فهد، برج8592 توليب العليا،الرياض12333-3802،المملكة العربية السعودية</Typography>
                            </Box>  
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2.85}>
                        <Box className='footer-contacts-container'>
                            <Typography variant='h4'>معلومات التواصل</Typography>
                            <Box className='footer-contact_content'>
                                <TwitterIcon />
                                <Typography>https://twitter/SaudiNRSC</Typography>
                            </Box>
                            <Box className='footer-contact_content'>
                                <LanguageIcon />
                                <Typography>https://nrsc.gov.sa/p6452/</Typography>
                            </Box>
                            <Box className='footer-contact_content'>
                                <CallIcon />
                                <Typography>0505502028</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2.65}>
                        <Box className='footer-external-links-container'>
                            <Typography variant='h4'>روابط خارجية</Typography>
                            <Link to='/'><Typography>وزارة النقل والخدمات اللوجستية</Typography></Link>
                            <Link to='/'><Typography>الهيئة العامة للنقل</Typography></Link>
                            <Link to='/'><Typography>وزارة الصحة</Typography></Link>
                            <Link to='/'><Typography>وزارة الشؤون القروية والبلدية</Typography></Link>
                            <Link to='/'><Typography>وزارة التعليم</Typography></Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2}>
                        <Box className='footer-quick-links-container'>
                            <Typography variant='h4'>روابط سريعة</Typography>
                            <Link to='/'><Typography>عن المركز</Typography></Link>
                            <Link to='/'><Typography>المركز الاعلامي</Typography></Link>
                            <Link to='/'><Typography>التدريب</Typography></Link>
                            <Link to='/'><Typography>الاعتماد المهني</Typography></Link>
                            <Link to='/'><Typography>التوعية</Typography></Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={1.55}>
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