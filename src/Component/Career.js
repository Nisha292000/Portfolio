import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import './Component.css'; // Import your custom styles

const Career = () => {
  return (
    <Box className="career">
      <Container className='mb-5'>
        <Box className='text-center'>
          <Typography variant='h2' className='fw-bold header'>My Portfolio</Typography>
          <Typography className='quote'>
            <em>“The only way to do great work is to love what you do.”</em>
          </Typography>
          <Typography className='quote fw-bold'>- Steve Jobs</Typography>
        </Box>

        <section className="portfolio">
          <h3>Featured Projects</h3>
          <div className="project">
            <h4>Project Title</h4>
            <p>Project description goes here...</p>
            <a href="#project-details">View Details</a>
          </div>

          <div className="project">
            <h4>Another Project</h4>
            <p>This is another project description...</p>
            <a href="#project-details">View Details</a>
          </div>

          {/* Add more projects */}
        </section>
      </Container>
    </Box>
  );
}

export default Career;
