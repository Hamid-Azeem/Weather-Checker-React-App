import React, { useState } from "react";
import axios from "axios";
import { WiDaySunny, WiRain, WiHumidity, WiStrongWind } from 'react-icons/wi';
import Input from "./InputField";

const Weather = () => {
    const [input, setInput] = useState("");
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);

    const handleChange = (value) => {
        setInput(value);
        setError(null);
    };

    const api_Key = process.env.REACT_APP_API_KEY;

    const getWeather = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${api_Key}`);
            setWeather(response.data);
            setError(null);
        } catch (error) {
            setError("Could not fetch weather data. Please check the city name and try again.");
            setWeather(null);
        }
    };

    return (
        <div>
            <div>
                <Input
                    getWeather={getWeather}
                    city={input}
                    onCityChange={handleChange}
                />
            </div>
            <div className="flex flex-wrap justify-center items-center mt-5 gap-5">
                <div>
                    {error && (
                        <p className="text-red-500">{error}</p>
                    )}
                    {weather && (
                        <div className="p-6 w-full max-w-sm bg-transparent rounded-lg shadow-md flex flex-col items-center">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{weather.name}</h2>
                            <p className="text-lg text-gray-600 mb-1 capitalize">{weather.weather[0].description}</p>
                            <p className="text-3xl text-gray-900 mb-3">{Math.round(weather.main.temp - 273.15)}°C</p>
                            <div className="flex items-center text-lg text-gray-600 mb-1">
                                <WiHumidity size={35} className="text-2xl mr-1" />
                                <span>Humidity: {weather.main.humidity}%</span>
                            </div>
                            <div className="flex items-center text-lg text-gray-600 mb-1">
                                <WiStrongWind size={35} className="text-2xl mr-1" />
                                <span>Wind Speed: {weather.wind.speed} m/s</span>
                            </div>
                            {weather.weather[0].main === 'Clear' ? (
                                <WiDaySunny className="text-6xl text-yellow-500" />
                            ) : (
                                <WiRain className="text-6xl text-blue-500" />
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Weather;
