import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';

const WhoWeAre = () => {
  const content = `We are your digital lending partner that ensures you are financially empowered and feel secure the moment you receive funds. Now you no longer have to wait for your paycheck to get credited. We are here to help you solve this!`;

  const words = content.split(' '); // Split the content into words
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  // Intersection observer to trigger animation when the component comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Trigger animation when visible
          } else {
            setIsVisible(false); // Reset animation when not visible
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{
        position: 'relative',
        backgroundColor: "#f9f9f9",
        padding: { xs: '20px', sm: '30px' },
        overflow: 'hidden',
      }}
    >
      {/* Marquee: Scrolling text */}
      <Box 
        sx={{ 
          overflow: 'hidden', 
          whiteSpace: 'nowrap', 
          width: '100%', 
          backgroundColor: '#f9f9f9', 
          py: 1, 
          zIndex: 2, // Ensure it's above other content
        }}
      >
        <Typography
          variant="body1"
          sx={{
            display: 'inline-block',
            animation: 'scroll-text 20s linear infinite',
            fontSize: { xs: '14px', sm: '25px' },
            color: 'black ',
            fontWeight: 700,
            textAlign: 'center',
          }}
        >
          * Immediate Approval * Minimal Documentation * 100% Transparent & Safe * Support Assistance




        </Typography>

        {/* Keyframe animation for scrolling text */}
        <style>
          {`
            @keyframes scroll-text {
              from {
                transform: translateX(100%);
              }
              to {
                transform: translateX(-100%);
              }
            }
          `}
        </style>
      </Box>

      {/* Left Section: Heading */}
      <Box
  sx={{
    textAlign: 'left',
    mt: { xs: 2, sm: 3 }, // Reduced top margin for small screens
  }}
>
  {/* Right part of the content (Description Text) */}
  <Box
    sx={{
      display: 'flex', // Apply flexbox layout
      flexDirection: { xs: 'column', sm: 'row' }, // Stack items vertically on small screens and horizontally on larger screens
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: "#f9f9f9",
      padding: { xs: '20px', sm: '30px' },
      overflow: 'hidden',
    }}
  >
    {/* Left Section: Heading */}
    <Box
      sx={{
        textAlign: 'left',
        flex: 1, // Take up equal space in the flex container
        marginBottom: { xs: 2, sm: 0 }, // Reduced margin bottom on small screens
      }}
    >
      <Typography
        variant="h2"
        color="black"
        mb={1}
        sx={{
          mb:{xs:0,md:25},
                    marginLeft: { xs: 2, sm: 5 },
          fontSize: { xs: '1.2rem', sm: '2rem', md: '2rem' }, // Adjust font size based on screen size
        }}
      >
        Who Are We?
      </Typography>
    </Box>

    {/* Right Section: Description Text */}
    <Box
      sx={{
        flex: 2, // Take up more space than the heading
        textAlign: 'left',
      }}
    >
      <Box sx={{ display: 'inline-block', textAlign: 'left', mb: 3 }}>
        {words.map((word, index) => (
          <Typography
            key={index}
            fontSize={{ xs: '14px', sm: '20px' }} // Adjust font size of words for smaller screens
            lineHeight={{ xs: '25px', lg: '40px', md: '30px' }}
            fontWeight={50}
            sx={{
              fontWeight: 540,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: `opacity 0.3s ease ${index * 0.01}s, transform 0.3s ease ${index * 0.01}s`,
              display: 'inline-block',
              margin: '0 5px',
            }}
          >
            {word}
          </Typography>
        ))}
      </Box>

      {/* Read More Button */}
<Box
  sx={{
    display: 'flex',
    justifyContent:{xs:'center',md:"left"}, // Center the button horizontally
    alignItems:{xs:'center',md:"left"}, // Center the button vertically (optional, depending on layout)
    mt: 3, // Add some margin top if needed
  }}
>
  <Button
    variant="contained"
    href="/about-us" // Add your 'About Us' page link here
    sx={{
      backgroundColor: 'rgb(47, 47, 47)',
      color: 'white',
      borderRadius: '80px',
      fontWeight: 'bold',
      fontSize: { xs: '14px', sm: '16px' },
      padding: { xs: '8px 16px', sm: '6px 30px' },
      '&:hover': {
        backgroundColor: '#fc8403',
        color: 'black',
      },
    }}
  >
    Read More
  </Button>
</Box>

    </Box>
  </Box>
</Box>

    </Box>
  );
};

export default WhoWeAre;
