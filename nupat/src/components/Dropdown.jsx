import React, {useState} from 'react';
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
        <div className="dropdown-menu dropdropmenu" id='dropdropmenu'
        
        aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>

        </div>
      

  
    );
}
export default Dropdown;