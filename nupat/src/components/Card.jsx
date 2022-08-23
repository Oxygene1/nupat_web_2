import React from 'react'


function Card(props) {
    return ( 
      
        <div className="Card">
      <img src={props.img} alt="/" className="card-img" />
      <div className="Card-body">
      <h3 className="card-title">
           {props.title}
        </h3>
        <p className="post">{props.post}</p>
      </div>
      </div>
    );
  }

  export default Card;