import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

// Import images
import leftImage from '../assets/image/1 (1).png'; // Replace with your image path
import centerImage from '../assets/image/2 (1).png'; // Replace with your image path
import rightImage from '../assets/image/3 (1).png'; // Replace with your image path

const WhatPeopleSay = () => {
  return (
    <Box sx={{ paddingX: { xs: 2, sm: 12 }, textAlign: 'center', background: '#f9f9f9' }}>
      {/* Heading Section */}
      <Typography variant="h4" color="black" mb={2}>
        What People Say
      </Typography>
      <Typography variant="h5" color="textSecondary" mb={4} sx={{paddingX: { xs: 2, sm: 12 }}}>
      Real stories, real trust, real transformation - all come with real results - Fundswalle became a game-changer for their financial journeys.      </Typography>

      <Grid container spacing={3} justifyContent="center" alignItems="stretch">
        {/* Left Side */}
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
              overflow: 'hidden',
              p: 2,
            }}
          >
            <Box
              sx={{
                padding: 4,
                border: '2px solid transparent',
                background: '#EFD3D3',
                marginTop: '-12px', // Adjusted margin for upward shift
                borderRadius: 4,
                flex: 1, // Ensures equal height for the content box
              }}
            >
              <Typography variant="h5" color="black" mb={1}>
              Priya Shukla  
               </Typography>
              <Typography variant="body2" color="textSecondary">
              I had a great experience with the loan disbursement process. The team was very
professional and explained everything in detail. My loan was approved quickly,
and the disbursement happened within 10 mins, as promised.              </Typography>
            </Box>
            <Box sx={{ mt: 2, flex: 1 }}>
              <img
                src={leftImage}
                alt="Left Content"
                style={{
                  width: '100%',
                  height: '70%', // Further increased image height
                  borderRadius: 10,
                  objectFit: 'cover', // Ensures the image fits within the box
                }}
              />
            </Box>
          </Box>
        </Grid>

        {/* Center */}
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              height: '100%',
              position: 'relative',
              borderRadius: '8px',
              overflow: 'hidden',
            }}
          >
            <img
              src={centerImage}
              alt="Center Content"
              style={{
                width: '100%',
                height: '73%', // Further increased image height
                objectFit: 'cover',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                mt: -13,
                borderRadius: 1,
                background:
                           'linear-gradient(0deg, #000000, #000000), linear-gradient(180deg, rgba(0, 0, 0, 0) 55.31%, #000000 67.03%)',
                color: 'white',
                p: 2,
                boxShadow: '0 -10px 20px rgba(0, 0, 0, 0.8)', // Stronger shadow upwards
              }}
            >
              <Typography variant="h5" color="inherit">
                    Ravi Gaur          
              </Typography>
              <Typography variant="body2" color="inherit">
              From applying for the loan to getting the funds in my account, I had an amazing
experience! The entire process was very smooth. The staff was polite and guided
me at each step of the procedure.               </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Right Side */}
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
              overflow: 'hidden',
              p: 2,
            }}
          >
            <Box
              sx={{
                padding: 4,
                border: '2px solid transparent',
                background: '#EFD3D3',
                marginTop: '-12px', // Adjusted margin for upward shift
                borderRadius: 4,
                flex: 1, // Ensures equal height for the content box
              }}
            >
              <Typography variant="h5" color="black" mb={1}>
            	Rohit Dandotiya       
                  </Typography>
              <Typography variant="body2" color="textSecondary">
              It’s rare to come across such credible financial providers as the staff I found here.
They were really understanding and transferred us the money we required
immediately without making us go through any long processes.                            </Typography>
            </Box>
            <Box sx={{ mt: 2, flex: 1 ,borderRadius:10}}>
              <img
                src={rightImage}
                alt="Right Content"
                style={{
                  width: '100%',
                  height: '70%', // Further increased image height
                  borderRadius: 10,
                  objectFit: 'cover', // Ensures the image fits within the box
                }}
              />
            </Box>
          </Box>
        </Grid>

      </Grid>
    </Box>
  );
};

export default WhatPeopleSay;
