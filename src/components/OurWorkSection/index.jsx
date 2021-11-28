import React from 'react';

import { Container, Stats } from './styles';

function OurWorkSection() {
  return (
    <Container id="our-work">
      <h1>Nosso Trabalho</h1>

      <Stats>
        <div>
          <p className="stats-sessions">
            + de 2.500 <span>atendimentos realizados</span>
          </p>
        </div>
        <div>
          <p className="stats-lawyers">
            800 profissionais <span> jurídicos cadastrados</span>
          </p>
        </div>
        <div>
          <p className="stats-companies">
            + de 200 <span>empresas parceiras</span>
          </p>
        </div>
      </Stats>
    </Container>
  );
}

export default OurWorkSection;
