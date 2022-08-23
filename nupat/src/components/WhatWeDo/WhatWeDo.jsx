import React from 'react';
import {
  SectionContainer,
  TypographyHeader,
  SolutionContainer,
  ImageContainer,
  Button,
} from './WhatWeDo.styles';

const WhatWeDo = () => {
  return (
    <SectionContainer>
      <TypographyHeader>
        <h3>IT Services</h3>
        <h4>We build products and render services</h4>
      </TypographyHeader>
      <SolutionContainer>
        <div className="employ-us">
          <p>
            We offer technological solutions ranging from building
            website to building both web and mobile applications
          </p>
          <Button>Employ us</Button>
        </div>
        <ImageContainer>
          <img src="./assets/nupat1.jpg" alt="" />
        </ImageContainer>
      </SolutionContainer>
    </SectionContainer>
  );
};

export default WhatWeDo;
