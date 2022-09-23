
import { NavLink, Link } from "react-router-dom";
import React from 'react'
import logo from '../Images/Logo.svg';
// import styled from "styled-components";
// import dropIcon from '../Images/drop.svg';
// import Dropdown1 from '../components/Dropdown.jsx'

function Header() {

  const NormalLink = ""
  
  return (

    <div>
      <div className='Navigation' style={{ justifyContent:"center", marginRight:"0"}}>
        <div className='Logo'>
          <Link to='/'>
            <img src={logo} alt="Logo"/>
          </Link>
        </div>
       <div className="navDiv" style={{display:"flex"}}>
        {/* <nav> */}


          <NavLink exact activeClassName="active" className="active-link1" to="/">Home</NavLink>
          <NavLink to="/About-us">About Us</NavLink>
          <NavLink to="/code-camp">Code Camp</NavLink>
          <NavLink to="/IT-Services">IT <span>Services</span></NavLink>
          <a href="https://nupatinitiatives.org">Nupat Initiative</a>
          {/* <div className="dropdown dropnavy">
            <a className="dropbtn" target="_blank" rel="noreferrer">Products</a>
            <img className='dropIcon1' id='dropbtn' src={dropIcon} alt="drop icon" />
            <div className="dropdown-content dropcontendesktop">
              <a href="#" target="_blank" rel="noreferrer">Ulego</a>
              <a href="#" target="_blank" rel="noreferrer">Selenia</a>
              <a href="#" target="_blank" rel="noreferrer">SchoolBoard</a>
            </div>
          </div> */}
          {/* <div className="dropdown dropnavy">
            <a className="dropbtn2" target="_blank" rel="noreferrer">Nupat<span>Initiative</span></a>
            <img className='dropIcon1' id='dropbtn' src={dropIcon} alt="drop icon" />
            <div className="dropdown-content dropcontendesktop">
              <a href="#" target="_blank" rel="noreferrer">Project 1000</a>

            </div>
          </div> */}
       
         <button className='Joiny' href="#" rel="noreferrer">Join Us</button>
         
          </div>
  
      </div>







    </div>




  );
}

export default Header;