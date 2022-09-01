import phone from '../Images/phone.jpeg'
import React from 'react';
import './app.css'

function Ulego() {
    return (
      <div className="ulego">
        <h2 className='ulegoh2' style={{fontSize: "60px", fontWeight: "600"}}>Ulego</h2>
        <div className="ulego-text-img">
            <div className="ulego-img">
                <img src={phone} alt="/" className='ulego-img' />
            </div>
            <div className='ulego-textbtn'>
            <div className="ulego-text">
              About the products, details, links, request.
            </div>
            <button className='ulego-btn'>Download now</button>
            </div>
        </div>
      
      </div>
    );
  }

  export default Ulego;