import { useEffect, useState } from "react";
import DailyWeatherCardStyle from "./DailyWeatherCard.module.scss";

const API_KEY = import.meta.env.VITE_MYAPI_KEY;

type Location = {
  lat: number,
  lon: number,
}
type Props = {
  location: Location | null
  input: string
}

const DailyWeatherCard = (props: Props) : JSX.Element=> {
  const [weatherData, setWeatherData] = useState();

const {
  location,
  input
} = props;

  const baseIconURL = `https://openweathermap.org/img/wn/`;

  useEffect(() => {
    async function getWeather() {
      if (location) {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}`
        );
        const json = await response.json();

        setWeatherData(json);
      }
    }
    getWeather();
  }, [location]);

  const dayObject = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
  };

  return (
    <div className={DailyWeatherCardStyle.day}>
      {weatherData ? (
        <div className={DailyWeatherCardStyle.card}>
          <h2>
            Today: <span>{dayObject[new Date().getDay()]}</span>
          </h2>
          <h2 className={DailyWeatherCardStyle.location}>{input}</h2>
          <img
            src={`${baseIconURL}${weatherData.weather[0].icon}@4x.png`}
          ></img>
          <p className={DailyWeatherCardStyle.currentTemp}>
            Current temp:{" "}
            {parseFloat(weatherData.main.temp - 273.15).toFixed(0)}
            &#176;
          </p>
          <p className={DailyWeatherCardStyle.maxTemp}>
            Max temp:{" "}
            {parseFloat(weatherData.main.temp_max - 273.15).toFixed(0)}
            &#176;
          </p>
          <p className={DailyWeatherCardStyle.minTemp}>
            Min temp:{" "}
            {parseFloat(weatherData.main.temp_min - 273.15).toFixed(0)}
            &#176;
          </p>
          <p className={DailyWeatherCardStyle.humidity}>
            Humidity: {weatherData.main.humidity}%
          </p>
          <p className={DailyWeatherCardStyle.wind}>
            Wind & Speed: {weatherData.wind.deg}deg {weatherData.wind.speed}m/s
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default DailyWeatherCard;
