import React from "react";
import { cardData } from "../Data/cardData";
import './Carousel.css'
import styled from "styled-components";

const Cards = ()=>{
    const Coursesdiv = styled.div`
    margin-top: 3rem;
   
    @media(max-width:786px){
        margin: 1.5rem;
    }
    `
    const Coursesh2 = styled.h2`
    
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 54px;

    color: #131E47;
    @media(max-width:786px){
        font-weight: 500;
        font-size: 30px;
        line-height: 54px;
    }
    `
    const Coursesp = styled.p`
    
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 33px;
    color: #131E47;
    @media(max-width:786px){
        font-weight: 300;
        font-size: 18px;
        line-height: 27px;
    }
    `
    const Tittleh5 =styled.h5`
    padding: 2rem;
    
    `
    return(
    <div>
        <Coursesdiv>
        <Coursesh2 style={{textAlign:'center'}}>Courses</Coursesh2>
    <Coursesp style={{textAlign:'center'}}>We have varieties of courses available at your disposals for either the weekend or weekdays sessions in order to suit your schedules</Coursesp> 
        </Coursesdiv>
    <div className="card1Container">  
    {cardData.map((single)=>{const {Image, Title, Text} = single
return <div className="card1">
    <img className="card1Image" width={"20%"} src={Image} alt=""/>
<div className="card1Title"><Tittleh5>{Title}</Tittleh5></div>
<div className="card1Text"><p>{Text}</p></div>
</div>
 })}
    
    </div>
    </div>
       )
}
export default Cards;