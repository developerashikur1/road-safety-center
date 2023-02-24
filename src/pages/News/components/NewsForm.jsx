import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';
import '../../../assets/styles/News.css';

const NewsForm = () => {
    return (
        <>
            <Box className='news-form-section-container'>
                <Box className='news-form-parent-container'>
                    <Box className='news-form-child-container'>
                        <Box className=''>
                            <Typography>الاسم</Typography>
                            <TextField fullWidth id="outlined-basic" variant="outlined" />
                        </Box>
                        <Box className=''>
                            <Typography>البريد الالكتروني</Typography>
                            <TextField fullWidth id="outlined-basic" variant="outlined" />
                        </Box>
                        <Button fullWidth>ابقيني مطلع</Button>
                        <Typography>ترسل الاخبار، فعاليات ودورات والتوعية بشكل الي والنشرة لكل شهر </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default NewsForm;