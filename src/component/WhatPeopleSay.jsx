import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

// Import images
import leftImage from '../assets/image/image.png'; // Replace with your image path
import centerImage from '../assets/image/image.png'; // Replace with your image path
import rightImage from '../assets/image/image.png'; // Replace with your image path

const WhatPeopleSay = () => {
  return (
    <Box sx={{ paddingX: { xs: 2, sm: 12 }, textAlign: 'center', background: '#f9f9f9' }}>
      {/* Heading Section */}
      <Typography variant="h4" color="black" mb={2}>
        What People Say
      </Typography>
      <Typography variant="h5" color="textSecondary" mb={4} sx={{paddingX: { xs: 2, sm: 12 }}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
      </Typography>

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
                Lorem Ipsum
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Lorem Ipsum is simply dummy text of the printing and typesetting.
              </Typography>
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
                height: '80%', // Further increased image height
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
                Lorem Ipsum
              </Typography>
              <Typography variant="body2" color="inherit">
                Lorem Ipsum is simply dummy text of the printing and typesetting.
              </Typography>
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
                Lorem Ipsum
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Lorem Ipsum is simply dummy text of the printing and typesetting.
              </Typography>
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
