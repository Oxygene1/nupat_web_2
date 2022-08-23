import React, {useEffect, useState} from 'react';
import {accomodationImages} from '../Data/accomodationData';
import './Carousel.css'
import { Link } from "react-router-dom";

const Accomodation = ()=>{
    const [currImg, setCurrImg] = useState(0);
    useEffect(()=>{
        setTimeout(()=>{
            if (currImg >= 3) {
                setCurrImg(0)
            }else{
                setCurrImg(currImg + 1);
            }
            console.log(currImg)
        }, 4000);
        
       
        });
        return(
            <div className='carousel carousels'>
                <div className='heading'>
                <h1 className='carouselHead accHead'>Accomodation</h1>
                <p className='carouselText accText'>{accomodationImages[currImg].Text}</p>
                <Link to={'/enrollment'} style={{borderRadius: "10px", padding: "10px 30px",border: "none",fontSize: "15px",textDecoration:"none", backgroundColor: "#131e47", color: "white"}}>Enroll Now</Link>
                </div>
                
                <div className='innerCarousel' style={{ borderRadius: "10px",}}>
                     <img className='images2' src={accomodationImages[currImg].Image}/> 
                    <div className='center'></div>
                    
                </div>
            </div>
        )
           

}
export default Accomodation

              