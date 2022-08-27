import Card from './OneCard';
import React from 'react';
import Team from './Team.jsx'
import Carousel from './Carousel.jsx';
import Accomodation from './Accomodation'
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
function Home() {
  return (
    <div className="App">
     <div className='fixedHeader'>
      <Header/>
      </div>
  
    
      <Carousel/>
      <Card/>
      <Accomodation/>
      <Team/>
      <Footer/>
    </div>
  );
}

export default Home;
