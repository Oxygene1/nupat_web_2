
import React from 'react'
import Form from '../components/Form.jsx'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx';
// import Footer from '.Enrollment/Footer.jsx'
import Ellipse1 from '../Images/Ellipse1.jpg';
// import About1 from '../Images/AboutPic1.jpg';
// import About2 from '../Images/AboutPic2.png';
// import About3 from '../Images/AboutPic3.jpg';
// import About4 from '../Images/AboutPic4.jpg';
import Ellipse2 from '../Images/Ellipse2.jpg';
import Ellipse3 from '../Images/Ellipse3.jpg';
import Ellipse4 from '../Images/Ellipse4.jpg';
import MobileHeader from '../components/MobileHeader.jsx';
import styled from 'styled-components';
function AboutBody() {
const Ellipsecontain = styled.div`

display: flex;
flex-direction:row;
@media (max-width: 768px) {
  flex-direction: column-reverse;
}
  // justify-content: center;
  // margin-right:5%;
  width:100%;
  margin-top:3rem;
  
`
const Ellipsecontain2 = styled.div`
width: 100%;
display: flex;
flex-direction:row;
@media (max-width: 768px) {
flex-direction: column-reverse;
}
width:100%;
// margin-left:5%;
  // justify-content: center;
  margin-top:3rem;
`
const Visionp = styled.p`
font-family: 'DM Sans';
font-style: normal;
font-weight: 400;
font-size: 32px;
line-height: 42px;
// justify-content:center;
// text-align: center;
color: #000000;
width: 70%;
// margin-left:10%;
// margin-right:10%;
width:34.875rem;
`
const Ellipsemain= styled.div`
// width: 100%;
margin-left:10%;
margin-right: auto;

`
const About1 = styled.div`
width: 90%;
margin-right:auto;
margin-left: auto;
margin-top: 3rem;
`
const Abouth1 = styled.h1`
color:#131E47;

`
const Aboutp = styled.p`

font-family: 'DM Sans';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 26px;
color: #000000;
`
const Ecdiv = styled.div`
margin-right:15%;

`
const Ecdiv2 = styled.div`
margin-left:15%;

`
const Otherh1 = styled.h3`
color: #131E47;
font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 40px;
line-height: 52px;

`

  return (
    <div>
      <div>
          <Header/>
          <MobileHeader/>
      </div>
    
     
      
      <div>
      
      <div className="myContainer">
        <About1>
          <Abouth1>About Us</Abouth1>
          <Aboutp>NUPAT Technologies is a software development company from African descent birthed by the vision of becoming a leading brand in world class innovation and delivery of masterpiece and cutting edge technology.

          The Company is founded by a group of distinct, highly skilled, innovative and experienced tech experts.

          The Company is registered with the Corporate Affairs Commission of the Federal Republic of Nigeria, established under the Companies and Allied Matters Act 1990.

          Nupat is the partner of choice for many of the world’s leading enterprises, SMEs and technology challengers. We help businesses elevate their value through custom software development, product design, QA and consultancy services.

          We can help to maintain and modernize your IT infrastructure and solve various infrastructure-specific issues a business may face.</Aboutp>
        </About1>

        {/* <div className='oval'>

        </div> */}
        <div className='aboutpics'>
        {/* <img className='' src={About1} alt=''/>
        <img className='' src={About2} alt=''/>
        <img className='' src={About3} alt=''/>
        <img className='' src={About4} alt=''/> */}
        </div>
        {/* <div className='oval2'>

        </div> */}

        <Ellipsemain>
        <Ellipsecontain>
          <Ecdiv>
            <Otherh1>Our Vision</Otherh1>
            <Visionp>Our vision is to become a leading brand in the worldclass innovation and delivery of masterpiece and cutting-edge technology</Visionp>
          </Ecdiv>
          <div>
          <input type="image" className='Ellipseimg' src={Ellipse1} alt=''/>
          </div>
        </Ellipsecontain>
        <Ellipsecontain2>
          <div>
          <input type="image" className='Ellipseimg2' src={Ellipse2} alt=''/>
            
          </div>
          <Ecdiv2>
          <Otherh1>Our Mission</Otherh1>
            <Visionp>Our  Mission is to touch lives around the globe through technology and cause a global shift and focus to Nigeria and Africa at large as the world’s center for future motivations and worldclass inventions</Visionp>
          </Ecdiv2>
        </Ellipsecontain2>
        <Ellipsecontain>
          <Ecdiv>
            <Otherh1>Our Vision</Otherh1>
            <Visionp>Our vision is to become a leading brand in the worldclass innovation and delivery of masterpiece and cutting-edge technology</Visionp>
          </Ecdiv>
          <div>
          <input type="image" className='Ellipseimg' src={Ellipse3} alt=''/>
          </div>
        </Ellipsecontain>
        <Ellipsecontain2>
          <div>
          <input type="image" className='Ellipseimg2'  src={Ellipse4} alt=''/>
            
          </div>
          <Ecdiv2>
          <Otherh1>Our Strategy</Otherh1>
            <Visionp>We are building a great team  of talents and experts innovation driven with plans centered on maximum clients satisfaction</Visionp>
          </Ecdiv2>
        </Ellipsecontain2>

        <Ellipsecontain>
          <Ecdiv>
            <Otherh1>Our Goals</Otherh1>
            <ul>
              <li>Establishment of aleding tech hub / innovationtion center in Africa </li>
              <li>Raising the largest community of developers in Africa</li>
              <li>Become Africa’s leading provider of Software Services and Applications through innovative drive</li>
              <li>Setting upnthe largest AI center in Africa , with expertise in Robotics and Data Science</li>
              <li>Become  a major player in Fin - Tech Solutions in Africa</li>
            </ul>
          </Ecdiv>
          <div>
          <input type="image" className='Ellipseimg' src={Ellipse3} alt=''/>
          </div>
        </Ellipsecontain>

        
      </Ellipsemain>
     
      
      </div>
     
      <div>
      <Form/>
      </div>

      <Footer/>
      </div>
    </div>
    );
  }
  
  export default AboutBody;