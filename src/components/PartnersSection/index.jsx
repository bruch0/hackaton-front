import React from 'react';

import { Container, PartnersLogos } from './styles';

function PartnersSection() {
  return (
    <Container>
      <h1>Empresas Parceiras</h1>
      <p>
        Algumas de nossas principais parceiras para garantir os direitos de
        LGBTQIA+
      </p>
      <PartnersLogos>
        <img src="./images/logo-leafs.png" alt="leafs company logo" />
        <img src="./images/logo-circle.png" alt="circle company logo" />
        <img src="./images/logo-company1.png" alt="company1 company logo" />
        <img
          src="./images/logo-raid-solucoes.png"
          alt="raid solucoes company logo"
        />
        <img src="./images/logo-virgula.png" alt="virgula company logo" />
        <img
          src="./images/logo-compania-retangulos.png "
          alt="compania retangulos company logo"
        />
        <img src="./images/logo-leafs2.png" alt="leafs 2 company logo" />
        <img
          src="./images/logo-lorem-ipsum.png"
          alt="lorem-ipsum company logo"
        />
        <img src="./images/logo" alt="" />
      </PartnersLogos>
    </Container>
  );
}

export default PartnersSection;
