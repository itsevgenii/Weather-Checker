import React from 'react'
import useFetch from '../fetchHook/useFetch'
import shortid from 'shortid'


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
const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']


const DailyWidget = ({data}: Props) => {

    const day = new Date().getDay()
    console.log("line 50", day)
    const forecastDays = WEEK_DAYS.slice(day, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, day))

    console.log(forecastDays)


//  for ( let s=0; s<8; s++){
//     console.log(`I am list splice ${s}-2`, data.list.splice(s,2))

//     }

let a = new Date().getDay()
console.log(a, "this is a") //number of this day in this week
let b = Date.now()
console.log(b, "this is b") //current in unix
let c = new Date(b*1000).getHours()
console.log(c, "this is c")
let d = new Date(b*1000)
console.log(d, "this is d")

var e = new Date();
e.setHours(12,0,0,0);

console.log("this is today noon", e)


let next = e.setDate(e.getDate() + 1);
let nextString : string = next.toString();
console.log("next noon", nextString);


    const {forecast} = useFetch()
    return (
        <div>
    
    {/* const data = [{"guid":"j5Dc9Z","courses":[{"id":3,"name":"foo"}]},{"guid":"a5gdfS","courses":[{"id":1,"name":"bar"},{"id":3,"name":"foo"}]},{"guid":"jHab6i","courses":[{"id":7,"name":"foobar"}]}];
const courses = [1, 6, 3];

const r = data.filter(d => d.courses.every(c => courses.includes(c.id)));
console.log(r); */}

    
{data.list.splice(0,7).map((item, i)=>(

/* <li key={shortid.generate()}>Hi</li> */
    <div className='daily-item' key={shortid.generate()}>
        
            <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt="weather" className='icon-small'/>
            <label className='day'>{forecastDays[i]} </label>
            <label>{item.dt_txt}</label>
            <label className='description'>{item.weather[0].description}</label>
            <label className='min-max'>{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C</label>
     <div className="daily-details-grid-item">
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
    <div className="daily-details-grid-item">
      <label>Feels like:</label>
      <label>{item.main.feels_like}°C</label>
    </div>
    <div className="daily-details-grid-item">
      <label>Feels like:</label>
      <label>{item.dt_txt}</label>
    </div>

    </div>

))}

           

        </div>
   
    )
}

export default DailyWidget