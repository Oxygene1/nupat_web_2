import React from 'react'
import Footer from './Footer.jsx'
import Header from './Header.jsx'
// import FrontPic from '../Images/hire us.gif'
import Frontend from '../Images/FrontEnd.jpg'
import Backend from '../Images/BackendNew.jpg'
import API from '../Images/API1.png'
import Data from '../Images/DataScience.svg'
import UI from  '../Images/UIModern.svg'
import Blockchain from '../Images/BlockTech.jpg'
// import { Link, animateScroll as scroll } from "react-scroll";
import emailjs from 'emailjs-com';
import { useRef } from 'react';
import MobileHeader from './MobileHeader.jsx'
// import Banner from '../Images/cont3.jpg'


const Services = () => {
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
           
        </div>
     
      <div className='ServicesIntro'>
       <div className='Hireh1div'><h1>Hire Our Gifted Hands</h1></div>
      
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure alias numquam delectus, optio totam aliquid? Beatae impedit eveniet modi tempora distinctio neque molestias ullam, iusto sequi dolores ad provident dignissimos.
        </p>
        <div>
        <button className='scrollbtn' onClick={executeScroll} type="submit" value="Test 2" to="test2" spy={true} smooth={true} offset={50} duration={500}>Reach Us</button>
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
        <p className='servicePara'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure alias numquam delectus, optio totam aliquid? Beatae impedit eveniet modi tempora distinctio neque molestias ullam, iusto sequi dolores ad provident dignissimos.</p>
        <div>
        <button className='scrollbtn' onClick={executeScroll}  to="form1"
          spy={true}
          smooth={true}
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
        <p className='servicePara'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure alias numquam delectus, optio totam aliquid? Beatae impedit eveniet modi tempora distinctio neque molestias ullam, iusto sequi dolores ad provident dignissimos.</p>
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
        <h3>Data Scientist Services</h3>
        <p className='servicePara'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure alias numquam delectus, optio totam aliquid? Beatae impedit eveniet modi tempora distinctio neque molestias ullam, iusto sequi dolores ad provident dignissimos.</p>
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
        <p className='servicePara'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure alias numquam delectus, optio totam aliquid? Beatae impedit eveniet modi tempora distinctio neque molestias ullam, iusto sequi dolores ad provident dignissimos.</p>
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
        </optgroup>
         </select>
         <div>
         
         </div>
        
        
      </div>
         
          </div>
          <div className='text_button'>
          <textarea placeholder='What details do you need ?' name='message'></textarea>
          <button className='btnbtn' type="submit" name='submit'>Send</button> 
            
          
          
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