import React from 'react'
import styled from 'styled-components'
import Teslim from '../Videos/meet_teslim.mp4'
import Ibrahim from '../Videos/Meet_Ib.mp4'
import VideoPlayer from 'react-video-js-player'
const Testimonials = () => {

  const myVideoSrc = Ibrahim;
  const myVideoSrc2 = Teslim
  const H3 = styled.h3`
  color: #131E47;
  font-weight: bold; 
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 54px;`
  // const Para = styled.p`
  // font-family: 'DM Sans';
  // font-style: normal;
  // font-weight: 400;
  // font-size: 24px;
  // line-height: 33px;
  // `
  const TestimonialIMGContainer = styled.div`
display: flex;
@media (max-width: 768px) {
  display: block;
}
margin-left:2%;
`
  const TestimonialIMGDIV = styled.div`
  width: 100%;
margin: 2rem;
`
  const TestimonialTextDiv = styled.div`
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
  const TestimonialVIDmain = styled(VideoPlayer)`
  height: 30rem;
border-radius: .8rem;
width: 90%;
@media (max-width: 768px) {
  width: 80%;
  // padding: 2rem;
  margin-left: auto;
  margin-right: auto;
}
`

  // const Floatimg = styled.img`
  // position: relative;
  // z-index: 15;
  // left: 6rem;
  // border: 2px solid red;
  // `
  // const FloatCoverimg = styled.img`
  // width: 7rem;
  // border: 2px solid red;
  // `


  // videoTagString({
  //   src: "https://www.ibthemespro.com/resource/krozo/resources/video-2.mp4",
  //   poster: "img/bg-2.jpg",
  // });


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
          <TestimonialVIDmain  src={myVideoSrc2} />
        
          </TestimonialIMGDIV>
          <TestimonialIMGDIV>
        
          <TestimonialVIDmain  src={myVideoSrc} />
          </TestimonialIMGDIV>
        </TestimonialIMGContainer>
      </div>
    </div>
  )
}

export default Testimonials