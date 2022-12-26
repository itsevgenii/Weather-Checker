import React from 'react'
import useFetch from '../fetchHook/useFetch'
import shortid from 'shortid'
import DailyStyle from './DailyWidget.module.scss'
import Hourly from './Hourly/Hourly'


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
var r = e.setHours(12,0,0,0);
var rInSeconds = Math.round(r/1000)

console.log("this is today noon", r)


let plusOne = e.setDate(e.getDate() + 1);
const plusOneSeconds = Math.round(plusOne / 1000)  
let  plusTwo= e.setDate(e.getDate() + 1);
const plusTwoSeconds = Math.round(plusTwo / 1000)  
let plusThree = e.setDate(e.getDate() + 1);
const plusThreeSeconds = Math.round(plusThree / 1000)  
let plusFour = e.setDate(e.getDate() + 1);
const plusFourSeconds = Math.round(plusFour / 1000)  
let plusFive = e.setDate(e.getDate() + 1);
const plusFiveSeconds = Math.round(plusFive / 1000)  
let nextString : string = plusOne.toString();
console.log("next noon", nextString);



let filterFind = (el: any) =>{
  console.log("Plus one", el.dt == plusOneSeconds, el.dt, plusOneSeconds)
  console.log("Plus Two", el.dt == plusTwoSeconds, el.dt, plusTwoSeconds)
  console.log("Plus Three", el.dt == plusThreeSeconds, el.dt, plusThreeSeconds)
  console.log("Plus four", el.dt == plusFourSeconds, el.dt, plusFourSeconds)
  console.log("Plus Five", el.dt == plusFiveSeconds, el.dt, plusFiveSeconds)
  return el.dt === rInSeconds|| el.dt === plusOneSeconds || el.dt === plusTwoSeconds || el.dt === plusThreeSeconds || el.dt === plusFourSeconds || el.dt === plusFiveSeconds
}
    const {forecast} = useFetch()
    return (
      <div className={DailyStyle.dailyWidgetAll}>
<div className={DailyStyle.dailyWidgetCards}>

{data.list.filter(filterFind).map((item, i)=>(

<div key={shortid.generate()} className={DailyStyle.dailyWidget}>
    <div className={DailyStyle.dailyItem} key={shortid.generate()}>
        <div className={DailyStyle.DailyParentCard}>
        <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt="weather" className='icon-small'/>
        <label className={DailyStyle.DayName}>{item.dt_txt}</label>
        <div className={DailyStyle.DailyParentInfo}>
        <label className='day'>{forecastDays[i]} </label>
        <label className='min-max'>{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C </label>
        <label className='description'>{item.weather[0].description + ' '}</label>
        </div>
        </div>
        </div>
    </div>
))}
</div>
<Hourly data={data}/>
        </div>
   
    )
}

export default DailyWidget