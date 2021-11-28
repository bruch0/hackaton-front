import React from 'react';
import Container from './styles';

function DashboardLawyer() {
  return (
    <Container>
      <section className="Lawyer">
        <img
          alt="Advogado Foto"
          src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-cartoon-business-male-lawyer-element-lawyerdesklawyerbusinessdesign-element-png-image_4074667.jpg"
        />
        <h2>Daniel Moreira Ferreira</h2>
      </section>
      <h2>Nome cliente e empresa</h2>
      <p>Valores</p>
      <section className="Calls">
        <div className="Head">
          <h3>Horário</h3>
          <h3>Link da Chamada</h3>
          <h3>Valor</h3>
          <h3>Empresa</h3>
        </div>
        <div className="Names">
          <h2>Daniela</h2>
          <h2>Gabriel</h2>
          <h2>Julia</h2>
          <h2>Renan</h2>
        </div>
      </section>
      <section>Ranking</section>
    </Container>
  );
}

export default DashboardLawyer;
