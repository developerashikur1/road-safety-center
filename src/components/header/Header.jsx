import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import headerLogo from '../../assets/images/footer-logo.png';
import '../../assets/styles/Header.css';


const Header = () => {
    const [active, setActive] = React.useState(1);
    


    const handleChange = (newValue) => {
      setActive(newValue);
    };
    return (
        <>
            <Box className='header-container'>
                <Grid alignItems="center" container spacing={0}>
                    <Grid item xs={3}>
                        <Box className='header-lang-search-container'>
                            <Typography>EN</Typography>
                            <Button><SearchIcon /></Button>
                        </Box>
                    </Grid>
                    <Grid item xs={9}></Grid>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={6}>
                        <Box className='header-menus-container'>
                            <Box>
                                <Link to="/"><Button onClick={() => handleChange(1)} className={`header-menu-btn ${active === 1 && 'activated'}`} variant="text">المركز الإعلامي</Button></Link>

                                <Link to="/"><Button onClick={() => handleChange(2)} className={`header-menu-btn ${active === 2 && 'activated'}`} variant="text">خدماتنا</Button></Link>

                                <Link to="/"><Button onClick={() => handleChange(3)} className={`header-menu-btn ${active === 3 && 'activated'}`} variant="text">مكتبة</Button></Link>

                                <Link to="/"><Button onClick={() => handleChange(4)} className={`header-menu-btn ${active === 4 && 'activated'}`} variant="text">عن المركز</Button></Link>

                                <Link to="/"><Button onClick={() => handleChange(5)} className={`header-menu-btn ${active === 5 && 'activated'}`} variant="text">الصفحة الرئيسية</Button></Link>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box className='header-menu-logo-container'>
                            <img src={headerLogo} alt="" />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Header;