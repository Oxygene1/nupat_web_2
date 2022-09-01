import React from "react";
import { cardData } from "../Data/cardData";
import './Carousel.css'

const Cards = ()=>{

    return(
    <div>
        <div className="card1Title">
        <h2 className="card1Title1">Courses</h2>
    <p className="card1Text1">We have varieties of courses available at your disposals for either the weekend or weekdays sessions in order to suit your schedules</p> 
        </div>
    <div className="card1Container">  
    {cardData.map((single)=>{const {Image, Title, Text} = single
return <div className="card1">
<img className="card1Image" width={"20%"} src={Image} alt=""/>
<div className="card1Title"><h5>{Title}</h5></div>
<div className="card1Text"><p>{Text}</p></div>
</div>
 })}
    
    </div>
    </div>
       )
}
export default Cards;