import { useState } from "react";
import DailyWeatherCard from "../DailyWeatherCard/DailyWeatherCard";
import InputStyle from "./Input.module.scss";
import inputIcon from "./icons8-search-64.png";


type LocationObject ={
  lat : number,
  lon: number
}
const Input = () => {
  const [input, setInput] = useState("");
  const [location, setLocation] = useState<LocationObject | null >(null) 

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // geo fetch
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=1&appid=${import.meta.env.VITE_MYAPI_KEY}`
    );
    const json = await response.json();
    const lat = json[0].lat;
    const lon = json[0].lon;
    const locationObj = { lat: lat, lon: lon };
    setLocation(locationObj);
    console.log(locationObj);
  }

  return (
    <div>
      <div className={InputStyle.InputContainer}>
        <form onSubmit={handleSubmit}>
          {/* <label>
            {" "}
            Enter city */}
          <input
            type="text"
            placeholder="enter your city"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          {/* </label> */}
          <button type="submit" onSubmit={handleSubmit}>
            <img src={inputIcon} alt="search" />
          </button>
        </form>
      </div>
      <div className={InputStyle.WeatherCard}>
        <DailyWeatherCard input={input} location={location} />
      </div>
    </div>
  );
};

export default Input;
