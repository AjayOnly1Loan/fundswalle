import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  IconButton,
  AppBar,
  Toolbar,
  Box,
  Menu as MUI_Menu,
  MenuItem,
  Button,
} from '@mui/material';
import Menu from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import ApplyNowIcon from '@mui/icons-material/Assignment';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CalculateIcon from '@mui/icons-material/Calculate';
import { keyframes } from '@mui/system';

import logo from '../assets/image/Funds Wale Logo SVG.svg'; // Adjust the path based on your structure

// Blinking animation for the "Apply Now" button
const blinking = keyframes`
  0% { background-color: white; color: #240844; }
  50% { background-color: #240844; color: white; }
  100% { background-color: black; color: white; }
`;


const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          paddingTop:'10px',
          backgroundColor: '#f9f9f9',
          border: 'none',
          boxShadow: 'none',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'nowrap',
            minHeight: '80px',
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            onClick={scrollToTop}
            style={{ display: 'flex', alignItems: 'center', zIndex: 10 ,paddingLeft:{xs:6,md:4} }}
          >
            <img
              src={logo}
              alt="Logo"
              style={{
                borderRadius:15,
                width: '40%',
                height:{xs:'20%',md:'40%'} ,
                objectFit: 'contain',
                zIndex: 10,
              }}
            />
          </Link>

          {/* Mobile Menu Button */}
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleMenu}
            sx={{ display: { xs: 'block', md: 'none' }, color: '#0b2747', padding: '8px',marginRight:2 }}
          >
            <Menu />
          </IconButton>

          {/* Mobile Menu */}
          <MUI_Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            sx={{ display: { xs: 'block', md: 'none' }, '& .MuiPaper-root': { zIndex: 900 } }}
          >
            <MenuItem onClick={handleClose}>
              <Link to="/" onClick={scrollToTop} style={{ color: '#0b2747', display: 'flex', alignItems: 'center' }}>
                <HomeIcon sx={{ mr: 1 }} /> Home
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/about-us" onClick={scrollToTop} style={{ color: '#0b2747', display: 'flex', alignItems: 'center' }}>
                <InfoIcon sx={{ mr: 1 }} /> About Us
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/contact-us" onClick={scrollToTop} style={{ color: '#0b2747', display: 'flex', alignItems: 'center' }}>
                <ContactPageIcon sx={{ mr: 1 }} /> Contact Us
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/repay-now" onClick={scrollToTop} style={{ color: '#0b2747', display: 'flex', alignItems: 'center' }}>
                <ApplyNowIcon sx={{ mr: 1 }} /> Repay Now
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/calculator" onClick={scrollToTop} style={{ color: '#0b2747', display: 'flex', alignItems: 'center' }}>
                <CalculateIcon sx={{ mr: 1 }} /> Loan Calculator
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/apply-now" onClick={scrollToTop} style={{ color: '#0b2747', display: 'flex', alignItems: 'center' }}>
                <ApplyNowIcon sx={{ mr: 1 }} /> Apply Now
              </Link>
            </MenuItem>
            
          </MUI_Menu>

          {/* Desktop Navigation */}
                    <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              textAlign: 'center',
            }}
          >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1rem',
              flexGrow: 1, // To allow centering
            }}
          >
           <Link
  to="/"
  onClick={scrollToTop}
  style={{
    color: '#0b2747', // Default color
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    padding: '8px',
    fontWeight: '700',
    fontFamily: 'Roboto, sans-serif',
    transition: 'color 0.3s ease', // Smooth transition
  }}
  onMouseEnter={(e) => (e.currentTarget.style.color = '#240844')} // Dark hover
  onMouseLeave={(e) => (e.currentTarget.style.color = '#0b2747')} // Reset to default
>
  HOME
</Link>


            <Link
              to="/about-us"
              onClick={scrollToTop}
              style={{
                color: '#0b2747',
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                padding: '8px',
                fontWeight: '700',
                fontFamily: 'Roboto, sans-serif',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#240844')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#0b2747')}
            >
          ABOUT US
            </Link>

            <Link
              to="/contact-us"
              onClick={scrollToTop}
              style={{
                color: '#0b2747',
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                padding: '8px',
                fontWeight: '700',
                fontFamily: 'Roboto, sans-serif',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#240844')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#0b2747')}
            >
           CONTACT US
            </Link>

            <Link
              to="/repay-now"
              onClick={scrollToTop}
              style={{
                color: '#0b2747',
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                padding: '8px',
                fontWeight: '700',
                fontFamily: 'Roboto, sans-serif',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#240844')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#0b2747')}
            >
              REPAY NOW
            </Link>

            <Link
              to="/calculator"
              onClick={scrollToTop}
              style={{
                color: '#0b2747',
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                padding: '8px',
                fontWeight: '700',
                fontFamily: 'Roboto, sans-serif',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#240844')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#0b2747')}
            >
              LOAN CALCULATOR
            </Link>
          </Box>


            {/* "Apply Now" Button */}
            <Button
              component={Link}
              to="/apply-now"
              variant="contained"
              sx={{
                backgroundColor: 'orange',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '50px',
                fontWeight: 'bold',
                animation: `${blinking} 1.5s infinite`,
                fontFamily: 'Roboto, sans-serif',
                textTransform: 'none', // Normal case
                '&:hover': {
                  backgroundColor: '#fc8403',
                },
                '@media (max-width: 600px)': {
                  fontSize: '14px',
                  padding: '8px 12px',
                },
              }}
            >
              APPLY NOW
            </Button>
          </Box>

        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
