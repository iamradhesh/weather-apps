// Form.js

// Import necessary components and hooks for Form component
import { Box, Button, InputBase, styled } from '@mui/material';
import React, { useState } from 'react';
import { getWeather } from '../services/api';  // Import API service

// Styled input component for the form fields
const Input = styled(InputBase)({
  color: '#FFF',
  autoFocus: true,
  border: '1px solid gray',
  paddingLeft: 2,
});

// Styled button component for the submit button
const GetButton = styled(Button)({
  background: '#e67e22',
});

// Form component definition
const Form = ({ setResult }) => {
  const [data, setData] = useState({ city: '', country: '' });  // State to hold form data

  // Handler to update state on input change
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Function to fetch weather information
  const getWeatherInfo = async () => {
    try {
      let result = await getWeather(data.city, data.country);  // Call API to get weather data
      
      if (result) {
        setResult(result);  // Update state with API result
      } else {
        console.log("Error while fetching");
      }
    } catch (error) {
      console.log("Error", error.message);  // Log any errors
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
      {/* Input fields for city and country */}
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
      {/* Button to trigger weather fetch */}
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
