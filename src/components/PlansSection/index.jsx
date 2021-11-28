import React from 'react';

import { Container, PlanCards, Card } from './styles';

function PlansSection() {
  return (
    <Container>
      <h1>Planos Empresariais</h1>
      <PlanCards>
        <Card className="small-plan">
          <span className="plan-price">
            <span>R$</span> 99,90
            <span className="monthly-text">Mensais</span>
          </span>
          <span className="plan-description">
            We help the world’s leading organizations follow their shipping
          </span>
          <span className="description-company-size">
            <span>Pequenas empresas</span>
            2-25 funcionários{' '}
          </span>
        </Card>
        <Card className="medium-plan">
          <span className="plan-price">
            <span>R$</span> 150,00<span className="monthly-text">Mensais</span>
          </span>
          <span className="plan-description">
            We help the world’s leading organizations follow their shipping
          </span>
          <span className="description-company-size">
            <span>Pequenas empresas</span>
            26-50 funcionários{' '}
          </span>
        </Card>
        <Card className="large-plan">
          <span className="plan-price">
            <span>R$</span> 220,00<span className="monthly-text">Mensais</span>
          </span>
          <span className="plan-description">
            We help the world’s leading organizations follow their shipping
          </span>
          <span className="description-company-size">
            <span>Pequenas empresas</span>
            Acima de 51 funcionários{' '}
          </span>
        </Card>
      </PlanCards>
    </Container>
  );
}

export default PlansSection;
