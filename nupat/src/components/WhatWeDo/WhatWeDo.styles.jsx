import styled from 'styled-components';

export const SectionContainer = styled.section`
  background-color: #131e47;
  color: #fff;
  padding: 0 10vw;
  padding-top: 3rem;
`;
export const TypographyHeader = styled.div`
  font-weight: 400;
  font-size: 1.3rem;
  letter-spacing: 0.1rem;
  margin-bottom: 2rem;
  h3 {
    font-size: 2rem;
  }
`;
export const SolutionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 3rem;
  .employ-us {
    margin-top: 13rem;
    p {
      width: 23rem;
      word-spacing: 0.15rem;
      line-height: 1.8rem;
      font-size: 1.5rem;
      margin-bottom: 3rem;
    }
  }
`;

export const ImageContainer = styled.div`
  width: 40rem;
  img {
    width: 100%;
  }
`;

export const Button = styled.button`
  background-color: #fff;
  color: #131e47;
  padding: 1rem 2rem;
  border none;
  border-radius : .3rem;
  cursor: pointer;
`;
export const ProductsCard = styled.div`
  position: relative;
  h3 {
    position: absolute;
    color: #fff;
    font-size: 4rem;
    width: 30rem;
    left: 16rem;
    top: 19rem;
  }
  width: 100vw;
  img {
    width: 100%;
  }
`;
