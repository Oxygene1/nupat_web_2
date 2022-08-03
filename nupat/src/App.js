import Card from './components/Card';
import './App.css';
import React from 'react';
import Carousel from './components/Carousel';
import Accomodation from './components/Accomodation'

function App() {
  return (
    <div className="App">
      <Carousel/>
      <Card/>
      <Accomodation/>
    </div>
  );
}

export default App;
