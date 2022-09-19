import React from 'react'
import FirstDisplay from "../Images/firstDisplay.jpg"
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
    padding: 1rem;
  }
  `
  const ITservicesDIV = styled.div`
  
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
   width: 80%;
   margin-bottom: -3rem;
  justify-content: space-between;
  }
 
  `
  const FirstIMGdiv = styled.div`
    width:90%;
  
  `
  const FirstIMG =styled.img`
  height:19.75rem;
  width:100%;
  border-radius: .5rem;
  `
  const Realidivp = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 33px;
  color: #1E1E1E;
  font-family: DM sans;
  width: 90%;
  @media(max-width:786px){
    width: 100%;
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
  const NumberDisplay= styled.div`
  margin-top:2rem;
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
  return (
    <div>
      <Firstcarousell>
      <div>
          <ITservicesDIV>
            <ITintro>
            IT Services
            </ITintro>
          </ITservicesDIV>
          <div>
            <Realidiv>

            <Realidivp>We offer technological solutions ranging from building website to building both web and mobile applications. We also have a pool of developers, Designers, Data Analysts for outsourcing.</Realidivp>
            </Realidiv>

            <Joinus>
            <JoinLink to="/Services">Join US</JoinLink>
            </Joinus>
            
          </div>
      </div>
      <FirstIMGdiv>
        <FirstIMG src={FirstDisplay} alt="" />
      </FirstIMGdiv>

      </Firstcarousell>
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
  )
}

export default ItServices