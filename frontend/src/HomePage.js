import React from 'react';
import { AppBar, Toolbar, Typography, Box, Container, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { ReactTyped } from "react-typed";

const HomePage = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <AppBar position="static" color="default" elevation={0} sx={{ backgroundColor: 'transparent' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            HealthCare Hub
          </Typography>
          <Typography variant="h6" sx={{ cursor: 'pointer' }}>
            About Us
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
        {/* Main Content */}
        <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
          <Box sx={{ minHeight: '80vh', background: 'linear-gradient(to right, #83a4d4, #b6fbff)', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <Typography variant="h3" gutterBottom align="center">
              Explore comprehensive FDA insights
            </Typography>
            <Typography variant="subtitle1" align="center">
            Empowering <ReactTyped
              strings={["Dentists", "Veterinarians", "Surgeons", "Nurses", "Psychiatrists"]}
              typeSpeed={50}
              backSpeed={50}
              loop
            /> with instant access to FDA data.
          </Typography>
          </Box>
        </Container>
    </Box>
  );
};

export default HomePage;
