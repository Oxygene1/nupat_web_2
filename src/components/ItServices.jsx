import React from 'react'
import FirstDisplay from "../Images/firstDisplay3.jpg"
import { Link } from "react-router-dom";
import styled from 'styled-components';
const ItServices = () => {
  const ITintro = styled.h1`
  color:#131E47;
  font-weight: 700;
  font-size: 40px;
  font-family: 'DM Sans';
  font-style: normal;
  @media(max-width:786px){
  padding: 1rem 0;
  font-weight: 600;
  font-size: 30px;
  }
  `
  const ITservicesDIV = styled.div`
  @media(max-width:786px){
    margin-bottom: -3rem;
  }
  `
  const Joinus =styled.div`
    margin-top: 3rem;
    @media (max-width: 768px) {
      padding-top:1rem;
      padding-bottom:2rem;
    }
  `
  const Realidiv = styled.div`
  margin-top: 3rem;
  @media (max-width: 768px) {
   width: 100%;
   margin-bottom: -3rem;
  // justify-content: space-between;
  }
 
  `
  const FirstIMGdiv = styled.div`
    width:100%;
  
  `
  const FirstIMG =styled.img`
  // height:19.75rem;
  width:95%;
  margin-left:5%;
  border-radius: .5rem;
  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
  }
  `
  const Realidivp = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 33px;
  color: #1E1E1E;
  font-family: DM sans;
  // width: 90%;
  text-align: justify:
  @media(max-width:786px){
    text-align: left:
    width:100%;
    font-style: normal;
  font-weight: 200;
  font-size: 18px;
  // line-height: 28px;
  }
  `
  const JoinLink = styled(Link)`
  color: #fff;
  text-decoration:none;
  background-color: #131E47;
  padding:1rem;
  border-radius:.5rem;
  &:hover {
    color: #fff;
    background-color: #131E47;
  }
  @media(max-width:786px){
    // margin-left:5%;
  }
  `

  const Firstcarousell = styled.div`
  display:flex;
  flex-direction:row;
  width: 90%;
  margin-left:auto;
  margin-right:auto;
  margin-top: 3rem;
  @media(max-width:786px){
    display: block;
  }
  
  `
  const SecondDiv = styled.div`
  
  width:100%;
  @media(max-width:786px){
    display: block;
  }

  `
  return (
    <div>
      <Firstcarousell>
      <SecondDiv>
          <ITservicesDIV>
            <ITintro>
            IT Services
            </ITintro>
          </ITservicesDIV>
          <div>
            <Realidiv>

            <Realidivp style={{textAlign:'left'}}>We offer technological solutions ranging from building website to building both web and mobile applications. We also have a pool of developers, Designers, Data Analysts for outsourcing.</Realidivp>
            </Realidiv>

            <Joinus>
            <JoinLink to="/IT-Services">Join US</JoinLink>
            </Joinus>
            
          </div>
      </SecondDiv>
      <FirstIMGdiv>
        <FirstIMG src={FirstDisplay} alt="" />
      </FirstIMGdiv>

      </Firstcarousell>

    </div>
  )
}

export default ItServices



// how to inst