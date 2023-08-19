import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import './Component.css'
import profile from '../assets/img.jpeg'

const Profile = () => {
    return (
        <Container className='container'>
            <Box className='profile'>
                <Grid container className='justify-content-between align-items-center'>
                    <Grid xs={12} md={4}>
                        <Box className='imgBox'>
                            <img src={profile} className='profileImg' alt='profile not found' />
                        </Box>
                    </Grid>
                    <Grid xs={12} md={7} className='profileContent mt-1'>
                        <Typography variant='p' className='attractive-heading px-4 py-2 fw-bold'>About Me</Typography>
                        {/* <Typography className='about mt-3'>
                            Hi, my name is <strong>Nisha Tiwari</strong> I'm a Creative / Full Stack Developer from the Noida.
                            Over the years I developed a skill set in a range of technologies and frameworks, including
                            <strong>ReactJs</strong>, <strong>AngularJS</strong>, <strong>Bootstrap</strong>, <strong>NodeJs</strong>,
                            <strong> ExpressJs</strong> and <strong>MongoDB</strong>. Where I really value clean and readable code.
                            Also I'm very passionate about <strong>UX / UI</strong>. I enjoy playing sports and I'm a little 
                            bit of a geek now and then.
                        </Typography> */}
                        <Typography className='about mt-3'>
                            Hi, my name is <strong>Nisha Tiwari</strong> I'm an allround web developer. I am a senior programmer 
                            with good knowledge of front-end and backend techniques. I love structure and order and I also stand 
                            for quality. I love spending time on fixing little details and optimizing web apps. Also I like 
                            working in a team, you'll learn faster and more. As the saying goes: 'two heads are better than one'.
                        </Typography>
                    </Grid>
                </Grid>

            </Box>
        </Container>
    )
}

export default Profile
