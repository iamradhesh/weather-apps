// Home.js

// Import necessary React hooks and Material UI components
import React, { useState } from 'react';
import { AppBar, Box, Grid, Paper, styled, Typography } from '@mui/material';
import bg from '../assets/images/bg.jpg';  // Import background image
import Form from '../Components/Form';     // Import custom Form component
import Information from '../Components/Information';  // Import custom Information component

// Styled component for the main container
const Component = styled(Box)({
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  margin: '0 auto',
  width: '95%',
});

// Styled component for the image container
const Image = styled(Box)({
  backgroundImage: `url(${bg})`,  // Set background image
  width: '40%',
  height: '100%',
  backgroundSize: "cover",
  borderRadius: '20px 0 0 20px',  // Rounded corners on the left side
});

// Home component definition
const Home = () => {
  const [results, setResults] = useState({});  // State to hold weather results

  return (
    <Grid>
      <Component>
        {/* AppBar for the top header */}
        <AppBar color='secondary' sx={{textAlign:'center', height:'auto', fontSize:'22px'}}>Weather App</AppBar>
        
        {/* Main content container with Paper component for elevation effect */}
        <Paper
          elevation={10}
          sx={{
            border: '1px solid gray',
            height: "90%",
            width: "100%",
            display: 'flex',
            alignItems: 'center',
            margin: '0 auto',
          }}
        >
          <Image /> {/* Left side image */}
          
          {/* Right side form and information components */}
          <Box style={{ width: '60%', height: '100%' }}>
            <Form setResult={setResults} />  {/* Form for input */}
            <Information result={results} />  {/* Display weather information */}
          </Box>
        </Paper>
      </Component>
    </Grid>
  );
};

export default Home;
