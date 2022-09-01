import React, { useEffect, useState } from "react";
// import "../App.css";
import { carouselOneData } from "./joinusData";

const CarouselOne = () => {
  const [currImg, setCurrImg] = useState(0);
  
  useEffect(() => {
    console.log("This is the current image", currImg);
    setTimeout(() => {
      if (currImg >= 1) {
        // console.log(currImg)
        return setCurrImg(0);
      } else {
        setCurrImg(currImg + 1);
      }
    }, 3000);
  });
  return (
    <div className="firstcarousel">
      <div className="firstheading">
        <h1 className="firstTitle">
          {carouselOneData[currImg].Title}
        </h1>
        <p className="firstText">{carouselOneData[currImg].Text}</p>
        <button
          style={{
            borderRadius: "10px",
            padding: "10px 40px",
            border: "none",
            fontSize: "20px",
            textDecoration: "none",
            backgroundColor: "#131e47",
            color: "white"}}
        >
          {carouselOneData[currImg].Button}
        </button>
      </div>
      
      <div className="imageCarousel">
        <img
          className="Images"
          alt="Carousel Images"
          src={carouselOneData[currImg].Image}
        />
      </div>
    </div>
  );
};

export default CarouselOne;
