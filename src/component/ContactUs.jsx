import React from 'react';
import { TextField, Button, Grid, Typography, Box } from '@mui/material';
import Swal from 'sweetalert2';

const AboutUs = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    Swal.fire({
      icon: 'success',
      title: 'Thank You!',
      text: 'We will get in touch with you soon.',
      confirmButtonText: 'OK',
    });
  };

  return (
    <Box
      sx={{
      
        backgroundColor: '#f9f9f9',
        minHeight: '100vh',
        paddingX: 3,
        paddingY:1,
      }}
    >
      

      {/* Content Section */}
      <Box
        sx={{
          marginTop:{xs:4,md:4},
          background: '  #ABC8CB',
          minHeight: '100vh',
          borderRadius:7
        }}
      >
        <Grid container spacing={4}>
          {/* Left Section */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              sx={{
                color: '#444',
                mb: 2,
                ml:5,
                fontSize: { xs: '24px', md: '3.3rem' },
              }}
            >
              Let's Connect
            </Typography>
            <Box
  sx={{
    ml:3,
    padding: '20px',
    borderRadius: 15,
  }}
>
  <Grid container spacing={2}>
    {/* Mobile and Email in the first row */}
    <Grid item xs={12} sm={6}>
      <Typography
        sx={{
          fontSize: '1.5rem',
          mb: 1,
        }}
      >
        Mobile
      </Typography>
      <Typography sx={{ mb: 1 }}>+91 7042334888</Typography>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Typography
        sx={{
          fontSize: '1.5rem',
          mb: 1,
        }}
      >
        Email
      </Typography>
      <Typography sx={{ mb: 1 }}>info@fundswalle.com</Typography>
    </Grid>

    {/* Reach Us in the second row */}
    <Grid item xs={12}>
      <Typography
        sx={{
          mt:{xs:5,md:12},
          fontSize: '1.5rem',
          mb: 1,
        }}
      >
     Reach Us 

      </Typography>
      <Typography> 1710, 17th Floor, World Trade Tower,</Typography>
      <Typography>Sector-16, Noida, Uttar Pradesh - 201301
      </Typography>
    </Grid>
  </Grid>
</Box>

          </Grid>

          {/* Right Section: Form */}
          <Grid item xs={12} md={5.6}>
                    <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              marginTop:6,
              background: 'rgba(255, 255, 255, 0.9)',
              padding: 6,
              borderRadius: 7,
              boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.15)',
            }}
          >
           
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Full Name"
                  variant="outlined"
                  fullWidth
                  required
                  sx={{
                    '& .MuiInputBase-input': {
                      fontSize: '16px',
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Email"
                  type="email"
                  variant="outlined"
                  fullWidth
                  required
                  sx={{
                    '& .MuiInputBase-input': {
                      fontSize: '16px',
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Phone Number"
                  type="tel"
                  variant="outlined"
                  fullWidth
                  required
                  sx={{
                    '& .MuiInputBase-input': {
                      fontSize: '16px',
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Subject"
                  variant="outlined"
                  fullWidth
                  required
                  sx={{
                    '& .MuiInputBase-input': {
                      fontSize: '16px',
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Message"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  sx={{
                    '& .MuiInputBase-input': {
                      fontSize: '16px',
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{
                    backgroundColor: '#444',
                    color: '#fff',
                    padding: '10px',
                    '&:hover': {
                      backgroundColor: 'white',
                      color:'black'
                    },
                  }}
                >
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </Box>

          </Grid>
        </Grid>
      </Box>

      {/* Google Map Section */}
      <Box
        sx={{
          paddingX:1,
          display: 'flex',
          mb: { xs: -5, md: 0}, // Add margin-bottom for small screens only
          mt:{xs:5,md:5}
        }}
      >
        <Box
          component="iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3435.012190060276!2d77.36625474937759!3d28.570626083222425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a57f3f6f1f%3A0xa1c0ad1211f34090!2sWorld%20Trade%20Tower%2C%20Sector%2016%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sus!4v1614693744843"
          allowFullScreen
          loading="lazy"
          sx={{
            
            width: '100%',
            height: { xs: '200px', md: '300px' },
            border: 0,
            borderRadius: '30px',
          }}
        />
      </Box>
    </Box>
  );
};

export default AboutUs;
