import React from 'react'
// import fullstack from '../Images/fullstack.svg'
// import html from '../Images/html.svg'
// import mobile from '../Images/mobile.svg'
import Master from '../Images/masterclass.png'
import Mentor from '../Images/mentor.jpg'
import Internship from '../Images/internship.jpg'
import Community from '../Images/community.png'
import Portfolio from '../Images/portfolio.jpg'
import Excellence from '../Images/excellence.jpg'
// import ux from '../src/images/ux.svg'
// import Heading from './Init/Heading'
// import './App.css';
import Card from './SecondCard.jsx'
// import Initiative from './Initiative'
// import Ulego from './Ulego'
import styled from 'styled-components'
function init() {
  const Wrapper = styled.div `
  display: flex;
  gap: 1rem;
  width: 100%;
  // grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  // padding-bottom: 4em;
  // margin: 4rem;
  @media (max-width: 768px) {
    display: block;
    width: 100%;
  }
  
  `
  return (
    <>
    <div className="Benefitss">
     <h1 style={{textAlign:'center'}}>Benefits of working with us</h1>
     <p style={{textAlign:'center'}}>We have varieties of courses available at your disposals for eitherthe  weekdays or weekend sessions in order to suit your schedules.</p>
    </div>
  
    <Wrapper>
      <Card
    image={Mentor}
    text="we provide the best programs structured with diverse and brilliant mentors that put all their efforts and skills to positively influece, shape and reshape the mindset of interns to prepare them for service."
    title="Mentorship"/>

<Card
    image={Community}
    text="The environment is conducive and encompass multidiverse developers from different stacks and areas of the tech community."
    title="Community"/>

<Card
    image={Portfolio}
    text="During the course of the internship program, the designed curriculum will enable them to work on live project and also place them on an internship accross renowned organizations and this in turn builds their prowess and portfolios."
    title="Portfolio"/>
    </Wrapper>
    <Wrapper>
<Card
    image={Internship}
    text="We offer internship programms that covers a wide range of courses such as UI/UX, backend(.NET,C#,nodejs), frontend, fullstack, mobile software dev(flutter, dart, react native) blockchain technology, data science and machine leaerning, data analysis."
    title="Internships"/>

<Card
    image={Master}
    text="With the program structure at NUPAT, a one-day per-week master class is designed to educate interns/students on values, ethics and complexities that influence success in their world as a tech person."
    title="Masterclass"/>

<Card
    image={Excellence}
    text="At NUPAT TECHNOLOGIES we have a perception of what your imagination is, and we exceed the limit with excellence."
    title="Excellence"/>

    </Wrapper>
    </>
    );
}

 

export default init;