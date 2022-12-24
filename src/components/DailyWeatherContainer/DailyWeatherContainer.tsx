import React from "react";
import Input from "./Input/Input";
// import DailyWeatherCard from "./DailyWeatherCard/DailyWeatherCard";
import DailyWeatherStyle from "./DailyWeatherContainer.module.scss";

const DailyWeatherContainer = () => {
  return (
    <div className={DailyWeatherStyle.DailyWeatherContainer}>
      <Input />
    </div>
  );
};

export default DailyWeatherContainer;
