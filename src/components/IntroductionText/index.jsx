import React from 'react';

import Container from './styles';

function IntroductionText() {
  return (
    <Container>
      <p>
        <span className="line1">Somos a empresa Help a Queer,</span>{' '}
        <span className="line2">através de nossos serviços a comunidade</span>
        <span className="line3">
          LGBTQIA+ pode ter acesso simplificado e
        </span>{' '}
        <span className="line4">acessível a advogades que podem ajudar</span>{' '}
        <span className="line5">a resolver o seu problema.</span>
      </p>
    </Container>
  );
}

export default IntroductionText;
