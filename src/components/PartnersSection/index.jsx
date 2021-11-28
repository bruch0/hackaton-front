import React from 'react';

import { Container, PartnersLogos } from './styles';

function PartnersSection() {
  return (
    <Container>
      <h1>Empresas Parceiras</h1>
      <p>Ajudamos pessoas a resolverem seus problemas</p>
      <PartnersLogos>
        <img src="./images/logo-leafs.png" alt="" />
        <img src="./images/logo-circle.png" alt="" />
        <img src="./images/logo-company1.png" alt="" />
        <img src="./images/logo-raid-solucoes.png" alt="" />
        <img src="./images/logo-virgula.png" alt="" />
        <img src="./images/logo-compania-retangulos.png " alt="" />
        <img src="./images/logo-leafs2.png" alt="" />
        <img src="./images/logo-lorem-ipsum.png" alt="" />
        <img src="./images/logo-heart.png" alt="" />
      </PartnersLogos>
    </Container>
  );
}

export default PartnersSection;
