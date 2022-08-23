
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
      <Link to="/Home">IT</Link> <Link to="/Home">Services</Link> 
     
      
      
    
      
   
          <div className="dropdown">
  <a href=""className="dropbtn" target="_blank" rel="noreferrer">Products</a>
  <img className='dropIcon1' id='dropbtn' src={dropIcon} alt="drop icon" />
  <div className="dropdown-content">
  <Link to="/Home">Ulego </Link> 
  <Link to="/Home">Selenia</Link> 
  <Link to="/Home">SchoolBoard</Link> 
  </div>
</div>
<div className="dropdown">
<Link to="/Home" className="dropbtn2" >NUPAT<span>Initiative</span></Link> 
  {/* <a href=""className="dropbtn2" target="_blank" rel="noreferrer">Nupat<span>Initiative</span></a> */}
  <img className='dropIcon1' id='dropbtn' src={dropIcon} alt="drop icon" />
  <div className="dropdown-content">
    <a>Project 1000</a>
   
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
                <Link to="/enrollment">IT Services</Link>
                <Link to="/enrollment">Products</Link>
                <Link to="/enrollment">Nupat Initiative</Link>
            </div>
      </div>
            
      </div>

     </div>
      

     
    </div>
   
    </div>
  );
}

export default Header;