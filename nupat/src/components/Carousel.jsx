import React, {useEffect, useState} from 'react';
import './Carousel.css'
import {carouselImages} from '../Data/CarouselData'
import { Link } from "react-router-dom";

const Carousel =()=>{
    
    const [currImg, setCurrImg] = useState(0);
    useEffect(()=>{
        setTimeout(()=>{
            if (currImg >= 3) {
                setCurrImg(0)
            }else{
                setCurrImg(currImg + 1);
            }
        }, 4000);
        
        
        });
return(
    <div className='carouselContainer' >
        <h1 className='carouselHead'>NUPAT Code Camp</h1>
    <div className='carousel'>
        <div className='heading'>
        <p className='carouselText'>{carouselImages[currImg].Text}</p>
        <Link to={'/enrollment'} style={{borderRadius: "10px", padding: "10px 30px",border: "none",fontSize: "15px", textDecoration: "none", color: "#131e47"}}>Enroll Now</Link>
        </div>
        
        <div className='innerCarousel'>
             <img className='images' alt={carouselImages[currImg].Text} src={carouselImages[currImg].Img}/>
        </div>
    </div>
    </div>
)
                 
}


export default Carousel
