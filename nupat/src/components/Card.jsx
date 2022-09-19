
import React from 'react'

function Card(props) {
    return ( 

      <div>
        <div className="Cardy">
    <img style={{height:"30rem"}} src={props.img} alt="/" className="card-img" />  
      <div style={{ textAlign:"center"}} className="Card-body">
      <h3 className="card-title" style={{color:'#fff'}}>
           {props.title}
        </h3>
        <div style={{marginTop:"-4rem", color:'#fff'}}  className="card-text">
        {props.text}
        </div>
        <p className="post">{props.post}</p>
      </div>
      </div>
      </div>
    );
  }

  export default Card;