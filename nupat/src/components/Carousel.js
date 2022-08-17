import React, {useEffect, useState} from 'react';
import './Carousel.css'
import {carouselImages} from '../Data/CarouselData'


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
        <button style={{borderRadius: "10px", padding: "10px 30px",border: "none",fontSize: "15px", color: "#131e47"}}>Enroll Now</button>
        </div>
        
        <div className='innerCarousel'>
             <img className='images' src={carouselImages[currImg].Image}/>
        </div>
    </div>
    </div>
)
                 
}


export default Carousel
