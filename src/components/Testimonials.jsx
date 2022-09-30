import React from "react";
import styled from "styled-components";
import Joy from "../Videos/Meet_joy.mp4";
import Ibrahim from "../Videos/Meet_Ib.mp4";
import VideoPlayer from "react-video-js-player";
const Testimonials = () => {
  const myVideoSrc = Ibrahim;
  const myVideoSrc2 = Joy;
  const H3 = styled.h3`
    color: #131e47;
    font-weight: bold;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 54px;
  `;
  const TestimonialIMGContainer = styled.div`
    display: flex;
    @media (max-width: 768px) {
      display: block;
    }
    margin-left: 2%;
  `;
  const TestimonialIMGDIV = styled.div`
    width: 100%;
    margin: 2rem;
  `;
  const TestimonialTextDiv = styled.div`
    margin-top: 4rem;
    margin-left: 4rem;
    @media (max-width: 786px) {
      margin-left: 0;
    }
  `;
  const Pe = styled.p`
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 33px;
    color: #1e1e1e;
  `;
  const TestimonialVIDmain = styled(VideoPlayer)`
    height: 30rem;
    border-radius: 0.8rem;
    width: 90%;
    color: #10d4d8;
    outline-style: none;
    background-color: #131e47;
    @media (max-width: 768px) {
      width: 85%;
      margin-right: 3rem;
    }
  `;

  return (
    <div>
      <TestimonialTextDiv>
        <H3 style={{ textAlign: "center" }}>Testimonials</H3>
        <Pe style={{ textAlign: "center" }}>
          Listen to the experiences of our students
        </Pe>
      </TestimonialTextDiv>
      <TestimonialIMGContainer>
        <TestimonialIMGDIV>
          <TestimonialVIDmain
            poster={
              "https://i.ytimg.com/vi/WMdQ8wOBlmE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCo3i7XcxLI-05BpsYcp4LDSkGS4A"
            }
            src={myVideoSrc2}
          />
        </TestimonialIMGDIV>
        <TestimonialIMGDIV>
          <TestimonialVIDmain
            poster={
              "https://i.ytimg.com/vi/UMI7bEQLdD8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCi66xUIcQfb29yIZyWT1ETMocpUg"
            }
            src={myVideoSrc}
          />
        </TestimonialIMGDIV>
      </TestimonialIMGContainer>
    </div>
  );
};

export default Testimonials;
