import React, { useState } from 'react';
import { AppBar, Box, Grid, Paper, styled, Typography } from '@mui/material';
import bg from '../assets/images/bg.jpg';
import Form from '../Components/Form';
import Information from '../Components/Information';

const Component = styled(Box)({
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  margin: '0 auto',
  width: '95%',
});

const Image = styled(Box)({
  backgroundImage: `url(${bg})`,
  width: '40%',
  height: '100%',
  backgroundSize: "cover",
  borderRadius: '20px 0 0 20px',
});

const Home = () => {
  const [results, setResults] = useState({});

  return (
    <Grid>
      <Component>
        <AppBar color='secondary' sx={{textAlign:'center', height:'auto', fontSize:'22px'}}>Weather App</AppBar>
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
          <Image />
          <Box style={{ width: '60%', height: '100%' }}>
            <Form setResult={setResults} />
            <Information result={results} />
          </Box>
        </Paper>
        
      </Component>
      
    </Grid>
  );
};

export default Home;
