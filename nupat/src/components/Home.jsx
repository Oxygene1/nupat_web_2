// import Card from './Card';
import Cards from './Cards';
// import OneCard from './OneCard'
import React from 'react';
import Carousel from './Carousel';
import Accomodation from './Accomodation'
import Footer from './Footer';
import ITServices from './ItServices.jsx';
import Join from './joinusCarousel'
import Init from '../init/Init'
import Header from './Header';
// import Initiative from './Initiative'
import Team from './Team' 

function App() {
  return (

    <div>
    <Header/>
      {/* <div className='fixedHeader'>
      
      </div> */}

    <div>
     
    <Join/>
    <div>
       <Carousel/>
    </div>
     
        <div>
           <Cards/>
        </div>
        <div>
        <Accomodation/>

        </div>
    
      <div>
        <ITServices/>
      </div>
      <div>
          <Init/>
        </div>
    
 
    
     
      <Team/>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
