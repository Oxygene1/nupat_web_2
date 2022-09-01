import React from "react";


function SecondCard(props) {
  return ( 
      <div className="Card">
    <img src={props.img} alt="/" className="card-img" />
    <div className="card-text">
      {props.text}
      </div>
    <h3 className="card-title">
         {props.title}
      </h3>
    </div>
  );
}

export default SecondCard;