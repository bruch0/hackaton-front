import React from 'react';

import { Container, PlanCards, Card } from './styles';

function PlansSection() {
  return (
    <Container>
      <h1>Planos Empresariais</h1>
      <p>Pacote com pagamentos mensais que não pesam no orçamento</p>
      <PlanCards>
        <Card className="plan basic">
          <span>
            Pacote de Serviços <br /> Jurídicos
          </span>
          <span>Básico</span>
          <div>
            <span>Pequenas empresas</span>
            <span>2 - 25 funcionários</span>
          </div>
        </Card>
        <Card className="plan intermediary">
          <span>
            Pacote de <br /> Serviços Jurídicos
          </span>
          <span>Intermediário</span>
          <div>
            <span>Pequenas empresas</span>
            <span>26 - 50 funcionários</span>
          </div>
        </Card>
        <Card className="plan premium">
          <span>
            Pacote de Serviços <br /> Jurídicos
          </span>
          <span>Premium</span>
          <div>
            <span>Grandes empresas</span>
            <span>26 - 50 funcionários</span>
          </div>
        </Card>
      </PlanCards>
    </Container>
  );
}

export default PlansSection;
