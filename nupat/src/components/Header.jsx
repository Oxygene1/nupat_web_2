
import { Link } from "react-router-dom";
import React from 'react'
import logo from '../Images/Logo.svg';
import dropIcon from '../Images/drop.svg';

function Header() {
  return (
    <div className='Header'>
   
   <div className='Nav'>
   <img className='Logo' src={logo} alt="Logo" />

    <nav id='dropAppend'>
      
    <Link to="/Home">Home</Link>
     
      <Link to="/enrollment">CodeCademy</Link>
      <a href="#" target="_blank" rel="noreferrer">IT <span>Services</span></a>
     
      
      
    
      
   
          <div className="dropdown">
  <a href="#"className="dropbtn" target="_blank" rel="noreferrer">Products</a>
  <img className='dropIcon1' id='dropbtn' src={dropIcon} alt="drop icon" />
  <div className="dropdown-content">
    <a href="#" target="_blank" rel="noreferrer">Ulego</a>
    <a href="#" target="_blank" rel="noreferrer">Selenia</a>
    <a href="#" target="_blank" rel="noreferrer">SchoolBoard</a>
  </div>
</div>
<div className="dropdown">
  <a href="#"className="dropbtn2" target="_blank" rel="noreferrer">Nupat<span>Initiative</span></a>
  <img className='dropIcon1' id='dropbtn' src={dropIcon} alt="drop icon" />
  <div className="dropdown-content">
    <a href="#" target="_blank" rel="noreferrer">Project 1000</a>
   
  </div>
</div>
      <a className='Join' href="#" target="_blank" rel="noreferrer">Join Us</a>







    </nav>
  
     <div className='nav2'>

     <div className="media_button">
      <div className="dropdown">
      <button className="btn btn-primary dropdown-toggle"  type="button" id="menu1 mediaButton" data-toggle="dropdown">
                <span className='span1'></span>
                <span></span>
                <span></span>
                
                
               
            </button>
            <div className="dropdown-content dropdrop">
                <Link to="/Home">Home</Link>
     
                <Link to="/enrollment">CodeCademy</Link>
                <a href="#">IT Services</a>
                <a href="#">Products</a>
                <a href="#">Nupat Initiative</a>
            </div>
      </div>
            
      </div>

     </div>
      

     
    </div>
   
    </div>
  );
}

export default Header;