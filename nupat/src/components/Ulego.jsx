import phone from '../Images/Ulego1.png';
import phone2 from '../Images/Ulego2.png';
import React from 'react'
// import phone3 from '../images/Ulego3.png'


function Ulego() {
    return (
<div>
      <div className="ulego">
        <h2 className='ulegoh2'>Ulego</h2>
        <div className="ulego-text-img">
            <div className="ulego-img">
                <img src={phone} alt="/" className='ulego-img1' />
                <img src={phone2} alt="/" className='ulego-img2' />
                {/* <img src={phone3} alt="/" className='ulego-img3' /> */}
            </div>
            <div className='ulego-textbtn'>
            <div className="ulego-text">
              About the products, details, links and request.
            </div>
           <a href="https://play.google.com/store/apps/details?id=com.ulegoapp_app"><button className='ulego-btn'>Download now</button></a> 
            </div>
        </div>
      
      </div>
      </div>
    );
  }

  export default Ulego;