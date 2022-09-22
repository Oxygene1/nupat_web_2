import React from "react";
import styled from "styled-components";

function SecondCard(props) {
  const Cardey = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom:  2em;
  border-radius: 10px;
  box-shadow: 0px 12px 12px 1px rgb(160, 160, 160);
  padding: 4em 0 5em;
  width: 30vw;
  @media(max-width:600px){
    width: 90%;
  }
  
  `
  const Cardimg = styled.img`
  width: 4rem;
  height: 4rem;
  padding: 1rem;
  `
  const CardTittle = styled.h3`
  margin-bottom: 1em;
  padding:2rem;
  
  `
  return ( 
    <div className='CardlistItemContainers'>

  <Cardey>
    <Cardimg type="image" src={props.image} alt="/"/>
    <div className="card-text" style={{textAlign:'center'}}>
      {props.text}
      </div>
    <CardTittle>
         {props.title}
      </CardTittle>
    </Cardey>

    </div>
    
  );
}

export default SecondCard;