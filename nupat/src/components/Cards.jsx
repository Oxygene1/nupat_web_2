import React from "react";
import { cardData } from "../Data/cardData";
import './Carousel.css'

const Cards = ()=>{

    return(
    <div>
        <div className="cardTitle">
        <h2 className="cardTitle1">Courses</h2>
    <p className="cardText1">We have varieties of courses available at your disposals for either the weekend or weekdays sessions in order to suit your schedule</p> 
        </div>
    <div className="cardContainer">  
    {cardData.map((single)=>{const {Image, Title, Text} = single
return <div className="card">
<img className="cardImage" width={"10%"} src={Image} alt=""/>
<div className="cardTitle"><h5>{Title}</h5></div>
<div className="cardText"><p>{Text}</p></div>
</div>
 })}
    
    </div>
    </div>
       )
}
export default Cards;