import { Box, Card, Typography, styled } from '@mui/material';
import React from 'react';
import { SettingsBrightness, LocationOn, Opacity, Brightness5, Brightness6, Dehaze, Cloud } from '@mui/icons-material';
import AirIcon from '@mui/icons-material/Air';
import bg1 from '../assets/images/bg1.jpg';
import { TableFooter } from '@mui/material';

const Information = ({ result }) => {
  const Row = styled(Typography)({
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    gap: 2
  });

  // Default message if no data is entered
  if (!result || Object.keys(result).length === 0) {
    return (
      <Box>
        <Typography variant="h5" sx={{ textAlign: 'center', marginTop: 5 }}>
          Enter the city or country to get the weather information.
        </Typography>
      </Box>
    );
  }

  // Check if result and result.main exist to avoid errors
  if (result && result.main) {
    // Convert temperature from Celsius to Fahrenheit
    const temperatureCelsius = result.main.temp;
    const temperatureFahrenheit = (temperatureCelsius * 9/5) + 32;

    // Convert sunrise and sunset time from UNIX timestamp to readable time
    const sunriseTime = new Date(result.sys.sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(result.sys.sunset * 1000).toLocaleTimeString();

    return (
      <Box >
        <Card
          sx={{
            margin: '30px 60px',
            backgroundImage: `url(${bg1})`, // Set the background image
            backgroundSize: 'cover', // Cover the whole card
            backgroundRepeat: 'no-repeat', // Prevents repeating
            color: 'white', // Adjust text color if needed for better readability
            height:'auto'
          }}
        >
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
        <TableFooter sx={{ fontFamily:'sans-serif', fontSize:'18px', color:'gray', display:'flex',alignItems:'center', justifyContent:'center'}}>
            <Typography>
                Made By ❤️Radhesh
            </Typography>
        </TableFooter>
      </Box>
    );
  }

  return null; // Return null if there's no valid result
};

export default Information;
