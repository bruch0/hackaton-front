import React from 'react';
import { FaAngleDown } from 'react-icons/fa';
import Container from './styles';
import Stars from '../../assets/images/stars.svg';

function DashboardLawyer() {
  return (
    <Container>
      <section className="Lawyer">
        <img
          className="Profile"
          alt="Advogado Foto"
          src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-cartoon-business-male-lawyer-element-lawyerdesklawyerbusinessdesign-element-png-image_4074667.jpg"
        />
        <h2>Daniel Moreira Ferreira</h2>
        <h4>(Ele/dele) </h4>
        <img className="Stars" src={Stars} alt="Avaliação com estrelas" />
      </section>

      <section className="Mural">
        <h2>Meus atendimentos</h2>
        <h3>Hoje, 26 de novembro de 2021</h3>

        <section className="CardCalls">
          <div className="card">
            <p>
              Próximo: <span>Daniela dos Santos</span>
            </p>
            <p>
              Horário: <span>09:00</span>
            </p>
            <p>
              Status: <span>Aguardando</span>
            </p>
            <p>
              Link: <span>chamada.zoom/41h34gj34</span>
            </p>
          </div>

          <div className="card">
            <p>
              Próximo: <span>Daniela dos Santos</span>
            </p>
            <p>
              Horário: <span>09:00</span>
            </p>
            <p>
              Status: <span>Aguardando</span>
            </p>
            <p>
              Link: <span>chamada.zoom/41h34gj34</span>
            </p>
          </div>

          <div className="card">
            <p>
              Próximo: <span>Daniela dos Santos</span>
            </p>
            <p>
              Horário: <span>09:00</span>
            </p>
            <p>
              Status: <span>Aguardando</span>
            </p>
            <p>
              Link: <span>chamada.zoom/41h34gj34</span>
            </p>
          </div>
        </section>
        <h2>Minha agenda</h2>
        <div className="Expand">
          <p>Expandir</p>
          <FaAngleDown />
        </div>
      </section>

      <section className="Extract">
        <section>
          <h2>Extrato resumido: </h2>
          <p>R$12.000,00</p>
        </section>
        <div className="Expand">
          <p>Mais detalhes</p>
          <FaAngleDown />
        </div>
      </section>

      <section className="Evaluation Mural">
        <h2>
          Avaliação: 4,8 <span>de</span> 5
        </h2>
        <p>
          Parabéns! Atualmente você é a 12º colocada da nossa plataforma, com
          mais de 800 profissionais.
        </p>
      </section>
    </Container>
  );
}

export default DashboardLawyer;
