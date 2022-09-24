import React from 'react'
import Footer from './Footer.jsx'
import Header from './Header.jsx'
import emailjs from 'emailjs-com';
import { useRef } from 'react';
import MobileHeader from './MobileHeader.jsx'
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
  const HireUsh1 =styled.h1`
  color:  #fff;
  font-weight: 700;
  font-size: 35px;
  padding:.4rem;
  margin-left:40%;
  // text-align:center;
  // padding-top:4rem;
  @media (max-width:786px){
    font-size: 25px;
    font-weight: 500;
  }
  `
  const Hireh1div = styled.div`
  width:100%;
  background-color: rgba(0, 0, 0, 0.5);
  height:100%;
  padding-top:15rem;

  `
  const Servicediv =styled.div`
  // margin-top:2rem;
  @media (max-width:786px){
   margin-top:1rem;
  }
  `
  const ServicesImage =styled.svg`
  color:#131E47;
  width: 5rem;
  height:5rem;
  
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
    <div>

      <Header/>
      <MobileHeader/>


      <div className='displayBanner'>
      <Hireh1div><HireUsh1>IT Services</HireUsh1></Hireh1div>
           
        </div>
      <div className='servicesmanin'>

       
      
        <div className='servicesDisplay1'>
        <div>
        <ServicesImage xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </ServicesImage>

        <Servicediv>
        <h3>Frontend Service</h3>
        <p className='servicePara'>
          With our knowledge in different kinds of web frameworks and technology like React, Vue, and Angular, our skilled engineers create products that are user friendly and aligned with your company's goals and objectives.
        </p>
        <div>
        <button className='scrollbtn' onClick={executeScroll} type="submit" value="Test 2" to="test2" offset={50} duration={500}>Reach Us</button>
        </div>
        </Servicediv>
        
        
         
        </div>

     
        <Servicediv>
        <ServicesImage xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </ServicesImage>

       <div>
        <h3>Backend Services</h3>
        <p className='servicePara'>We use the latest .NET framework and software design/architecture, to develop enterprise backend applications for any kind of business ranging from fintech apps to e-commercer solutions.</p>
        <div>
        <button className='scrollbtn' onClick={executeScroll}  to="form1"
          offset={-70}
          duration={500}>Reach Us</button>
        </div>
        </div>
        </Servicediv>

      <Servicediv>

      <ServicesImage xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25" />
      </ServicesImage>

        <div>
        <div>
        <h3>API Service</h3>
        <p className='servicePara'>We design efficient REST APIs tailored to meet your business needs so as to facilite seamless extension of functionalities to your web/mobile applications </p>
        <div>
        <button className='scrollbtn' onClick={executeScroll}>Reach Us</button>
        </div>
        </div>
          </div>
         
      </Servicediv>
       


        </div>
        <div className='servicesDisplay2'>
        <Servicediv><ServicesImage xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </ServicesImage>

        <div>
        <div>
        <h3>Data Science Services</h3>
        <p className='servicePara'>Our team of Data Scientists are versertile and well detailed with the use of contemporaray tools to collect large data sets for analytical, statistical, and programming solutions that are explicitly tailored toward the needs of an organization. </p>
        <div>
        <button className='scrollbtn' onClick={executeScroll}>Reach Us</button>
        </div>
        </div>
          </div>
        
        </Servicediv>

       
        
        
     
        <Servicediv>
          
        <ServicesImage xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></ServicesImage>


        <div>
        <div>
        <h3>UI/UX Services</h3>
        <p className='servicePara'>Our UI/UX designers are well farmilia withr user interface for an apps, websites, or other interactive media. Their collaboration with product managers and engineers to gathering requirements from users before designing ideas that can be communicated using storyboards.</p>
        <div>
        <button className='scrollbtn' onClick={executeScroll}>Reach Us</button>
        </div>
        </div>
          </div>
       
        </Servicediv>
        

      <Servicediv>

      <ServicesImage xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z" />
    </ServicesImage>
        <div>
        <div>
        <h3>Blockchain Expert Service</h3>
        <p className='servicePara'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure alias numquam delectus, optio totam aliquid? Beatae impedit eveniet modi tempora distinctio neque molestias ullam, iusto sequi dolores ad provident dignissimos.</p>
        <div>
        <button className='scrollbtn' onClick={executeScroll}>Reach Us</button>
        </div>
        </div>
          </div>
       
      </Servicediv>
       


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
    {/* </div> */}









      </div>

      <Footer/>

    </div>
  )
}

export default Services