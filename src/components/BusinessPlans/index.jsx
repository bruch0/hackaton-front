import React from 'react';
import Container from './styles';

function BusinessPlans() {
  return (
    <Container>
      <h1>Planos Empresariais</h1>
      <div className="Cards">
        <div className="Card">
          <h1>99,90</h1>
          <p>We help the world’s leading organizations follow their shipping</p>
          <p>Pequenas empresas</p>
          <p>2-25 funcionários</p>
        </div>

        <div className="Card">
          <h1>150,00</h1>
          <p>We help the world’s leading organizations follow their shipping</p>
          <p>Médias empresas</p>
          <p>26-50 funcionários</p>
        </div>
        <div className="Card">
          <h1>220,00</h1>
          <p>
            We help the world’s leadi ng organizations follow their shipping
          </p>
          <p>Grandes empresas</p>
          <p>Acima de 51 funcionários</p>
        </div>
      </div>
    </Container>
  );
}

export default BusinessPlans;
