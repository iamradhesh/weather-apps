// Import axios library for making HTTP requests
import axios from 'axios';

// API endpoint for fetching weather data from OpenWeatherMap
const API_URL = `https://api.openweathermap.org/data/2.5/weather`;

// Your unique API key for authenticating requests to OpenWeatherMap
const API_KEY = `7b91a78a9601de7d4ffc0e520ad37833`; // Ensure that this API key is valid and active

// Function to fetch weather data based on city and country
export const getWeather = async (city, country) => {
    try {
        // Make a GET request to the weather API with city, country, API key, and units in metric
        let response = await axios.get(`${API_URL}?q=${city},${country}&appid=${API_KEY}&units=metric`);
        
        // Return the data from the API response
        return response.data;
    } catch (error) {
        // Log an error message if the request fails
        console.log("Error while calling the API: " + error.message);
        
        // Return the error response object for further handling
        return error.response;
    }
};
