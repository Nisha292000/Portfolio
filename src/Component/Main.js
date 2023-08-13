import { Box, Typography } from '@mui/material'
import React from 'react'
import './Component.css';

const Main = () => {
  return (
    <>
      <Box className='main text-light'>
        <Typography variant='h2'>Nisha Tiwari</Typography>
        <Typography variant='h4'>I'm a <span className='change_content fw-bold'></span></Typography>
      </Box>
    </>
  )
}
  
export default Main;
