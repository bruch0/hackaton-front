import React from 'react';
import SignupButton from '../SignupButton';

import Container from './styles';

function IntroductionText() {
  return (
    <Container>
      <p>
        Somos a empresa tal, através de nossos serviços a comunidade LGBTQIA+
        pode ter acesso simplificado e gratuito a advogados e instituições que
        podem ajudar a resolver o seu problema
      </p>
      <SignupButton />
    </Container>
  );
}

export default IntroductionText;
