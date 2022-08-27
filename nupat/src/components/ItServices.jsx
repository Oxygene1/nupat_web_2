import React, { useEffect, useState } from "react";
import "../App.css";
import { ITserviceData }from './ITservicesData'

const ITServices = () =>{
    const [currImg, setCurrImg] = useState(0);
    
    useEffect(() => {
      console.log("This is the current image", currImg);
      setTimeout(() => {
        if (currImg >= 4) {
          return setCurrImg(0);
        } else {
          setCurrImg(currImg + 1);
        }
      }, 3000);
    });
    function getColor(){
      if(currImg === 0){
        return "white"
      }
    }
    function getFontW(){
      if(currImg === 0){
        return "50px"
      }
    }
    function getBgColor(){
      if(currImg === 0){
        return "80%"
      }
    }
    function getAlign(){
      if(currImg === 0){
        return "start"
      }
    }
    function getWidth(){
      if(currImg === 0){
        return "50%"
      }
    }
    function getHeadAlign(){
      if(currImg === 0){
        return "#131e47"
      }
    }
    function getBtnDisplay(){
      if(currImg >= 2){
        return "none"
      }
    }

    
    return (
      <div className="ITcarousel">
        <div className="ITheading" style= {{width: getWidth(), backgroundColor: getHeadAlign()}}>
          <h1 className="ITTitle" style={{width: getBgColor(), textAlign: getAlign()}}>
            {ITserviceData[currImg].Title}
          </h1>
          <p className="ITText" style={{fontWeight: getFontW(), color: getColor()}}>{ITserviceData[currImg].Text}</p>
          <button className="ITBtn" style={{display: getBtnDisplay()}}>
            {ITserviceData[currImg].Button}
          </button>
        </div>
        
        <div className="ITimageCarousel">
          <img
            className="ITImages"
            alt="Carousel Images"
            src={ITserviceData[currImg].Image}
          />
        </div>
      </div>
    );
}

export default ITServices