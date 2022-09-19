import { cardData } from "../Data/cardData";

import './Carousel.css'
import React from "react";
const OneCard = ()=>{

    return(
    <dir>
        <div className="cardTitle">
        <h2 className="cardTitle1">Courses</h2>
    <p className="cardText1">We have varieties of courses available at your disposals for either the weekend or weekdays sessions in order to suit your schedule</p> 
        </div>
    <div className="cardContainer">  
    {cardData.map((single)=>{const {Image, Title, Text} = single
return <div className="card">
    <a href="https://medium.com"><img className="cardImage" width={"10%"} src={Image} alt=""/></a>
<div className="cardTitle"><h5>{Title}</h5></div>
<div className="cardText"><p>{Text}</p></div>
</div>
 })}
    
    </div>
    </dir>
       )
}
export default OneCard