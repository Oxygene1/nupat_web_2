// import ReactDOM from "react-dom/client";
import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutBody from "./About/AboutBody.jsx";
import FormBody from "./components/FormBody.jsx";
import OurTeam from "./components/OurTeam.jsx";
import Home from "./components/Home.jsx";
import Services from "./components/Services.jsx";
import NotFound from './Screen/404/NotFound.js';
const AppHero =()=>{
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" >
      <Route path="" element={<Home/>}/>
        <Route path="about-us" element={<AboutBody />}/>
        <Route path="it-services" element={<Services />}/>
        <Route path="code-camp" element={<FormBody />}/>
        <Route path="OurTeam" element={<OurTeam />}/>
        <Route path='*' element={<NotFound />} />
      </Route>
     
    </Routes>
  </BrowserRouter>
  )
}
 ;
export default AppHero