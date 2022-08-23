import React from 'react';
import { ProductsCard } from './WhatWeDo.styles';

const WhatWeDoProductCard = ({ title, imageName }) => {
  return (
    <ProductsCard>
      <h3>{title}</h3>
      <img src={imageName} alt={title} />
    </ProductsCard>
  );
};

export default WhatWeDoProductCard;
