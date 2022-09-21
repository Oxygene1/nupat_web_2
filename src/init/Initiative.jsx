import pics from '../Images/babies.PNG'
import React from "react";

function Initiative() {
    return (
      <div className="initiative">
        <h1 className='h1'>NUPAT INITIATIVE</h1>
        <div className="init-text-imgy">
            <div className="init-img">
                <img src={pics} alt="/" className='init-img-main' />
            </div>
            <div className='init-textbtn'>
            <div className="init-text">
              About Nupat initiative;We give back to the community by training kids in the slum about tech 
            </div>
            <button className='init-btn'>Donate</button>
            </div>
        </div>
      
      </div>
    );
  }

  export default Initiative;