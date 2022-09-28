import React from 'react'
import styled from 'styled-components'
import client from '../Images/Client3.jpeg'
import ClientTwo from "../Images/clientTwo.jpeg"
const Clients = () => {
  const Clientsh2 = styled.h2`
      font-family: 'DM Sans';
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
      line-height: 54px;
      color: #131E47;
      margin-top: 2rem;
      // margin-left:4rem;
      @media (max-width: 786px){
        font-weight: 600;
        font-size: 30px;
        line-height: 40px;
      }
      `
  const Clientsp = styled.p`
      font-family: 'DM Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 27px;
      color: #1E1E1E;
      margin-left:4rem;
      @media (max-width: 786px){
        width:70%;
      }
      `
  const ClientCardContainerdiv =styled.div`
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin: 2rem 4rem 2rem 4rem;
      @media (max-width: 768px) {
        margin: 2rem 0 0 5%;
        flex-direction: column;
        width: 100%;
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
        width:90%;
        padding:2rem;
      }
      
      `
  const Carddiv = styled.div`
      background: #131E47;
      border-radius: 8px;
      width: 36.75rem;
      justify-content: center;
      align-items: center;
      @media (max-width: 768px) {
        // margin-left: auto;
        // margin-right: 5rem;
        margin-bottom:1rem;
        width:90%;
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
      width: 12rem;
      height: 12rem;
      border: 2px solid #fff;
      
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

  return (
    <div>
      {/* <div> */}
          <Clientsh2 style={{textAlign:'center'}}>What Our Clients Are Saying:</Clientsh2>
          <ClientCardContainerdiv>

          <Carddiv1>
            <Clientsimg src={client} alt="" />
            <Contentp>"Its been a lovely time working with <br /> Nupat Technologies"</Contentp>
            <Namep>Augustine <br/> Aguworumba</Namep>
            
          </Carddiv1>
          <Carddiv>
            <Clientsimg src={ClientTwo} alt="" />
            <Contentp>"The teaching style and services they<br />provide is top notch"</Contentp>
              <Namep>Adegunwa <br /> Fisola</Namep>
          </Carddiv>

          </ClientCardContainerdiv>

    </div>
  )
}

export default Clients