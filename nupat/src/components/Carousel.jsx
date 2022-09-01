import React, {useEffect, useState} from 'react';
import './Carousel.css'
import {carouselImages} from '../Data/CarouselData'
import { Link } from 'react-router-dom';

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
    <div className='carouselContainer'>
        <h1 className='carouselHead' style={{textAlign: "start", padding: " 1em 1.7em", fontSize: "50px", fontWeight: "600"}}>NUPAT Code Camp</h1>
    <div className='carousel'>
        <div className='heading'>
        <p className='carouselText' style={{padding: "3em 0 3em 0", fontSize: "30px", fontStyle: "italic", lineHeight: "52.08px", width: "90%" ,color:'#fff'}}>{carouselImages[currImg].Text}</p>
        <Link to='/enrollment' style={{borderRadius: "10px", padding: "10px 30px",border: "none",fontSize: "15px", color: "#131e47", textDecoration:'none', backgroundColor:'#fff'}}>Enroll Now</Link>
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
