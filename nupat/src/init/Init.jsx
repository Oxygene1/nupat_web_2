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
import Card from './Card.jsx'
import Initiative from './Initiative'
import Ulego from './Ulego'

function init() {
  return (
    <>
    <div>
      <Ulego/>
    </div>
    <div>
      <Initiative/>
    </div>
    <div className="Benefitss">
     <h1 style={{color:"black"}}>Benefits of working with us</h1>
     <p>We have varieties of courses available at your disposals for eitherthe  weekdays or weekend sessions in order to suit your schedules</p>
    </div>
  
    <div className='wrapper1'>
      <Card
    img={Mentor}
    text="Create complex enterprise software, ensure reliable software integration, modernise your legacy system."
    title="Mentorship"/>

<Card
    img={Community}
    text="Create complex enterprise software, ensure reliable software integration, modernise your legacy system."
    title="Community"/>

<Card
    img={Portfolio}
    text="Create complex enterprise software, ensure reliable software integration, modernise your legacy system."
    title="Portfolio"/>





    
    </div>
    <div className='wrapper1'>
<Card
    img={Internship}
    text="Create complex enterprise software, ensure reliable software integration, modernise your legacy system."
    title="Internships"/>

<Card
    img={Master}
    text="Create complex enterprise software, ensure reliable software integration, modernise your legacy system."
    title="Masterclass"/>

<Card
    img={Excellence}
    text="Create complex enterprise software, ensure reliable software integration, modernise your legacy system."
    title="Excellence"/>

    </div>
    </>
    );
}

 

export default init;