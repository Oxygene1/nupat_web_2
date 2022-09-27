// import ReactDOM from "react-dom/client";
import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutBody from "./About/AboutBody.jsx";
import FormBody from "./components/FormBody.jsx";
import OurTeam from "./components/OurTeam.jsx";
import Home from "./components/Home.jsx";
import Services from "./components/Services.jsx";
const AppHero =()=>{
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" >
      <Route path="" element={<Home />}/>
        <Route path="About-us" element={<AboutBody />}/>
        <Route path="IT-Services" element={<Services />}/>
        <Route path="code-camp" element={<FormBody />}/>
        <Route path="OurTeam" element={<OurTeam />}/>
      </Route>
     
    </Routes>
  </BrowserRouter>
  )
}
 ;
export default AppHero