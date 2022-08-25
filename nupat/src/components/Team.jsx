// import blockchain from '../src/images/blockchain.svg'
import React from 'react'
import manager from '../Images/manager.JPG'
import paulo from '../Images/paulo.JPG'
import cto from '../Images/cto.JPG'
import ceo from '../Images/ceo.JPG'
import Card from './Card.jsx'
import Initiative from './Initiative.jsx'
import Ulego from './Ulego.jsx'



function Team() {

  
  return (
    <div className='team1'>

   
    <div>
      <Ulego/>
    </div>
    <div>
      <Initiative/>
    </div>
    
    <div className='wrapper'>
      <div className='wrap'>
      <Card
    img={ceo}
    title="Nnamdi Ugwu"
    post="CEO"/>
   

<Card 
    img={cto}
    title="Chibuike Ugwu"
    post="CTO"/>

<Card
    img={paulo}
    title="Olarenwaju paul"
    post="COO"/>

<Card
    img={manager}
    title="Ogunfunmilade Ibukun"
    post="Brand Manager"/>

      </div>
    </div>
    <div>
   
    </div>
    
    </div>
    );
}
 

export default Team;
