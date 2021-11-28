import styled from 'styled-components';

export const Container = styled.section`
  height: 440px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-top: 40px;
  }

  p {
    margin-top: 24px;
    color: #737b7d;
  }
`;

export const PartnersLogos = styled.div`
  max-width: 840px;
  text-align: center;

  img {
    margin: 32px 40px;
    cursor: pointer;

    &:hover {
      filter: contrast(50%);
      transition: 0.2s ease;
    }
  }
`;
