import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCloud,
  faSun,
  faCloudRain,
  faSmog,
  faSnowflake,
  faCloudBolt,
  faCloudShowersHeavy,
  faWater,
} from "@fortawesome/free-solid-svg-icons";
import "../index.css";
import axios from "axios";
const Weather = () => {
  const [weatherData, setWeatherData] = useState({});
  const [location, setLocation] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=0c6b431a5b751d0c0e80d86b15d6d1ea`;

  const searchHandler = () => {
    axios.get(url).then((response) => {
      console.log(response.data);
      setWeatherData(response.data);
    });
    setLocation("");
  };
  const onEnter = (event) => {
    if (event.key === "Enter") {
      searchHandler();
    }
  };

  const getWeatherIcon = (weather) => {
    switch (weather) {
      case "Clouds":
        return <FontAwesomeIcon icon={faCloud} />; // Cloud
      case "Rain":
        return <FontAwesomeIcon icon={faCloudRain} />; // Rain icon
      case "Clear":
        return <FontAwesomeIcon icon={faSun} />; // Sunny icon
      case "Mist":
      case "Fog":
      case "Haze":
        return <FontAwesomeIcon icon={faSmog} />; // Mist icon
      case "Snow":
        return <FontAwesomeIcon icon={faSnowflake} />; // Snow icon
      case "Thunderstorm":
        return <FontAwesomeIcon icon={faCloudBolt} />; // Thunderstorm icon
      default:
        return <FontAwesomeIcon icon={faWater} />; //default value
    }
  };

  return (
    <>
      <div className="weather-app">
        {/* search bar */}
        <div className="searchbar">
          <input
            type="text"
            value={location}
            placeholder="Enter city name..."
            onKeyDown={onEnter}
            onChange={(e) => setLocation(e.target.value)}
          />
          <FontAwesomeIcon
            className="search-icon"
            icon={faMagnifyingGlass}
            onClick={searchHandler}
          />
        </div>
        {/* main page to display */}
        <div className="weather-container">
          <div className="top">
            <div className="location">
              <p>{weatherData.name}</p>
            </div>
            <div className="temp">
              {weatherData.main ? (
                <h1>{Math.floor(weatherData.main.temp)}°F</h1>
              ) : null}
            </div>
            <div className="desc">
              {weatherData.weather ? (
                <div>
                  <span>{getWeatherIcon(weatherData.weather[0].main)}</span>
                  <p>{weatherData.weather[0].main}</p>
                </div>
              ) : null}
            </div>
          </div>
          {/* bottom page */}
          {weatherData.name != undefined && (
            <div className="bottom">
              <div className="feels">
                {weatherData.main ? (
                  <p className="bold">
                    {Math.floor(weatherData.main.feels_like)}°F
                  </p>
                ) : null}
                <p>Feels like</p>
              </div>
              <div className="humidity">
                {weatherData.main ? (
                  <p className="bold"> {weatherData.main.humidity}%</p>
                ) : null}
                <p>Humidity</p>
              </div>
              <div className="wind">
                {weatherData.wind ? (
                  <p className="bold">
                    {Math.floor(weatherData.wind.speed)} mph
                  </p>
                ) : null}
                <p> Winds</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Weather;
