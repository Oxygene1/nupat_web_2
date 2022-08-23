import React from 'react'
import logoo from '../Images/Logo.svg';
import { Link } from "react-router-dom";
import FootExtension from './FootExtension.jsx';

function Footer() {
  return (
    <div className='FootWork'>
     <div className="homefooterhead">
    <div className='homesubscribe'>
    <h1>Subscribe</h1>
    <p>Join our community and get the latest <br /> information about our products an services. </p>
    </div>
    <div className="form-btn">
    <form>
    <input type="text" placeholder="your email address" id="homeform"></input>
   </form>
   <button className="join-us">Join Us</button>
    </div>
    </div>



    <div className="Foot-nav">
        <div className="logo-nav">
        <div>
        <img className="Logoo" src={logoo} alt="Logo" />
        </div>
        <div>
        <ul>
          <li>Quick Links</li>
          <li>FAQ</li>
          <li>News</li>  
        </ul>
        </div>
        </div>
        <div>
        <ul>
          <li>What we do</li>
          <li>Codecamp</li>
          <li>IT Services</li>
          <li>Our products</li>
         
        </ul>
        </div>
        <div>
        <ul>
          <li>Community</li>
          <li>Nupat Initiative</li>
          <li>Project 1000</li>
          
        </ul>
        </div>
        <div>
        <ul>
          <li>Join US</li>
          <li>Donate</li>
          <li>Be a partner</li>
          <li>Pitch your idea</li>
        </ul>
        </div>
        <div>
        <ul>
          <li>About</li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>Career</li>
          <li><Link to="/Team">Leadership</Link></li>
          <li>Mentors</li>
          <li>Contact us</li>
        </ul>
        </div>
       
        </div>
        <FootExtension/>
    </div>
    );
  }
  
  export default Footer;