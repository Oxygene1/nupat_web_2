import React from "react";


function SecondCard(props) {
  return ( 
    <div className='CardlistItemContainers'>

  <div className="Card">
    <img src={props.img} alt="/" className="card-img" />
    <div className="card-text">
      {props.text}
      </div>
    <h3 className="card-title">
         {props.title}
      </h3>
    </div>

    </div>
    
  );
}

export default SecondCard;