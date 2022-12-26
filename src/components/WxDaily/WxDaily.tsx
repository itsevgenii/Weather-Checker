import React from "react";
import { useState, useEffect } from "react";
import DailyWeatherContainer from "../DailyWeatherContainer/DailyWeatherContainer";
import umbrella from "./pngwing.com-2.png";
import girl from "./pngwing.com.png";
import WxDailyStyle from "./WxDaily.module.scss";


type Location ={
  lat: number
  lon: number
}

// type Position ={
//   position: Location
//   coords: number
//   latitude: number
//   longitude: number
// }

const WxDaily = () => {
  const API_KEY = import.meta.env.VITE_MYAPI_KEY;
  //   console.log("API:", API_KEY);
  const [city, setCity] = useState("");
  const [icon, setIcon] = useState("");
  const [weather, setWeather] : any= useState();
  const [location, setLocation] = useState<Location | null>();

  function handleLocation(lat: number, lon: number) {
    const locationObj = { lat: lat, lon: lon };
    setLocation(locationObj);
  }

  const sucess = (position: any)  => {
    // console.log("line25", position);//output[Log] line25 – GeolocationPosition {coords: GeolocationCoordinates, timestamp: 693075028592}
    // GeolocationPosition {coords: GeolocationCoordinates, timestamp: 693075028592}GeolocationPosition
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    // console.log("line 31", lat, long); output lat and long

    const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`;
    fetch(geoApiUrl)
      .then((res) => res.json())
      .then((data) => {
        const city = data.city;
        setCity(city);
      });
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setWeather(data.main.temp);
        setIcon(data.weather[0].icon);
      });
  };

  const error = () => {
    console.log("Unable to retrieve your location", error);
  };

  navigator.geolocation.getCurrentPosition(
    /*(position: Position)*/ sucess,
    error
  );

  return (
    <div className={WxDailyStyle.DailyContainerPlus}>
      <div className={WxDailyStyle.DailyContainer}>
        <img src={girl} alt="random girl" />
        <div className={WxDailyStyle.currentFetch}>
          <h1>
            I am like you in {city} and the weather here is{" "}
            <span>{`temp: ${Math.round(weather)} C`}</span>
          </h1>
          <img
            src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
            alt="pic of weather"
          />
        </div>
      </div>
      <div className="">
        <DailyWeatherContainer />
      </div>
    </div>
  );
};

export default WxDaily;
