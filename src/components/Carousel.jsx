import React from 'react';
import './Carousel.css'
import styled from 'styled-components';
// import {carouselImages} from '../Data/CarouselData'
import { Link } from 'react-router-dom';
import Picwithglass from '../Images/Picwithglass.jpg'

const Carousel =()=>{
    const CarouselContainer = styled.div`
        display: flex;
        background: #131E47;
        @media (max-width: 768px) {
        display: block;
        padding:1rem 0 1rem 0;
        }
        width:100%;
        padding:3rem;
        `
    const LinkToEnrollment = styled(Link)`
        color: #131E47;
        background-color:#fff;
        text-decoration: none;
        padding: 1rem;
        border-radius: .5rem;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 22px;
        // margin-bottom:-2rem;
        &:hover{color:#131E47;} 
        @media (max-width: 768px) {
            padding: .5rem;
            margin-bottom:2rem;
        }
        `
    const NupatH1 = styled.h2`
        color: #fff;
        font-family: 'DM Sans';   
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 44px;
        // margin-bottom: 2rem;
        @media (max-width: 768px) {
        font-style: normal;
        font-weight: 500;
        font-size: 28px;
        line-height: 20px;
        padding:10px 0 10px 0;
          }
        `
      const NupatP = styled.p`
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 31px;
        color: #FFFFFF;
        margin-top: 2rem;
        padding-bottom:1.5rem;
        margin-bottom: 3rem; 
        text-align:left; 
        @media (max-width: 768px) {
        font-style: normal;
        font-weight: 200;
        font-size: 18px;
        line-height: 23px;
        margin-bottom: 0; 
        }
        `
    const PicGlass = styled.img`
        // height: 15.875rem;
        width: 90%;
        border-radius: .5rem;
        display:grid;
        margin-left: auto;
        marging-right:auto;
        
        @media (max-width: 768px) {
            width: 95%;
           
            margin-left: auto;
            margin-right: auto;
        }
        `
    const NupatMainDiv = styled.div`
        width: 90%;
        // margin-left: 5rem;
        margin-left: auto;
        margin-right: auto;
        @media (max-width: 768px) {
            // margin-bottom:2rem;
            padding-bottom:2rem;
        }
        `
    const PicGlassdiv =styled.div`
        width: 100%;
        // margin-right:4rem;
        padding:1rem;
        @media(max-width:786px){
            width:100%;
            margin-left: auto;
            margin-right: auto;
        }
        `
return(
    <CarouselContainer>
        
    <NupatMainDiv>
       <NupatH1>Nupat Code Camp</NupatH1>
       <NupatP>Nupat Code camp is an intensive practical software development boot-camp that is ushering in a new generation of indigenous software developers driving innovation and software development in the information and technological industry. The training utilizes the experience and skill sets of veterans in the industry. Quality practical training and online resources are used in a conducive, team building and challenging environment to inspire and mold the interns to become great tech experts.</NupatP>
        <LinkToEnrollment to='/code-camp'>Enroll Now</LinkToEnrollment>
    </NupatMainDiv>

    <PicGlassdiv>
   <PicGlass src={Picwithglass} alt="" />
    </PicGlassdiv>


    </CarouselContainer>
)
                 
}


export default Carousel
