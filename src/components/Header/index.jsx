import React from 'react';
import Wrapper from '../Wrapper';
import IntroductionText from '../IntroductionText';

import { Container, Gradient, Content } from './styles';

function Header() {
  return (
    <Container>
      <Gradient>
        <Content>
          <Wrapper />
          <IntroductionText />
        </Content>
      </Gradient>
    </Container>
  );
}

export default Header;
