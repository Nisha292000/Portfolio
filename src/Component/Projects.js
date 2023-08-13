import { Box, Container, Grid, Link, Typography } from '@mui/material';
import React from 'react';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';
import project5 from '../assets/project5.png';
import project6 from '../assets/project6.png';

const Projects = () => {
    const projects = [
        {
            imageUrl: project1, name: 'Asann',
            description: 'Description for Project 1',
            language: 'HTML5, CSS3, Bootstrap, Angular, Firebase',
            link: 'https://arsann.com/'
        },
        {
            imageUrl: project2,
            name: 'HoaResort',
            description: 'Description for Project 1',
            language: 'HTML5, CSS3, Bootstrap, JavaScript',
            link: 'https://hoaresort.com/'
        },
        {
            imageUrl: project3,
            name: 'Agarwal Estate',
            description: 'Description for Project 1',
            language: 'HTML, CSS, ',
            link: 'http://www.zerochaos.in/'
        },
        {
            imageUrl: project4,
            name: 'Gowala',
            description: 'Description for Project 1',
            language: 'Ant Deasign, React Bootstrap',
            link: 'https://gowala.netlify.app/'
        },
        {
            imageUrl: project5,
            name: 'Mera Bharat',
            description: 'Description for Project 1',
            language: 'HTML5, CSS3, Bootstrap 4',
            link: 'https://indianhistoricalplace.netlify.app/'
        },
        {
            imageUrl: project6,
            name: 'Slideshow App',
            description: 'Description for Project 1',
            language: 'ReactJs',
            link: 'https://reactslideshow.netlify.app/'
        },
    ];

    return (
        <>
            <Container className='projects mb-5'>
                <Box className='text-center'>
                    <Typography variant='h2' className='fw-bold header'>Projects</Typography>
                    <Typography className='quote'>“You can do anything you set your mind to.”</Typography>
                    <Typography className='quote fw-bold'>- Benjamin Franklin</Typography>
                </Box>

                <Grid container spacing={5} className='mt-5'>
                    {projects.map((project, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <Link href={project.link} target='_blank'>
                                <div className='image-container'>
                                    <img
                                        src={project.imageUrl}
                                        alt='img not found'
                                        className='project-image'
                                    />
                                    <div className='overlay'>
                                        <Typography variant='h5' className='title'>{project.name}</Typography>
                                        <div className='about'>
                                            <Typography variant='p'>{project.description}</Typography>
                                            <Typography variant='p'>Tags: {project.language}</Typography>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
}

export default Projects;
