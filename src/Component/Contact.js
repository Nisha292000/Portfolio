import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import './Component.css';

const Contact = () => {
    return (
        <Box className='contact'>
            <Container>
                <Box className='text-center'>
                    <Typography variant='h2' className='fw-bold header'>Get in Touch</Typography>
                    <Typography className='quote'>
                        “If I had asked people what they wanted, they would have said faster horses.”
                    </Typography>
                    <Typography className='quote fw-bold'>- Henry Ford</Typography>
                </Box>

                <Grid container spacing={0} className='contact-links'>
                    <Grid item xs={12} sm={6} md={3} className='p-2'>
                        <a href='https://www.linkedin.com/in/nisha-tiwari-565671208/' className='contact-link'>
                            <i className='bi bi-linkedin'></i> LinkedIn
                        </a>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} className='p-2'>
                        <a href='https://github.com/Nisha292000' className='contact-link'>
                            <i className='bi bi-github'></i> GitHub
                        </a>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} className='p-2'>
                        <a href='https://www.facebook.com/profile.php?id=100010033516992&mibextid=9R9pXO' className='contact-link'>
                            <i className='bi bi-facebook'></i> Facebook
                        </a>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} className='p-2'>
                        <a href='mailto:nt200029@example.com' className='contact-link'>
                            <i className='bi bi-envelope'></i> Email
                        </a>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Contact;