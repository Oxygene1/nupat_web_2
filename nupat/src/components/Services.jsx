import React from 'react'
import Footer from './Footer.jsx'
import Header from './Header.jsx'
// import FrontPic from '../Images/hire us.gif'
import Frontend from '../Images/FrontEnd.jpg'
import Backend from '../Images/BackendNew.jpg'
import API from '../Images/API1.png'
import Data from '../Images/datasc.png'
import UI from  '../Images/UIModern.svg'
import Blockchain from '../Images/BlockTech.jpg'
// import { Link, animateScroll as scroll } from "react-scroll";
import emailjs from 'emailjs-com';
import { useRef } from 'react';
import MobileHeader from './MobileHeader.jsx'
// import Banner from '../Images/cont3.jpg'
import styled from 'styled-components'

const Services = () => {
  const Btnbtn = styled.button`
  display: flex;
  padding:1rem;
  text-decoration: none;
  background-color:#fff;
  border-style:none;
  font-size: 1.2rem;
  font-weight: 600;
  color: #131E47;
  border-radius: .8rem;
  margin-top:2rem;
  min-width: 6.5rem;
  justify-content: center;
  `
  const form = useRef();
  

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vgg3epf', 'template_o2l38ia', form.current, 'Vu3u6JveYKJuJlB4u')
      .then((result) => {
          console.log(result.text);
          alert('Your Request is now being processed and you should get a response mail shortly')
      }, (error) => {
          console.log(error.text);
          alert('There was an error trying to process your message, refresh your browser and try again!')
      });
      e.target.reset()
      
    };
    const scrollToRef = (scrl) => window.scrollTo(0, scrl.current.offsetTop)
    const executeScroll = () => scrollToRef(form)
  
       
    


  return (
    <div className='IT'>
      {/* <div className='fixedHeader2'> */}

      <Header/>
      <MobileHeader/>
      {/* </div> */}
      <div className='servicesmanin'>

      
      
      <div className='displayBanner' style={{ width:'100%'}} >
      <div className='Hireh1div'><h1>Hire Our Gifted Hands</h1></div>
           
        </div>
     
      <div className='ServicesIntro'>
       
      
        <div className='servicesDisplay1'>
        <div>
      <img
          className="servicesImage"
          src={Frontend}
          alt="First slide"
        />
        <div>
        <h3>Frontend Service</h3>
        <p className='servicePara'>
          With our knowledge in different kinds of web frameworks and technology like React, Vue, and Angular, our skilled engineers create products that are user friendly and aligned with your company's goals and objectives.
        </p>
        <div>
        <button className='scrollbtn' onClick={executeScroll} type="submit" value="Test 2" to="test2" offset={50} duration={500}>Reach Us</button>
        </div>
        </div>
        
        
         
        </div>

     
        <div>
          <img
          className="servicesImage"
          src={Backend}
          alt="Second slide"
        />
       <div>
        <h3>Backend Services</h3>
        <p className='servicePara'>We use the latest .NET framework and software design/architecture, to develop enterprise backend applications for any kind of business ranging from fintech apps to e-commercer solutions.</p>
        <div>
        <button className='scrollbtn' onClick={executeScroll}  to="form1"
          offset={-70}
          duration={500}>Reach Us</button>
        </div>
        </div>
        </div>

      <div>

         <img
          className="servicesImage"
          src={API}
          alt="Third slide"
        />
        <div>
        <div>
        <h3>API Service</h3>
        <p className='servicePara'>We design efficient REST APIs tailored to meet your business needs so as to facilite seamless extension of functionalities to your web/mobile applications </p>
        <div>
        <button className='scrollbtn' onClick={executeScroll}>Reach Us</button>
        </div>
        </div>
          </div>
         
      </div>
       


        </div>
        <div className='servicesDisplay2'>
        <div><img
          className="servicesImage"
          src={Data}
          alt="First slide"
        />
        <div>
        <div>
        <h3>Data Science Services</h3>
        <p className='servicePara'>Our team of Data Scientists are versertile and well detailed with the use of contemporaray tools to collect large data sets for analytical, statistical, and programming solutions that are explicitly tailored toward the needs of an organization. </p>
        <div>
        <button className='scrollbtn' onClick={executeScroll}>Reach Us</button>
        </div>
        </div>
          </div>
        
        </div>

       
        
        
     
        <div><img
          className="servicesImage"
          src={UI}
          alt="Second slide"
        />
        <div>
        <div>
        <h3>UI/UX Services</h3>
        <p className='servicePara'>Our UI/UX designers are well farmilia withr user interface for an apps, websites, or other interactive media. Their collaboration with product managers and engineers to gathering requirements from users before designing ideas that can be communicated using storyboards.</p>
        <div>
        <button className='scrollbtn' onClick={executeScroll}>Reach Us</button>
        </div>
        </div>
          </div>
       
        </div>
        

      <div>

         <img
          className="servicesImage"
          src={Blockchain}
          alt="Third slide"
        />
        <div>
        <div>
        <h3>Blockchain Expert Service</h3>
        <p className='servicePara'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure alias numquam delectus, optio totam aliquid? Beatae impedit eveniet modi tempora distinctio neque molestias ullam, iusto sequi dolores ad provident dignissimos.</p>
        <div>
        <button className='scrollbtn' onClick={executeScroll}>Reach Us</button>
        </div>
        </div>
          </div>
       
      </div>
       


        </div>


        <div className='form_contain'>
   
    <div className='form_main1' >
      
    
        <form className='form1' method="get" id='contact-form' onSubmit={sendEmail } ref={form}>
          <div className='inputs'>
          <input className='names'
          placeholder='Full Name / Company Name'
            type="fullNames"
            name="name?companyName" 
          />
          
          <input className='email'
            type="email"
            name="email"
            placeholder='Email'
           
          />
        

    


          <input className='phoneNumber' 
            type="PhoneNumber"
            name="phoneNumber"
            placeholder='Phone Number'
            
           
            
          />
         
        
        <div>  

      <select    type="Course"
            name="Service"
            className="Course" >
        <option value="Blank">Choose a Service</option>
        <optgroup>
        <option value="Fontend Services">Fontend Services</option>
        <option value="Backend Services">Backend Services</option>
        <option value="UI/UX Services">UI/UX Services</option>
 	      <option value="Data Science Services">Data Science Services</option>
        <option value="Data Analysis Services">Data Analysis Services</option>
        <option value="Blockchain Technology Services">Blockchain Technology Services</option>
        <option value="Others">Other Services</option>
        </optgroup>
         </select>
         <div>
         
         </div>
        
        
      </div>
         
          </div>
          <div className='text_button'>
          <textarea placeholder='What details do you need ?' name='message'></textarea>
          
          <div>
            <Btnbtn type="submit" name='submit'>Send</Btnbtn> 

          </div>
            
          
          
          </div>
        </form>
   

    </div>
    </div>
    </div>









      </div>

      <Footer/>

    </div>
  )
}

export default Services