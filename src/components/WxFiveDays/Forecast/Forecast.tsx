import React from 'react'
import shortid from 'shortid'
import ForecastStyle from './Forecast.module.scss'
import Tile from './Tile'


type forecastType =  {
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


const Degree = ({temp}: {temp: number}): JSX.Element =>(
<span>
    {temp}<sup>o</sup>
</span>
)

const Suntime = (timestamp: number): string=>{
const date = new Date(timestamp*1000)
let hours = date.getHours().toString()
let minutes = date.getMinutes().toString()

if (hours.length <=1) hours = `0${hours}`
if (minutes.length <=1) minutes =`0${minutes}`
return `${hours}:${minutes}`
}

export const getWindDirection = (deg: number): string => {
    if (deg > 15 && deg <= 75) return 'NE'
  
    if (deg > 76 && deg <= 105) return 'E'
    if (deg > 105 && deg <= 165) return 'SE'
  
    if (deg > 166 && deg <= 195) return 'S'
    if (deg > 195 && deg <= 255) return 'SW'
  
    if (deg > 255 && deg <= 285) return 'W'
    if (deg > 285 && deg <= 345) return 'NW'
  
    return 'N'
  }

  export const getHumidityValue = (level: number): string => {
    if (level <= 55) return 'Dry and comfortable'
    if (level > 55 && level <= 65) return 'A bit uncomfortable, sticky feeling'
  
    return 'Lots of moisture, uncomfortable air'
  }
  
  export const getVisibilityValue = (number: number): string => {
    if (number <= 50) return 'Dangerously foggy'
    if (number > 50 && number <= 500) return 'Expect heavy fog'
    if (number > 500 && number <= 2000) return 'Expect some fog'
    if (number > 2000 && number <= 9000) return 'Expect some haze'
  
    return 'Very clear day'
  }


  export const getPop = (value: number): string => {
    if (value <= 0.33) return 'Low probability'
    if (value > 0.33 && value <= 0.66) return 'Moderate probability'
  
    return 'High probability'
  }

const Forecast = ({data}: Props): JSX.Element => {
    const today = data.list[0]



    return (
        <div>
            <section>
                <h2>{data.name}<span>{data.country}</span></h2>
                <h3>{data.population}<span> people living</span></h3>
                <h1><Degree temp={Math.round(today.main.temp)}/></h1>
                <p>{today.weather[0].main} {today.weather[0].description}</p>
                <p>H:<Degree temp={Math.ceil(today.main.temp_max)}/>
                    L: <Degree temp={Math.floor(today.main.temp_min)}/>
                </p>
            </section>
            <section className={ForecastStyle.Scroll}>
                {data.list.map((item, i)=>(
                    <div key={shortid.generate()}>
                        <p>{i===0 ? "Now" : new Date(item.dt* 1000).getHours()}</p>
                         <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt={`weather-icon-${item.weather[0].description}`} />
                        <p>
                        <Degree temp={Math.round(item.main.temp)}/>
                        </p>
                    </div>
                ))}
            </section>
            <section>
                <div><h2>Sunrise</h2>
                            <p>{Suntime(data.sunrise)}</p>
                </div>
                <div><h2>Sunset</h2>
                            <p>{Suntime(data.sunset)}</p></div>
<Tile icon="wind" title="wind" info={`${Math.round(today.wind.speed)}km/h`} description={`${getWindDirection(Math.round(today.wind.deg))}, gusts ${today.wind.gust.toFixed(1)}km/h`}/>
<Tile
            icon="feels"
            title="Feels like"
            info={<Degree temp={Math.round(today.main.feels_like)} />}
            description={`Feels ${
              Math.round(today.main.feels_like) < Math.round(today.main.temp)
                ? 'colder'
                : 'warmer'
            }`}
          />
          <Tile
            icon="humidity"
            title="Humidity"
            info={`${today.main.humidity} %`}
            description={getHumidityValue(today.main.humidity)}
          />
          <Tile
            icon="pop"
            title="Precipitation"
            info={`${Math.round(today.pop * 100)}%`}
            description={`${getPop(today.pop)}, clouds at ${today.clouds.all}%`}
          />
          <Tile
            icon="pressure"
            title="Pressure"
            info={`${today.main.pressure} hPa`}
            description={` ${
              Math.round(today.main.pressure) < 1013 ? 'Lower' : 'Higher'
            } than standard`}
          />
          <Tile
            icon="visibility"
            title="Visibility"
            info={`${(today.visibility / 1000).toFixed()} km`}
            description={getVisibilityValue(today.visibility)}
          />
          
            </section>
        </div>
    )
}

export default Forecast