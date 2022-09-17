import React from "react";
import { Link } from "react-router-dom";
import FirstDisplay from "../Images/firstDisplay.jpg"
// import 'bootstrap/dist/css/bootstrap.min.css';

const CarouselOne = () => {
  return (
    <div>
    <div className="firstcarousel">
      <div className="firstcarouselblock">
          <div className="innovdiv">
            <h1 className="innovation">
            INNOVATION <br /> AT ITS PEAK
            </h1>
          </div>
          <div>
            <div className="realidiv">

            <p className="realities">We are raising world class tech professionals, building problem solving innovations and helping you bring your dreams  to realities</p>
            </div>

            <div className="btnjoindiv">
            <Link to="/enrollment" className="JoinLink">Join US</Link>
            </div>
            
          </div>
      </div>
      <div className="firstdisplaydiv">
        <img src={FirstDisplay} alt="" />

        <div className="firstnewsletter">
          <div className="innerNewsletter">
            <div className="newsletterInputdiv">
                <input className="newsletterInput" type="text" placeholder="Send Us an email" />
            </div>
            <div>
                <button className="newsletterbtn">Send</button>
            </div>
          </div>
        </div>
      </div>

      </div>
          <div className="numberDisplay">
          <div  className="numberdiv">
            <h3>50+</h3>
            <h3>Students</h3>
          </div>

          <div className="numberdiv">
            <h3>7+</h3>
            <h3>Courses</h3>
          </div>
          <div className="numberdiv">
            <h3>50+</h3>
            <h3>Clients</h3>
          </div>
          </div>
    
    </div>
  );
};

export default CarouselOne;
