import React from 'react'
import useFetch from '../../fetchHook/useFetch'
import HourlyStyle from './Hourly.module.scss'


type forecastType=  {
    name: string
    country: string
    population: number
    sunrise: number
    sunset: number
    list: [{
      dt: number
      dt_txt: string
      main:{
        feels_like: number
        humidity: number
        pressure: number
        temp: number
        temp_max: number
        temp_min: number
      }
      weather:[{
        main: string
        icon: string
        description: string
      }]
    wind:{
      speed: number
      deg: number
      gust: number
    }
    clouds: {
      all: number
    }
    pop: number
    visibility: number
    }]
    }

    type Props = {
        data: forecastType
    }

const Hourly = ({data}: Props) => {
    const {forecast} = useFetch()
    return (
      <div className={HourlyStyle.AllPage}>
      <h1>Three hourly forecast</h1>
        <div className={HourlyStyle.parent}>
            {data.list.map((item, i)=>(
  <div className={HourlyStyle.HourlyContainer}>
  <div className={HourlyStyle.Time}>
    <div>
    <label>{item.dt_txt}</label>
    <hr/>
  </div>
  </div>
  <div className={HourlyStyle.Info}>
    <div>
    <label>Pressure:</label>
    <label>{item.main.pressure}</label>
  </div>
  <div className="daily-details-grid-item">
      <label>Humidity:</label>
      <label>{item.main.humidity}</label>
    </div>
    <div className="daily-details-grid-item">
      <label>Clouds:</label>
      <label>{item.clouds.all}%</label>
    </div>
    <div className="daily-details-grid-item">
      <label>Wind speed:</label>
      <label>{item.wind.speed} m/s</label>
    </div>
    <label className='min-max'>{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C </label>
    <div className="daily-details-grid-item">
      <label>Feels like:</label>
      <label>{item.main.feels_like}°C</label>
    </div>
    </div>
    </div>

))}
        </div>
        </div>
    )
}

export default Hourly