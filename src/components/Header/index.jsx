import React from 'react';
import IntroductionText from '../IntroductionText';
import Wrapper from '../Wrapper';

import Container from './styles';

function Header() {
  return (
    <Container>
      <Wrapper />
      <IntroductionText />
    </Container>
  );
}

export default Header;
