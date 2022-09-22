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
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  // padding-bottom: 4em;
  margin: 4rem;
  @media (max-width: 768px) {
    display: block;
    place-items:center;
  }
  
  `
  return (
    <>
    {/* <div>
      <Ulego/>
    </div>
    <div>
      <Initiative/>
    </div> */}
    <div className="Benefitss">
     <h1 style={{textAlign:'center'}}>Benefits of working with us</h1>
     <p style={{textAlign:'center'}}>We have varieties of courses available at your disposals for eitherthe  weekdays or weekend sessions in order to suit your schedules</p>
    </div>
  
    <Wrapper>
      <Card
    image={Mentor}
    text="we provide the best programs structured with diverse and brilliant mentors that put all their efforts and skills to positively influece, shape and reshape the mindset of interns to prepare them for service."
    title="Mentorship"/>

<Card
    image={Community}
    text="Create complex enterprise software, ensure reliable software integration, modernise your legacy system."
    title="Community"/>

<Card
    image={Portfolio}
    text="Create complex enterprise software, ensure reliable software integration, modernise your legacy system."
    title="Portfolio"/>





    
    </Wrapper>
    <Wrapper>
<Card
    image={Internship}
    text="Create complex enterprise software, ensure reliable software integration, modernise your legacy system."
    title="Internships"/>

<Card
    image={Master}
    text="With the program structure, a one-day per-week master class is designed to educate interns on values, ethics and complexities that influence success in their world as tech persons"
    title="Masterclass"/>

<Card
    image={Excellence}
    text="Create complex enterprise software, ensure reliable software integration, modernise your legacy system."
    title="Excellence"/>

    </Wrapper>
    </>
    );
}

 

export default init;