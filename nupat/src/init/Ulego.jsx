import phone from '../Images/phone.jpg'
import React from 'react';
import './app.css'

function Ulego() {
    return (
      <div className="ulego">
        {/* <h2 className='ulegoh2' style={{fontSize: "60px", fontWeight: "600"}}>Ulego</h2> */}
        <div className="ulego-text-imgy">
            <div className="ulego-img">
                <img src={phone} alt="/" className='ulegoimg' />
            </div>
            <div className='ulego-textbtn'>
            <div className="ulego-text">
             <h3>   About the products, details, links, request.  </h3>
            </div>
            <button className='ulego-btn'>Download now</button>
            </div>
        </div>
      
      </div>
    );
  }

  export default Ulego;