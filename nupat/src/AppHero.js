// import ReactDOM from "react-dom/client";
import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutBody from "./About/AboutBody.jsx";
import FormBody from "./components/FormBody.jsx";
import OurTeam from "./components/OurTeam.jsx";
import Home from "./components/Home.jsx";
import ItServices from "./components/ItServices.jsx";
const AppHero =()=>{
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" >
      <Route path="Home" element={<Home />}/>
        <Route path="about" element={<AboutBody />}/>
        <Route path="Services" element={<ItServices />}/>
        <Route path="enrollment" element={<FormBody />}/>
        <Route path="OurTeam" element={<OurTeam />}/>
      </Route>
     
    </Routes>
  </BrowserRouter>
  )
}
 ;
export default AppHero