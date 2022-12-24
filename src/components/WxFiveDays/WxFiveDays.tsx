import { ChangeEvent, useEffect, useState } from 'react'
import WxFiveStyle from './WxFiveStyle.module.css'
import Forecast from './Forecast/Forecast'
import Search from './Search/Search'
import DailyWidget from './DailyWidget/DailyWidget'
import useFetch from './fetchHook/useFetch'

type optionType = {
name : string
lat: number,
lon: number
}

const WxFiveDays = () : JSX.Element => {
const {input, options, forecast, handleChange,  handleSubmit, handleOptionSelect } = useFetch()

return (
<main className="flex justify-center">
{forecast? (<>
{/* <Forecast data={forecast}/> */}
<DailyWidget data={forecast}/>
</>
):(
  <Search input={input} options={options} handleChange={handleChange}
handleOptionSelect={handleOptionSelect}
handleSubmit={handleSubmit}/>
)}
{/* <p>{forecast.sunrise}</p> */}
</main>
    )
}

export default WxFiveDays