
import { Link } from "react-router-dom";
import React from 'react'
import logo from '../Images/Logo.svg';
// import dropIcon from '../Images/drop.svg';
// import Dropdown1 from '../components/Dropdown.jsx'

function Header() {
  
  return (

    <div>
      <div className='Navigation' style={{ justifyContent:"center", marginRight:"0"}}>
        <div className='Logo'>
          <Link to='/'>
            <img src={logo} alt="Logo" />
          </Link>
        </div>
       <div className="navDiv" style={{display:"flex"}}>
        {/* <nav> */}


          <Link to="/">Home</Link>

          <Link to="/enrollment">CodeCademy</Link>
          <Link to="/Services">IT <span>Services</span></Link>
          <a href="#" rel="noreferrer">Nupat Initiative</a>
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