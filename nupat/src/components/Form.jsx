import emailjs from 'emailjs-com';
import React from 'react'
import telephone from '../Images/telephone.svg';
import envelope from '../Images/envelope.svg';
// import courses from '../Images/mortarboard.svg';
import person from '../Images/person.svg';
import { useRef } from 'react';




 const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vgg3epf', 'template_1m21wrj', form.current, 'Vu3u6JveYKJuJlB4u')
      .then((result) => {
          console.log(result.text);
          alert('Your Request is now being processed and you should get a response mail shortly')
      }, (error) => {
          console.log(error.text);
          alert('There was an error trying to process your message, refresh your browser and try again!')
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
           
          /><a href="https://medium.com"><img className='envelope' src={envelope} alt="envelope"/></a>
        

    


          <input className='phoneNumber' 
            type="PhoneNumber"
            name="phoneNumber"
            placeholder='Phone Number'
            
           
            
          /><a href="https://medium.com"><img className='telephone' src={telephone} alt="" /></a>
         
        
        <div>  
        {/* <img className='courses' src={courses} alt="courses"/> */}
      <select    type="Course"
            name="Course"
            className="Course" >
        <option value="NaN">Choose a Course</option>
        <optgroup>
        <option value="Fontend">Fontend</option>
        <option value="Backend">Backend</option>
        <option value="UI/UX">UI/UX</option>
 	      <option value="Data Science">Data Science</option>
        <option value="Data Analysis">Data Analysis</option>
        <option value="Blockchain Technology">Blockchain Technology</option>
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
  )
  };



export default Form;