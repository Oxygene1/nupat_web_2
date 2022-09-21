import React from "react";
import { Link } from "react-router-dom";
import FirstDisplay from "../Images/firstDisplay.jpg"
import styled from "styled-components";
// import 'bootstrap/dist/css/bootstrap.min.css';

const CarouselOne = () => {
  const Innovation = styled.h1`
  color: #131e47;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 57px;
  line-height: 60px;
  @media (max-width: 768px) {
    font-weight: 500;
    font-size: 30px;
    padding: 1rem;
    margin-left:.8rem;
    line-height: 50px;
  }
  `
  const DisplayIMG = styled.img`
  border-radius: .5rem;
  width:calc(116.5% - 100px);
  display:grid;
  margin-left: auto;
  margin-top:2rem;
  @media (max-width: 768px) {
    display:grid;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
  `
  const Realdiv = styled.div`
  text-align: justify;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 768px) {
    width: 100%;
    margin-top:-2rem;
    margin-left: auto;
    margin-right: auto;
  }
  `
  const LinktoJoin = styled(Link)`
    text-decoration: none;
    color: #fff;
    background-color: #131e47;
    padding: 16px 32px;
    margin-top:2rem;
    cursor: pointer;
    border-radius: .4rem;
    &:hover {
      color: #fff;
    }
    @media (max-width: 768px) {
      padding: 1rem;
      // margin-top:-2rem;
      margin-left: 5%;
      // margin:3rem;
      border-radius:.4rem;
  }
  `
  const BtnJoinusdiv = styled.div`
    margin-top: 1rem;
    @media (max-width: 768px) {
      padding:2rem 0 2rem 0;
      // margin:3rem;
  }
  
  `
  const Firstdisplaydiv = styled.div`
    width: 90%;
    position: relative;
    // margin-left:5%;
    padding: 2rem;
    @media (max-width: 768px) {
      padding:0;
    margin-left:auto;
    margin-right: auto;
    width: 100%;
  }
  `
  const NumberDisplay= styled.div`
    // margin-top:-2rem;
    margin-bottom:2rem;
    display: flex;
    width: 100%;
    @media (max-width: 768px) {
      width: 100%;
    margin-left: auto;
      margin-right: auto;
    }
    // justify-content: center;
  `
  const Numberdiv = styled.div`
    padding-left: 15%;
    padding-right: 15%;
    // margin: 0rem 10rem;
    width: 20%;
    jestify-conent: center;
    align-items: center;
    justify-items: center;
  `
  const Realities = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    justify-content: center;
    color: #1E1E1E;
    padding: 1rem 1rem 2rem 0;
    margin: 0 auto;
    @media (max-width: 768px) {
      padding: 1.5rem;
      font-weight: 400;
      font-size: 18px;
      line-height: 32px;
    }
  
  `
  const FirstCarousel = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width:786px){
    // margin-top:-2rem;
    display:block;
    margin-bottom:-4rem;
  }
  background-color:#fff;
  justify-content: center;
  align-items: center;
  width:90%;
  margin-right:auto;
  margin-left:auto;
  // padding: 3rem 2rem 2rem 2rem;
  @media(max-width:786px){
    width: 100%;
  }
  `
  const Breakbr = styled.br`
  @media(max-width:786px){
    display: none;
  }
  
  `
  const Firstcarouselblock = styled.div`
  width:95%;
  magin-top: 3rem;
  margin-left: auto;
  margin-right: auto;
  @media (max-width:786px){
    // margin-right:10%;
    // width: 90%;
  }
  `
  return (
    <div>
    <FirstCarousel>
      <Firstcarouselblock>
          <div className="innovdiv">
            <Innovation>
            INNOVATION <Breakbr /> AT ITS PEAK
            </Innovation>
          </div>
          <div>
            <Realdiv>

            <Realities>We are raising world class tech professionals, building problem solving innovations and helping you bring your dreams  to realities</Realities>
            </Realdiv>

            <BtnJoinusdiv>
            <LinktoJoin to="/enrollment" className="JoinLink">Join US</LinktoJoin>
            </ BtnJoinusdiv>
            
          </div>
      </Firstcarouselblock>
      <Firstdisplaydiv>
        <DisplayIMG src={FirstDisplay} alt="" />

        <div className="firstnewsletter">
          <div className="innerNewsletter">
            <div className="newsletterInputdiv">
                <input className="newsletterInput" type="text" placeholder="Send Us an email" />
            </div>
            <div>
                <button className="newsletterbtn">Send</button>
            </div>
          </div>
        </div>
      </Firstdisplaydiv>

      </FirstCarousel>
      <NumberDisplay>
          <Numberdiv>
            <h3>50+</h3>
            <h3>Students</h3>
          </Numberdiv>

          <Numberdiv>
            <h3>7+</h3>
            <h3>Courses</h3>
          </Numberdiv>
          <Numberdiv>
            <h3>50+</h3>
            <h3>Clients</h3>
          </Numberdiv>
          </NumberDisplay>
    
    </div>
  );
};

export default CarouselOne;
