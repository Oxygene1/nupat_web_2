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
    <div style={{}}>
        <h1 className='carouselHead' style={{textAlign: "start", padding: " 1em 1.7em", fontSize: "50px", fontWeight: "600"}}>NUPAT Code Camp</h1>
    <div className='carousel'>
        <div className='heading'>
        <p className='carouselText' style={{padding: "3em 0 3em 0", fontSize: "30px", fontStyle: "italic", lineHeight: "52.08px", width: "90%"}}>{carouselImages[currImg].Text}</p>
        <button style={{borderRadius: "10px", padding: "10px 30px",border: "none",fontSize: "15px", color: "#131e47"}}>Enroll Now</button>
        </div>
        
        <div className='innerCarousel' style={{ borderRadius: "10px",}}>
             <img className='images' src={carouselImages[currImg].Image}/> 
            <div className='center'></div>
            
        </div>
    </div>
    </div>
)
                 
}


export default Carousel
