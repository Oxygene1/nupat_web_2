import emailjs from 'emailjs-com';
import React from 'react'
import telephone from '../Images/telephone.svg';
import envelope from '../Images/envelope.svg';
import courses from '../Images/mortarboard.svg';
import person from '../Images/person.svg';
import { useRef } from 'react';




 const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ajo817t', 'template_yg4ofjk', form.current, 'DTUz9LR9LJy63Sr6R')
      .then((result) => {
          console.log(result.text);
          alert('Your Request is now being processed and you should get a response mail shortly')
      }, (error) => {
          console.log(error.text);
          alert('Your Request is now being processed and you should get a response mail shortly')
      });
      e.target.reset()

  };
  return(
  
  <div className='Body'>
    
  
    
    <div className='form_contain'>
    <h1 className='h1h1'>Join The next Cohort</h1>
    <div className='form_main1'>
      
    
        <form className='form1' method="get" id='contact-form' onSubmit={sendEmail } ref={form}>
          <div className='inputs'>
          <input className='names'
          placeholder='Full Name'
            type="fullNames"
            name="names" 
          /><img className='person' src={person} alt="person"/>
          
          <input className='email'
            type="email"
            name="email"
            placeholder='Email'
           
          /><img className='envelope' src={envelope} alt="envelope"/>
        

    


          <input className='phoneNumber' 
            type="PhoneNumber"
            name="phoneNumber"
            placeholder='Phone Number'
            
           
            
          /><img className='telephone' src={telephone} alt="" />
         
        
        <div>  

      <select    type="Course"
            name="Course"
            className="Course" >
        <option value="">Choose a Course</option>
        <optgroup>
        <option value="subject-one">Fontend</option>
        <option value="subject-two">Backend</option>
        <option value="subject-three">UI/UX</option>
 	      <option value="subject-four">Data Science</option>
        <option value="subject-five">Data Analysis</option>
        <option value="subject-six">Blockchain Technology</option>
        </optgroup>
         </select>
         <div>
         <img className='courses' src={courses} alt="courses"/>
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
  )
  };



export default Form;