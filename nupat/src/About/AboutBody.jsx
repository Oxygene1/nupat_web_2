
import React from 'react'
import Form from '../components/Form.jsx'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx';
// import Footer from '.Enrollment/Footer.jsx'
import Ellipse1 from '../Images/Ellipse1.jpg';
import About1 from '../Images/AboutPic1.jpg';
import About2 from '../Images/AboutPic2.png';
import About3 from '../Images/AboutPic3.jpg';
import About4 from '../Images/AboutPic4.jpg';
import Ellipse2 from '../Images/Ellipse2.jpg';
import Ellipse3 from '../Images/Ellipse3.jpg';
import Ellipse4 from '../Images/Ellipse4.jpg';
import MobileHeader from '../components/MobileHeader.jsx'
function AboutBody() {


  return (
    <div>
      <div>
          <Header/>
          <MobileHeader/>
      </div>
    
     
      
      <div>
      
      <div className="myContainer">
        <div className='About_1'>
          <h1>About Us</h1>
          <p>NUPAT Technologies is a software development company from African descent birthed by the vision of becoming a leading brand in world class innovation and delivery of masterpiece and cutting edge technology.

          The Company is founded by a group of distinct, highly skilled, innovative and experienced tech experts.

          The Company is registered with the Corporate Affairs Commission of the Federal Republic of Nigeria, established under the Companies and Allied Matters Act 1990.

          Nupat is the partner of choice for many of the world’s leading enterprises, SMEs and technology challengers. We help businesses elevate their value through custom software development, product design, QA and consultancy services.

          We can help to maintain and modernize your IT infrastructure and solve various infrastructure-specific issues a business may face.</p>
        </div>

        <div className='oval'>

        </div>
        <div className='aboutpics'>
        <img className='' src={About1} alt=''/>
        <img className='' src={About2} alt=''/>
        <img className='' src={About3} alt=''/>
        <img className='' src={About4} alt=''/>
        </div>
        <div className='oval2'>

        </div>

        
        <div className='Ellipse_main'>
        <div className='Ellipse_contain one'>
          <div>
            <h1>Our Vision</h1>
            <p>Our vision is to become a leading brand in the worldclass innovation and delivery of masterpiece and cutting-edge technology</p>
          </div>
          <div>
          <img className='Ellipseimg' src={Ellipse1} alt=''/>
          </div>
        </div>
        <div className='Ellipse_contain two'>
          <div>
          <img className='Ellipseimg2' src={Ellipse2} alt=''/>
            
          </div>
          <div>
          <h1>Our Mission</h1>
            <p>Our  Mission is to touch lives around the globe through technology and cause a global shift and focus to Nigeria and Africa at large as the world’s center for future motivations and worldclass inventions</p>
          </div>
        </div>
        <div className='Ellipse_contain three'>
          <div>
            <h1>Our Vision</h1>
            <p>Our vision is to become a leading brand in the worldclass innovation and delivery of masterpiece and cutting-edge technology</p>
          </div>
          <div>
          <img className='Ellipseimg' src={Ellipse3} alt=''/>
          </div>
        </div>
        <div className='Ellipse_contain four'>
          <div>
          <img className='Ellipseimg2'  src={Ellipse4} alt=''/>
            
          </div>
          <div>
          <h1>Our Strategy</h1>
            <p>We are building a great team  of talents and experts innovation driven with plans centered on maximum clients satisfaction</p>
          </div>
        </div>

        <div className='Ellipse_contain five'>
          <div>
            <h1>Our Goals</h1>
            <ul>
              <li>Establishment of aleding tech hub / innovationtion center in Africa </li>
              <li>Raising the largest community of developers in Africa</li>
              <li>Become Africa’s leading provider of Software Services and Applications through innovative drive</li>
              <li>Setting upnthe largest AI center in Africa , with expertise in Robotics and Data Science</li>
              <li>Become  a major player in Fin - Tech Solutions in Africa</li>
            </ul>
          </div>
          <div>
          <img className='Ellipseimg' src={Ellipse3} alt=''/>
          </div>
        </div>

        
      </div>
     
      
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