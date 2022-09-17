import Cards from './Cards';
import React from 'react';
import Carousel from './Carousel';
// import Accomodation from './Accomodation'
import Footer from './Footer';
import ITServices from './ItServices.jsx';
import Join from './joinusCarousel'
import Init from '../init/Init'
import Header from './Header';
import MobileHeader from './MobileHeader.jsx'
import Team from './Team' 
import Testimonials from './Testimonials';

function App() {
  return (

    <div>
    <div>
    <Header/>

    </div>
    <MobileHeader/>
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
        <ITServices/>
        </div>
        <div>
          <Testimonials/>
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
