import React from "react";
import { Link } from "react-router-dom";
import FirstDisplay from "../Images/firstDisplay.jpg"
import styled from "styled-components";
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
    font-size: 27px;
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
  // width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-top:2rem;
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
      margin-left: 3%;
      // margin:3rem;
      border-radius:.4rem;
  }
  `
  const BtnJoinusdiv = styled.div`
    margin-top: 1rem;
    @media (max-width: 768px) {
      margin-top: 0;
      padding:2rem 0 2rem 0;
      // margin:3rem;
  }
  
  `
  const Firstdisplaydiv = styled.div`
    width: 90%;
    position: relative;
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
      margin-bottom:0;
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
    display: flex;
    @media (max-width: 768px) {
      display: none;
      padding:0;
    }
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
    display:block;
  }
  // background-color:#fff;
  // justify-content: center;
  
  width:90%;
  margin-right:auto;
  margin-left:auto;
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
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  margin-top: 4rem;
  @media (max-width:786px){
    margin-top: 0;
  }
  `
  const Newsletterbtndiv = styled.div` 
  // width: 80%;
  `
  const InnerNewsletter =styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: .5rem;
  background-color: #fff;
  `
  const InnerNewsletter2 = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: #fff;
  padding: 1rem;
  `
  const SecondNewsLetterdiv = styled.div`
  display:none;
  @media (max-width:786px){
    padding: 1rem;
    display:flex;
    border-radius:1rem;
    width: 90%;
    background-color:#131e47;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2rem;
    margin-bottom: 1.5rem;
  }
  `
  const Newsletterbtn = styled.button`
 
    border-style: none;
    color: #fff;
    background-color:#131e47;
    border-radius: 0 4px 4px 0;
    padding: 1rem;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  `
  const NewsletterInputdiv2 =styled.div`
  width: 70%;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  // justify-content: center;
  `
  const NewsletterInput = styled.input`
    width: 100%;
    border: 1px solid #131E47;
    outline: 1px solid #131E47;
    font-size: 18px;
    font-weight: 24px;
    font-family:DM sans;
    padding-left:.5rem;
  `
  const NewsletterInputdiv = styled.div`
  width:80%;
  `
  const Newsletterbtn2 = styled.button`
    border-style: none;
    color: #fff;
    background-color:#131e47;
    border-radius: 4px;
    padding: .5rem;
    background-color:#131e47;
  `
  const Newsletterbtndiv2 = styled.div`
  width:30%;
  `
  return (
    <div>
    <FirstCarousel>
      <Firstcarouselblock>
        
            <Innovation>
            INNOVATION <Breakbr /> AT ITS PEAK
            </Innovation>
         
       
            <Realdiv>

            <Realities>We are raising world class tech professionals, building problem solving innovations and helping you bring your dreams  to realities</Realities>
            </Realdiv>

            <BtnJoinusdiv>
            <LinktoJoin to="/code-camp">Join US</LinktoJoin>
            </ BtnJoinusdiv>
            
      
      </Firstcarouselblock>
      <Firstdisplaydiv>
        <DisplayIMG src={FirstDisplay} alt="" />

        <div className="firstnewsletter">
          <InnerNewsletter>
            <NewsletterInputdiv>
                <input className="newsletterInput" type="text" placeholder="Send Us an email" />
            </NewsletterInputdiv>
            <Newsletterbtndiv>
            <Newsletterbtn2>Send</Newsletterbtn2>
            </Newsletterbtndiv>
          </InnerNewsletter>
        </div>
        <SecondNewsLetterdiv>
          <InnerNewsletter2>
            <NewsletterInputdiv2>
                <NewsletterInput type="text" placeholder="Send Us an email" />
            </NewsletterInputdiv2>
            <Newsletterbtndiv2>
                
                <Newsletterbtn>Send</Newsletterbtn>
            </Newsletterbtndiv2>
          </InnerNewsletter2>
        </SecondNewsLetterdiv>

      </Firstdisplaydiv>

      </FirstCarousel>
      <NumberDisplay>
          <Numberdiv>
            <h3>100+</h3>
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
