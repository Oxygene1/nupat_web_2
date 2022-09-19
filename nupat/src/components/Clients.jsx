import React from 'react'
import styled from 'styled-components'
import client from '../Images/Clientss.jpg'
const Clients = () => {
  const Clientsh2 = styled.h2`
      font-family: 'DM Sans';
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
      line-height: 54px;
      color: #131E47;
      margin-left:4rem;
      `
  const Clientsp = styled.p`
      font-family: 'DM Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 27px;
      color: #1E1E1E;
      margin-left:4rem;
      `
  const ClientCardContainerdiv =styled.div`
      display: flex;
      flex-direction: row;
      margin: 2rem 4rem 2rem 4rem;
      @media (max-width: 768px) {
        flex-direction: column;
      }
      
      `
  const Carddiv1 = styled.div`
      background: #131E47;
      // box-shadow: -16px -16px 0px rgba(3, 207, 214, 0.25);
      border-radius: 8px;
      width: 36.75rem;
      // height: 27.75rem;
      margin-right:1rem;
      @media (max-width: 768px) {
        margin-bottom:1rem;
        width:100%;
        padding:2rem;
      }
      // justify-content:center;
      // align-items: center;
      
      `
  const Carddiv = styled.div`
      background: #131E47;
      // box-shadow: -16px -16px 0px rgba(3, 207, 214, 0.25);
      border-radius: 8px;
      width: 36.75rem;
      // height: 27.75rem;
      // margin:1rem;
      justify-content: center;
      align-items: center;
      @media (max-width: 768px) {
        margin-bottom:1rem;
        width:100%;
        padding:2rem;
      }
      `
  const Clientsimg = styled.img`
      border-radius: 50%;
      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-top: 3rem;
      margin-bottom:2rem;
      
      `
  const Contentp = styled.p`
      font-family: 'DM Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
      text-align: center;
      color: #F2C94C;
    
      `
  const Namep = styled.p`
    
      font-family: 'DM Sans';
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 33px;
      text-align: center;
      color: #FFFFFF;
    `
    const Jobp = styled.p`
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
      text-align: center;
      color: #03CFD6;
    
      `
  return (
    <div>
      <div>
          <Clientsh2>What Our Clients are saying</Clientsh2>
          <Clientsp> Feedbacks from our clients, why wouldn’t you want to work with us.</Clientsp>
          <ClientCardContainerdiv>

          <Carddiv1>
            <Clientsimg src={client} alt="" />
            <Contentp>I really don’t know what to write rigt now, I <br /> will write this content later</Contentp>
            <Namep>Anuoluwapo <br /> Adedeji</Namep>
            <Jobp>UIUX Designer</Jobp>
          </Carddiv1>
          <Carddiv>
            <Clientsimg src={client} alt="" />
            <Contentp>I really don’t know what to write rigt now, I <br /> will write this content later</Contentp>
              <Namep>Anuoluwapo <br /> Adedeji</Namep>
              <Jobp>UIUX Designer</Jobp>
          </Carddiv>

          </ClientCardContainerdiv>
      </div>

    </div>
  )
}

export default Clients