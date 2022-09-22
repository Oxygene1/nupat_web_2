import React from 'react'
import styled from "styled-components"
const FootExtension = () => {
  const CopyDIV = styled.div`
  padding-top: 3rem;
  `
  return (
    <div>
      <div className='Foot_extension'>
   
         <CopyDIV> 
          <p style={{color:'#fff', textAlign:'center'}}>Copyright &copy; 2022 NUPAT TECHNOLOGIES LIMITED, All Rights Reserved</p>
         </CopyDIV>

      </div>

    </div>
  )
}

export default FootExtension