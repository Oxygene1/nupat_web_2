import React, {useState} from 'react';
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Link } from "react-router-dom";

   function Dropdown(e) {
  //   const [isNavExpanded, setIsNavExpanded] = useState(false)

    return (
  
        <div className='nav2'>
        <button className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true">
          <span className='span1'></span>
          <span className='span2'></span>
          <span className='span3'></span>
        </button>
        {/* <div className='coverButton'></div> */}
        <div className="dropdown-menu dropdropmenu" id='dropdropmenu' aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to="/Home">Home</Link>
          <Link className="dropdown-item" to="/enrollment">CodeCademy</Link>
          <Link className="dropdown-item"  to="/Services">IT <span>Services</span></Link>
          <a href="#" className="dropdown-item" target="_blank" rel="noreferrer">Products</a>
          <a href="#" className="dropdown-item" target="_blank" rel="noreferrer">Nupat<span>Initiative</span></a>
        </div>

        </div>
      

  
    );
}
export default Dropdown;