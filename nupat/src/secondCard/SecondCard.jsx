import React from 'react'
// import blockchain from '../src/images/blockchain.svg'
// import datascience from '../src/images/datascience.svg'
// import fullstack from '../src/Images/fullstack.svg'
// import html from '../src/images/html.svg'
// import mobile from '../src/images/mobile.svg'
// import ux from '../src/images/ux.svg'
// import Heading from './Components/Heading'
import './SecondCard.css';
import Card from '../components/CardProp.jsx'
// import Initiative from './Components/Initiative'
// import Ulego from './Components/Ulego'
const secondCard = () => {
  return (
    <div className="secondCard">
    <div className='wrapper'>
      <Card
    // img={html}
    text="Create complex enterprise software, ensure reliable software integration, modernise your legacy system."
    title="Front or Back end development"/>

<Card
    // img={mobile}
    text="Create complex enterprise software, ensure reliable software integration, modernise your legacy system."
    title="Mobile development"/>

<Card
    // img={fullstack}
    text="Create complex enterprise software, ensure reliable software integration, modernise your legacy system."
    title="Full Stack"/>

    
    </div>

    </div>
  )
}

export default secondCard