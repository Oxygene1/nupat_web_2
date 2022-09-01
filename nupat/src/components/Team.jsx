// import blockchain from '../src/images/blockchain.svg'
import React from 'react'
import manager from '../Images/manager.JPG'
import paulo from '../Images/paulo.JPG'
import cto from '../Images/cto.JPG'
import ceo from '../Images/ceo.JPG'
import Card from './Card.jsx'
// import Initiative from './Initiative.jsx'
// import Ulego from './Ulego.jsx'



function Team() {

  
  return (
    <div className='team1'>

   
    <div>
      {/* <Ulego/> */}
    </div>
    <div>
      {/* <Initiative/> */}
    </div>
    
    <div className='wrapperPaper'>
      <div className='wrap'>
     
   
    <div>
    <Card
        img={ceo}
        title="Nnamdi Ugwu"
        post="CEO"/>
    </div>

    <div>
      <Card 
    img={cto}
    title="Chibuike Ugwu"
    post="CTO"/>
    </div>

  <div>
      <Card
    img={paulo}
    title="Olarenwaju paul"
    post="COO"/>
      </div>

        <div>
      <Card
    img={manager}
    title="Ogunfunmilade Ibukun"
    post="Brand Manager"/>
      </div>
      </div>
    </div>
    <div>
   
    </div>
    
    </div>
    );
}
 

export default Team;
