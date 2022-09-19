import React from 'react'
import styled from 'styled-components'
// import TestimonialIMG from '../Images/testimonialIMG.jpg'
import { useEffect, useState, useRef } from "react";
import Teslim from '../Videos/meet_teslim.mp4'
import Ibrahim from '../Videos/Meet_Ib.mp4'
import Playcenter from'../Images/playCenter.svg'
import Playcover from'../Images/playCover.svg'
const Testimonials = () => {
  const [mystream, setmystream] = useState(null);
  const [videoswitch, setvideo] = useState(true);
  // const [audioswitch, setaudio] = useState(true);
  const myvideo = useRef(null);

  useEffect(() => {
      navigator.mediaDevices
          .getUserMedia({ video: true, audio: true })
          .then((stream) => {
              myvideo.current.srcObject = stream;
              myvideo.current.autoplay = true;
              myvideo.current.muted = false;
              setmystream(stream);
          });
  }, []);

  const handleVideo = () => {
      if (videoswitch) {
          setvideo(false);
          mystream.getTracks().forEach(function (track) {
              if (track.readyState === "live" && 
                  track.kind === "video") {
                  track.enabled = false;
              }
          });
      } else {
          setvideo(true);
          mystream.getTracks().forEach(function (track) {
              if (track.readyState === "live" && 
                  track.kind === "video") {
                  track.enabled = true;
              }
          });
      }
  };
  // const handleAudio = () => {
  //     if (audioswitch) {
  //         setaudio(false);
  //         mystream.getTracks().forEach(function (track) {
  //             if (track.readyState === "live" && 
  //                 track.kind === "audio") {
  //                 track.enabled = false;
  //             }
  //         });
  //     } else {
  //         setaudio(true);
  //         mystream.getTracks().forEach(function (track) {
  //             if (track.readyState === "live" && 
  //                 track.kind === "audio") {
  //                 track.enabled = true;
  //             }
  //         });
  //     }
  // };
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
const TestimonialIMGmain = styled.video`
border-radius: .5rem;
width: 100%;
border: 2px solid red;
`
const Playbutton = styled.button`
border: 2px solid red;
position: relative;
z-index: 10;
left: 13rem;
bottom: 15rem;
// width: 4rem
background: transparent;
`
const Floatimg = styled.img`
position: relative;
z-index: 15;
left: 6rem;
border: 2px solid red;
`
const FloatCoverimg = styled.img`
width: 7rem;
border: 2px solid red;
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
          <TestimonialIMGmain src={Teslim} alt="" ></TestimonialIMGmain>
            <div>
              <Playbutton onClick={handleVideo} >{videoswitch}
              <Floatimg src={Playcenter} alt=''/>
              <FloatCoverimg src={Playcover} alt=''/>

              </Playbutton>
            </div>
          </TestimonialIMGDIV>
          <TestimonialIMGDIV>
         <TestimonialIMGmain src={Ibrahim} alt=""></TestimonialIMGmain>
              <div>
              <Playbutton>
              <Floatimg src={Playcenter} ref={myvideo} alt=''/>
              <FloatCoverimg src={Playcover} alt=''/>
              </Playbutton>
              </div>
          </TestimonialIMGDIV>
        </TestimonialIMGContainer>
      </div>
    </div>
  )
}

export default Testimonials