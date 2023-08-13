import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
// import SchoolIcon from '@mui/icons-material/School';

const Education = () => {
  return (
    <Paper elevation={3} sx={{ p: 3, borderRadius: 8 }}>
      <Typography variant="h5" gutterBottom>
        {/* <SchoolIcon fontSize="large" /> Education */}
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6">University of Example</Typography>
          <Typography variant="body1">Bachelor of Science in Computer Science</Typography>
          <Typography color="textSecondary">2018 - 2022</Typography>
        </Box>
        <Box>
          <Typography variant="h6">High School of Imagination</Typography>
          <Typography variant="body1">High School Diploma</Typography>
          <Typography color="textSecondary">2014 - 2018</Typography>
        </Box>
      </Box>
    </Paper>
  );
}

export default Education;
