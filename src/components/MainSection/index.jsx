import React from 'react';
import OurWorkSection from '../OurWorkSection';
import PartnersSection from '../PartnersSection';
import PlansSection from '../PlansSection';

import Container from './styles';

function MainSection() {
  return (
    <Container>
      <OurWorkSection />
      <PartnersSection />
      <PlansSection />
    </Container>
  );
}

export default MainSection;
