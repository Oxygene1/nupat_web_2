import React from 'react';
import pics from '../Images/Ini1.png';
import pic from '../Images/Ini2.png';
import pic3 from '../Images/Ini3.png';
import eclipse from '../Images/Ellipse.png';
import star from '../Images/Star 1.svg'



function Initiative() {
    return (
      <>
      <div className="initiative">
        <h1 className='h1'>NUPAT INITIATIVE</h1>
        <div className='eclipse'>
                <div className='eclipse1'>
                  <img src={eclipse} alt="/" />
                </div>
                <div className='star'>
                  <img src={star} alt="/" />
                </div>
        </div>
        <div className="init-text-img">
            <div className="init-imgs">
              <div className='init-img init-Img1'>
                <div className='init1'><img className='imginit1' src={pics} alt="/"/></div>
               <div><img className='imginit1' src={pic3} alt="/"/></div>
              </div>
              <div className='init-img init-Img2' >
                <img className='imginit2' src={pic} alt="/"/>
                </div>
            </div>
            <div className='init-textbtn'>
            <div className="init-text">
              About Nupat initiative - We give back to the community by training kids in the slum about tech 
            </div>
            <button className='init-btn'>Donate</button>
            </div>
        </div>
        <div className='eclipse2'>
                <div className='eclipse3'>
                  <img src={eclipse} alt="/" />
                </div>
                <div className='star2'>
                  <img src={star} alt="/" />
                </div>
        </div>
      </div>
      </>
    );
  }

  export default Initiative;