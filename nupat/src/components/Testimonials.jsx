import React from 'react'
import styled from 'styled-components'
import TestimonialIMG from '../Images/testimonialIMG.jpg'

const Testimonials = () => {
  const H3 = styled.h3`
  color: #131E47;
  font-weight: bold; 
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 54px;`
const Para = styled.p`
font-family: 'DM Sans';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 33px;
`
const TestimonialIMGContainer = styled.div`
display: flex;
@media (max-width: 768px) {
  display: block;
}
margin-left:2%;
`
const TestimonialIMGDIV = styled.div`
margin: 2rem;
`
const TestimonialTextDiv =styled.div`
margin-top: 4rem;
margin-left: 4rem;
`
const Pe = styled.p`
font-family: 'DM Sans';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 33px;
color: #1E1E1E;
`
const TestimonialIMGmain = styled.img`
border-radius: .5rem;
`
  return (
    <div>
      <div>
        <TestimonialTextDiv>

        <H3>
        Testimonials
        </H3>
        <Pe>Listen to the experiences of our students</Pe>
        </TestimonialTextDiv>
        <TestimonialIMGContainer>
          <TestimonialIMGDIV>
          <TestimonialIMGmain src={TestimonialIMG} alt="" />
          </TestimonialIMGDIV>
          <TestimonialIMGDIV>
          <TestimonialIMGmain src={TestimonialIMG} alt="" />
          </TestimonialIMGDIV>
        </TestimonialIMGContainer>
      </div>
    </div>
  )
}

export default Testimonials