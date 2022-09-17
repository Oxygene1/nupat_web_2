import React, {useState, useRef} from 'react';
import { Link } from "react-router-dom";
import logo from '../Images/Logo.svg';
// import { useDetectOutsideClick } from "./useDetectOutsideClick";
import Button from 'react'
import Dropdown from 'react-bootstrap/Dropdown';


   function MobileHeader(e) {
    // const dropdownRef = useRef(null);
    // const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    // const onClick = () => setIsActive(!isActive);
    
   
  

    return (
  
        <div className='nav2'>

          <div className='Logo'>
          <Link to='/'>
            <img src={logo} alt="Logo" />
          </Link>
          </div>
      <div className='DropButtonDiv1'>
      <Dropdown>

      <button className="toggle1"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true">
      <svg className="Hamburger1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>

            </button>

      </Dropdown>
        {/* <div className='coverButton'></div> */}
        <Dropdown.Menu>
        {/* <div  aria-labelledby="navbarDropdown"> */}
        <Dropdown.Item style={{backgroundColor:'dodgerblue'}} href="#/action-1">  <Link  to="/">Home</Link>     </Dropdown.Item>
          <Link  to="/">Home</Link>
          <Link to="/enrollment">CodeCademy</Link>
          <Link  to="/Services">IT <span>Services</span></Link>
          <a href="#" target="_blank" rel="noreferrer">Products</a>
          <a href="#" target="_blank" rel="noreferrer">Nupat<span>Initiative</span></a>
        {/* </div> */}
      </Dropdown.Menu>

      </div>
     

        </div>
      

  
    );
}
export default MobileHeader;