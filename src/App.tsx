
import { useAuth0 } from "@auth0/auth0-react";
import {
  Routes,
  Route
} from "react-router-dom";
import HomePage from './components/HomePage/HomePage'
import NavBar from './components/NavBar/NavBar'
import Contacts from './components/Contacts/Contacts'
import WxDaily from './components/WxDaily/WxDaily'
import WxFiveDays from "./components/WxFiveDays/WxFiveDays";
import './App.css'

function App() {
  const { isAuthenticated} = useAuth0()

  // let currentDay = new Date().getDay()
  // console.log(`Current day: ${currentDay}`)

  // let currentMonth = new Date().getMonth()
  // console.log(`Current month: ${currentMonth}`)

  // let currentFullYear = new Date().getFullYear()
  // let currentUTCFullYear = new Date().getUTCFullYear()
  // console.log(`Current year: ${currentFullYear}`)
  // console.log(`Current year: ${currentUTCFullYear}`)

  // let currentTimeHours = new Date().getHours()
  // let currentTimeMInutes = new Date().getMinutes()
  // let currentTimeSeconds = new Date().getSeconds()
  // console.log(`Current time: ${currentTimeHours}-${currentTimeMInutes}-${currentTimeSeconds}`)


  return (
    <div className="App">
    <NavBar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/wxdaily" element={isAuthenticated && <WxDaily/>}/>
      <Route path="/wxfivedays" element={isAuthenticated && <WxFiveDays/>}/>
      <Route path="/contacts" element={isAuthenticated && <Contacts/>}/>
      </Routes>
    </div>
  )
}

export default App
