import { Box, Container } from '@mui/material';
import React from 'react';
import multiselectorImg from '../../../assets/images/multiselector/multiselector.svg';
import '../../../assets/styles/Home.css';

const MultiSelectorImage = () => {
    return (
        <>
        <Container>
            <Box className='multiselector_media-container'>
                <img src={multiselectorImg} alt="" />
            </Box>   
        </Container>
        </>
    );
};

export default MultiSelectorImage;