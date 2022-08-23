import Card from './OneCard';
// import './App.css';
import React from 'react';
import Carousel from './Carousel.jsx';
import Accomodation from './Accomodation'
import Header from '../components/Header.jsx';
// import Footer from './components/Footer.jsx';
import WhatWeDo from './WhatWeDo/WhatWeDo.jsx';
function Home() {
  return (
    <div className="App">
      <div>
      <Header/>
      </div>
     <div>
     <WhatWeDo/>
     </div>
    
      <Carousel/>
      <Card/>
      <Accomodation/>
    </div>
  );
}

export default Home;
