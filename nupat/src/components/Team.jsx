// import blockchain from '../src/images/blockchain.svg'
import React from 'react'
import manager from '../Images/manager.JPG'
import paulo from '../Images/paulo.JPG'
import cto from '../Images/cto.JPG'
import ceo from '../Images/ceo.JPG'
import Card from './Card'
import Initiative from './Initiative'
import Ulego from './Ulego'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

function Team() {

  
  return (
    <div className='team1'>
    <div className='teamHeader'>
    <Header />
    </div>
   
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
    <Footer/>
    </div>
    
    </div>
    );
}
 

export default Team;
