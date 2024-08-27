import { Box, Button, InputBase, styled } from '@mui/material';
import React, { useState } from 'react';
import { getWeather } from '../services/api';

const Input = styled(InputBase)({
  color: '#FFF',
  autoFocus: true,
  border: '1px solid gray',
  paddingLeft: 2,
});

const GetButton = styled(Button)({
  background: '#e67e22',
});

const Form = ({ setResult }) => {
  const [data, setData] = useState({ city: '', country: '' });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const getWeatherInfo = async () => {
    try {
      let result = await getWeather(data.city, data.country);
      
      if (result) {
        setResult(result);  // Ensure the result object is set correctly
      } else {
        console.log("Error while fetching");
      }
    } catch (error) {
      console.log("Error", error.message);
    }
  };

  return (
    <Box
      sx={{
        background: '#445A6F',
        padding: 1,
        display: 'flex',
        fontSize: 18,
        justifyContent: 'space-between',
        gap: 1,
      }}
    >
      <Input
        placeholder="City"
        onChange={handleChange}
        name="city"
      />
      <Input
        placeholder="Country"
        onChange={handleChange}
        name="country"
      />
      <GetButton
        variant="contained"
        onClick={getWeatherInfo}
      >
        Get Weather
      </GetButton>
    </Box>
  );
};

export default Form;
