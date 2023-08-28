import React, { useState } from 'react';
import axios from 'axios';
export default function Weather() {
    const [city, setCity] = useState('');
    const [loaded, setLoaded] = useState(false);
    const [weather, setWeather] = useState({});

    function displayWeather(response) {
        setLoaded(true);
        setWeather({
            temperature: response.data.main.temp,
            wind: response.data.main.speed,
            humidity: response.data.main.humidity,
            dsecription: response.data.weather[0].description,
            icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        let apiKey = "32391640570e11c4c7a46402e675208a";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(displayWeather);
    }
    function updateCity(event) {
        setCity(event.target.value);
    }
    let form = (
        <form onSubmit={handleSubmit}>
            <input type="search" placeholder="Type a city..." onChange={updateCity} />
            <button type="submit"> search </button>
        </form>
    );
    if (loaded) {
        return (
            <div>
                {form}
                <ul>
                    <li>Temperature:{Math.round(weather.temperature)}oC </li>
                    <li>Desription: {weather.description}</li>
                    <li>Humidity: {weather.humidity}% </li>
                    <li>wind:{weather.wind}km/h </li>
                    <li>
                        <img src={weather.icon} alt={weather.description} />
                    </li>
                </ul>
            </div>
        );
    } else {
        return form;
    }
}
