import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

const Education = () => {
  const educationItems = [
    {
      university: 'Govt. Girl Senior Secondary School',
      year: 'Graduated: March 2016',
      course: '10th',
      about: 'Completed 10th grade at Govt. Girl Senior Secondary School, building a solid academic foundation and honing critical thinking abilities.',
    },
    {
      university: 'New Rainbow Public School',
      year: 'Graduated: March 2018',
      course: '12th',
      about: 'Finished 12th grade at New Rainbow Public School, developing a passion for learning and gaining comprehensive subject knowledge.',
    },
    {
      university: 'Indira Gandhi National Open University',
      year: 'Graduated: December 2021',
      course: 'Bachelor of Computer Applications',
      about: 'Earned a Bachelor\'s degree in Computer Applications from Indira Gandhi National Open University, specializing in programming, databases, and software development.',
    },
    {
      university: 'Indira Gandhi National Open University',
      year: 'Graduated: December 2023',
      course: 'Master of Computer Applications',
      about: 'Achieved a Master\'s degree in Computer Applications from Indira Gandhi National Open University, specializing in advanced topics like AI and software engineering.',
    },
  ];

  return (
    <Box className="education">
      <Container className='mb-5'>
        <Box className='text-center'>
          <Typography variant='h2' className='fw-bold header'>Education</Typography>
          <Typography className='quote'>
            “Protons give an atom its identity, electrons its personality.”
          </Typography>
          <Typography className='quote fw-bold'>- Bill Bryson, A short history of nearly everything</Typography>
        </Box>

        {educationItems.map((item, index) => (
          <Box key={index} className='education-item'>
            <Grid container spacing={3}>
              <Grid item xs={12} md={5}>
                <Typography variant='h4' className="education-title">{item.university}</Typography>
                <Typography className="education-year">{item.year}</Typography>
              </Grid>
              <Grid item xs={12} md={7}>
                <Typography variant='h4' className="education-course">{item.course}</Typography>
                <Typography className="education-about">{item.about}</Typography>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Container>
    </Box>
  );
}

export default Education;
