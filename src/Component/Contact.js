import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'

const Contact = () => {
    return (
        <Container className='contact mb-5'>
            <Box className='text-center'>
                <Typography variant='h2' className='fw-bold header'>Contact</Typography>
                <Typography className='quote'>“If I had asked people what they wanted, they would have said faster horses. ”</Typography>
                <Typography className='quote fw-bold'>- Henry Ford</Typography>
            </Box>

            <Grid container spacing={5} className='mt-5'>
                <Grid>
                    
                </Grid>
            </Grid>

        </Container>
    )
}

export default Contact
