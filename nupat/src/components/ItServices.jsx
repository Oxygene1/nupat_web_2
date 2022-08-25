import React from 'react'
import Footer from './Footer.jsx'
import Header from './Header.jsx'
import FrontPic from '../Images/hire us.gif'

const ItServices = () => {
  return (
    <div className='IT'>
      <Header/>
     
      <div className='ServicesIntro'>
       
      <h1>Hire Our Gifted Hands</h1>
        <div>


       
        <img
          className="d-block w-100"
          src={FrontPic}
          alt="First slide"
        />
        
     
       
        <img
          className="d-block w-100"
          src={FrontPic}
          alt="Second slide"
        />

     
        <img
          className="d-block w-100"
          src={FrontPic}
          alt="Third slide"
        />


        </div>

      </div>

      <Footer/>

    </div>
  )
}

export default ItServices