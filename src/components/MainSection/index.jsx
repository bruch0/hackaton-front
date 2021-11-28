import React from 'react';
import OurWorkSection from '../OurWorkSection';
import PartnersSection from '../PartnersSection';

import Container from './styles';

function MainSection() {
  return (
    <Container>
      <OurWorkSection />
      <PartnersSection />
    </Container>
  );
}

export default MainSection;
