import React from "react";
import styled from "styled-components";

function SecondCard(props) {
  const Cardey = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
    border-radius: 10px;
    // justify-content: center;
    box-shadow: 0px 12px 12px 1px rgb(160, 160, 160);
    padding: 2rem;
    // height:20rem;
    width: 100%;
    @media (max-width: 786px) {
      height: ;
      // max-height:none;
      // padding:2rem;
      justify-content: center;
      display: block;
      // margin: 0 2rem 2rem 0;
      gap: 1rem;
      width: 95%;
      margin-left: auto;
      margin-right: auto;
    }
  `;
  const Cardimg = styled.img`
    width: 3rem;
    height: 3rem;
    // padding: 1rem;
    @media (max-width: 786px) {
      margin-left: 42%;
    }
  `;
  const CardTittle = styled.h3`
    padding: 1rem;
  `;
  return (
    <div className="CardlistItemContainers">
      <Cardey>
        <Cardimg type="image" src={props.image} alt="/" />
        <div
          className="card-text"
          style={{ textAlign: "left", justifyContent: "space-between" }}
        >
          {props.text}
        </div>
        <CardTittle style={{ textAlign: "center" }}>{props.title}</CardTittle>
      </Cardey>
    </div>
  );
}

export default SecondCard;
