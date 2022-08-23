import React from 'react';
import './App.scss';
import WhatWeDo from './components/WhatWeDo/WhatWeDo';
import nupat2 from './assets/nupat2.jpg';
import nupat3 from './assets/nupat3.jpg';
import nupat4 from './assets/nupat4.jpg';
import nupat5 from './assets/nupat5.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import WhatWeDoProductCard from './components/WhatWeDo/WhatWeDoProductCard';

const App = () => {
  const imageArray = [
    { nupat: nupat2, title: 'Software Development', id: 1 },
    { nupat: nupat3, title: 'Product design', id: 2 },
    { nupat: nupat4, title: 'Let’s Build your websites', id: 3 },
    {
      nupat: nupat5,
      title: 'Search Engine Optimization (SEO)',
      id: 4,
    },
  ];
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <WhatWeDo />
        </SwiperSlide>
        {imageArray.map(({ nupat, title, id }) => (
          <SwiperSlide key={id}>
            <WhatWeDoProductCard title={title} imageName={nupat} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default App;
