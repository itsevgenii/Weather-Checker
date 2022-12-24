import {useState, useEffect, ChangeEvent} from 'react'

type optionType = {
    name : string
    lat: number,
    lon: number
    }

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

const useFetch = () => {
const [input, setInput ] = useState<string>('')
  
  const [options, setOptions] = useState<[]>([])
  
  const [city, setCity] =useState<optionType | null>(null)
  const [forecast, setForecast] =useState<forecastType | null>(null)
  
  const getSearchOptions = async (value: string) => {
    const res = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=${import.meta.env.VITE_MYAPI_KEY}`)
    const data = await res.json()
    console.log(data)
    setOptions(data)
  }
  
  // const handleChange = (e: React.BaseSyntheticEvent)=>{
    const handleChange = (e: ChangeEvent<HTMLInputElement>)=>{
      console.log(e.target.value)
      const value  = e.target.value.trim()
      setInput(value)
      if (value=== '') return
      getSearchOptions(value)
    }
    
    const getForecast = (city: optionType)=>{
      fetch(`https://api.openweathermap.org/data/2.5/forecast/?lat=${city.lat}&lon=${city.lon}&units=metric&appid=${import.meta.env.VITE_MYAPI_KEY}`)
      .then((res) => res.json()).then((data)=>{console.log(data);
      const forecastData = { 
        ...data.city, 
        list: data.list.slice(0, 39),}
        setForecast(forecastData)}).catch(error=>console.log(error))
}

const handleSubmit = () =>{
if(!city) return
getForecast(city)
}

const handleOptionSelect = (option: optionType) => {
setCity(option)
}

useEffect(()=>{
  if(city){
    setInput(city.name)
    setOptions([])
  }
},[city])

    return {
      input, options, forecast, handleChange,  handleSubmit, handleOptionSelect
    }
}

export default useFetch