// import ReactDOM from "react-dom/client";
import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutBody from "./About/AboutBody.jsx";
import FormBody from "./components/FormBody.jsx";
import Team from "./components/Team.jsx";
import Home from "./components/Home.jsx";
const AppHero =()=>{
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" >
      <Route path="Home" element={<Home />}/>
        <Route path="about" element={<AboutBody />}/>
        <Route path="enrollment" element={<FormBody />}/>
        <Route path="Team" element={<Team />}/>
      </Route>
     
    </Routes>
  </BrowserRouter>
  )
}
 ;
export default AppHero