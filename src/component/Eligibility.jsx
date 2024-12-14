import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

// Import images
import eligibilityImage1 from '../assets/image/axis (1).png'; // Replace with the actual path to your image
import eligibilityImage2 from '../assets/image/axis (1).png'; // Replace with the actual path to your image
import eligibilityImage3 from '../assets/image/axis (1).png'; // Replace with the actual path to your image

const Eligibility = () => {
  return (
    <Box sx={{ textAlign: 'center', backgroundColor: "#f9f9f9" }}>
      {/* Heading */}
      <Typography variant="h4" color="black" mb={6}>
        Who is Eligible for Our Loan?
      </Typography>

      {/* Eligibility Boxes */}
      <Grid container spacing={1} justifyContent="center" sx={{ paddingY: 2, paddingX: { xs: 2, md: 12 }, display: 'flex', justifyContent: 'center' }}>
      {/* First Box */}
        <Grid item xs={12} sm={4} md={4}>
          <Box
            sx={{
              backgroundColor: '#EFD3D3',
              padding: 4, // Increased padding for a larger look
              borderRadius: '20px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
              height: '400px', // Increased height
              width: '90%', // Increased width
              margin: '0 5px', // Reduced margin between boxes
            }}
          >
            <img
              src={eligibilityImage1}
              alt="Eligibility Criteria 1"
              style={{ width: '120px', height: '120px', marginBottom: '30px' }} // Larger image
            />
            <Typography variant="h5" color="textSecondary">
              Those who don’t have a good credit score.
            </Typography>
          </Box>
        </Grid>

        {/* Second Box */}
        <Grid item xs={12} sm={4} md={4}>
          <Box
            sx={{
              backgroundColor: '#D9D9D9',
              padding: 4, // Increased padding
              borderRadius: '20px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
              height: '400px', // Increased height
              width: '90%', // Increased width
              margin: '0 5px', // Reduced margin
            }}
          >
            <img
              src={eligibilityImage2}
              alt="Eligibility Criteria 2"
              style={{ width: '120px', height: '120px', marginBottom: '30px' }} // Larger image
            />
            <Typography variant="h5" color="textSecondary">
              Those who weren’t able to get a secured loan.
            </Typography>
          </Box>
        </Grid>

        {/* Third Box */}
        <Grid item xs={12} sm={4} md={4}>
          <Box
            sx={{
              backgroundColor: '#ABC8CB',
              padding: 4, // Increased padding
              borderRadius: '20px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
              height: '400px', // Increased height
              width: '90%', // Increased width
              margin: '0 5px', // Reduced margin
            }}
          >
            <img
              src={eligibilityImage3}
              alt="Eligibility Criteria 3"
              style={{ width: '120px', height: '120px', marginBottom: '30px' }} // Larger image
            />
            <Typography variant="h5" color="textSecondary">
              Those who have no other resources to avail personal loans.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Eligibility;
