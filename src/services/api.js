import axios from 'axios';
const API_URL = `https://api.openweathermap.org/data/2.5/weather`;
const API_KEY = `7b91a78a9601de7d4ffc0e520ad37833`; // Make sure this is correct and active

export const getWeather = async (city, country) => {
    try {
        let response = await axios.get(`${API_URL}?q=${city},${country}&appid=${API_KEY}&units=metric`);
        return response.data;
    } catch (error) {
        console.log("Error while calling the API: " + error.message);
        return error.response;
    }
};
