// import Card from './Card';
import Cards from './Cards';
import OneCard from './OneCard'
import React from 'react';
import Carousel from './Carousel';
import Accomodation from './Accomodation'
import Footer from './Footer';
import ITServices from './ITservices';
import Join from './joinusCarousel'

import Header from './Header';
// import Initiative from './Initiative'
import Team from './Team' 

function App() {
  return (

    <div>

      <div className='fixedHeader'>
      <Header/>
      </div>

    <div className="App">
     
    <Join/>
      <Carousel/>
  
        <OneCard/>
        
      <Accomodation/>
      <div>
            <ITServices/>
        </div>
    
 
      {/* <Initiative/> */}
      <Cards/>
      <Team/>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
