import React from 'react'
import styled from 'styled-components'
import Joy from '../Videos/Meet_joy.mp4'
import Ibrahim from '../Videos/Meet_Ib.mp4'
import VideoPlayer from 'react-video-js-player'
const Testimonials = () => {

  const myVideoSrc = Ibrahim;
  const myVideoSrc2 = Joy
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

          <H3 style={{textAlign:'center'}}>
            Testimonials
          </H3>
          <Pe style={{textAlign:'center'}}>Listen to the experiences of our students</Pe>
        </TestimonialTextDiv>
        <TestimonialIMGContainer>
          <TestimonialIMGDIV>
          <TestimonialVIDmain poster={'https://i.ytimg.com/vi/WMdQ8wOBlmE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCo3i7XcxLI-05BpsYcp4LDSkGS4A'}  src={myVideoSrc2} />
        
          </TestimonialIMGDIV>
          <TestimonialIMGDIV>
        
          <TestimonialVIDmain poster={'https://i.ytimg.com/vi/UMI7bEQLdD8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCi66xUIcQfb29yIZyWT1ETMocpUg'} src={myVideoSrc} />
          </TestimonialIMGDIV>
        </TestimonialIMGContainer>
      </div>
    </div>
  )
}

export default Testimonials