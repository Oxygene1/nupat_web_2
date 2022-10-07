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
import Clients from './Clients';
import styled from 'styled-components';
// import { useEffect } from 'react';
import useDocumentTitle from '../commons/useTitle';

function App() {
  const HeaderMobile = styled(MobileHeader)`
  display: none;
  @media (max-width: 768px) {
    display:flex;
  }
  
  `
  useDocumentTitle("NUPAT TECHNOLOGIES")

  return (

    <div >
    <div>
    <Header/>
    <HeaderMobile/>
    </div>


    <div >
     
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
          <Clients/>
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
