import React from 'react'
import styled from "styled-components"
const FootExtension = () => {
  const CopyDIV = styled.div`
  width:70%;
  margin-left: auto;
  margin-right: auto;
  // padding-top: 3rem;
  `
  const CopyDIVp =styled.p`
  padding-top: 3rem;
  color:#fff;
  @media (max-width:786px){
    padding-top: 3rem;
    font-size: 15px;
    // padding-bottom: 3rem;

  }
  
  `
  return (
    <div>
      <div className='Foot_extension'>
   
         <CopyDIV> 
          <CopyDIVp style={{color:'#fff', textAlign:'center'}}>Copyright &copy; 2022 NUPAT TECHNOLOGIES LIMITED. All Rights Reserved</CopyDIVp>
         </CopyDIV>

      </div>

    </div>
  )
}

export default FootExtension