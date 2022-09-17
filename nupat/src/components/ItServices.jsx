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
  `
  const ITservicesDIV = styled.div`
  
  `
  const Joinus =styled.div`
    margin-top: 3rem;
  `
  const Realidiv = styled.div`
  margin-top: 3rem;
  `
  const FirstIMGdiv = styled.div`
  
  
  `
  const FirstIMG =styled.img`
  height:19.75rem;
  border-radius: .5rem;
  `
  const Realidivp = styled.p`
  font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 33px;
color: #1E1E1E;
font-family: DM sans;
  `
  return (
    <div>
      <div className="firstcarousel">
      <div className="firstcarouselblock">
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
            <Link to="/Services" className="JoinLink">Join US</Link>
            </Joinus>
            
          </div>
      </div>
      <FirstIMGdiv>
        <FirstIMG src={FirstDisplay} alt="" />
      </FirstIMGdiv>

      </div>
          <div className="numberDisplay">
          <div  className="numberdiv">
            <h3>50+</h3>
            <h3>Students</h3>
          </div>

          <div className="numberdiv">
            <h3>7+</h3>
            <h3>Courses</h3>
          </div>
          <div className="numberdiv">
            <h3>50+</h3>
            <h3>Clients</h3>
          </div>
          </div>
    </div>
  )
}

export default ItServices