// Import necessary components and hooks from React and Material-UI
import { Box, Card, Typography, styled } from '@mui/material';
import React from 'react';
import { SettingsBrightness, LocationOn, Opacity, Brightness5, Brightness6, Dehaze, Cloud } from '@mui/icons-material';
import AirIcon from '@mui/icons-material/Air';
import bg1 from '../assets/images/bg1.jpg';  // Import background image for card
import { TableFooter } from '@mui/material';

// Functional component to display weather information
const Information = ({ result }) => {
  // Styled component for displaying each row of information
  const Row = styled(Typography)({
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    gap: 2,
  });

  // Render a default message if no weather data is provided
  if (!result || Object.keys(result).length === 0) {
    return (
      <Box>
        <Typography variant="h5" sx={{ textAlign: 'center', marginTop: 5 }}>
          Enter the city or country to get the weather information.
        </Typography>
      </Box>
    );
  }

  // Check if result and result.main exist to avoid accessing undefined properties
  if (result && result.main) {
    // Extract temperature in Celsius and convert it to Fahrenheit
    const temperatureCelsius = result.main.temp;
    const temperatureFahrenheit = (temperatureCelsius * 9 / 5) + 32;

    // Convert sunrise and sunset times from UNIX timestamp to human-readable format
    const sunriseTime = new Date(result.sys.sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(result.sys.sunset * 1000).toLocaleTimeString();

    // Render the weather information in a styled card
    return (
      <Box>
        <Card
          sx={{
            margin: '30px 60px',  // Set margins for the card
            backgroundImage: `url(${bg1})`,  // Set background image for the card
            backgroundSize: 'cover',  // Ensure the background image covers the entire card
            backgroundRepeat: 'no-repeat',  // Prevent background image from repeating
            color: 'white',  // Set text color to white for better readability on background
            height: 'auto',  // Allow card height to adjust based on content
          }}
        >
          {/* Display various weather details using styled rows */}
          <Row variant="h5">
            <LocationOn /> Location: {result.name}, {result.sys.country}
          </Row>
          <Row>
            <SettingsBrightness /> Temperature: {temperatureCelsius.toFixed(2)}°C / {temperatureFahrenheit.toFixed(2)}°F
          </Row>
          <Row>
            <Opacity /> Humidity: {result.main.humidity}%
          </Row>
          <Row>
            <Brightness5 /> Sunrise: {sunriseTime}
          </Row>
          <Row>
            <Brightness6 /> Sunset: {sunsetTime}
          </Row>
          <Row>
            <Dehaze /> Weather: {result.weather[0].main}
          </Row>
          <Row>
            <Cloud /> Clouds: {result.clouds.all}%
          </Row>
          <Row>
            <AirIcon /> Summary: {result.weather[0].description}
          </Row>
        </Card>
        
        {/* Footer section with a custom message */}
        <TableFooter sx={{ fontFamily: 'sans-serif', fontSize: '18px', color: 'gray', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography>
            Made By ❤️Radhesh
          </Typography>
        </TableFooter>
      </Box>
    );
  }

  return null;  // Return null if no valid weather data is available
};

export default Information;
