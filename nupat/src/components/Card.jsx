
import React from 'react'

function Card(props) {
    return ( 

      <div>
        <div className="Cardy">
      <img src={props.img} alt="/" className="card-img" />
      <div className="Card-body">
      <h3 className="card-title">
           {props.title}
        </h3>
        <div className="card-text">
        {props.text}
        </div>
        <p className="post">{props.post}</p>
      </div>
      </div>
      </div>
    );
  }

  export default Card;