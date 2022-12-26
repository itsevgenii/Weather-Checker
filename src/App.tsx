
import { useState } from "react";
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
