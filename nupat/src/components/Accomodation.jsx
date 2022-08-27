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
            <div style={{}}>
               
            <div className='carousel carousels'>
                <div className='heading'>
                <h1 className='carouselHead' style={{textAlign: "start", fontSize: "40px", fontWeight: "700", marginTop:"2em" ,color:'#131e47'}}>Accomodation</h1>
                <p className='carouselText' style={{padding: "3em 0", fontSize: "20px"}}>{accomodationImages[currImg].Text}</p>
                <Link to="/enrollment" style={{borderRadius: "10px", padding: "10px 30px",border: "none",fontSize: "15px", backgroundColor: "#131e47",textDecoration:"none", color: "white"}}>Enroll Now</Link>
                </div>
                
                <div className='innerCarousel' style={{ borderRadius: "10px",}}>
                     <img className='images2' src={accomodationImages[currImg].Image}/> 
                    <div className='center'></div>
                    
                </div>
            </div>
            </div>
        )
           

}
export default Accomodation

              