import React from 'react';
import { FaUserFriends } from 'react-icons/fa';
import Container from './styles';

import Specialist from '../../assets/images/specialist.svg';

import img01 from '../../assets/images/01_img.svg';
import img02 from '../../assets/images/02_img.png';
import img03 from '../../assets/images/03_img.png';
import img04 from '../../assets/images/04_img.png';

function LookForSpecialist() {
  return (
    <Container>
      <section className="SearchContainer">
        <img src={Specialist} alt="Pesquisar advogado" />
        <div>
          <h1>Encontre o especialista jurídico ideal para o seu caso</h1>
          <p>
            Nossos profissionais jurídicos estão prontos para atendê-lo! Você
            pode buscar por nome, região ou especialidade.
          </p>
          <form>
            <input type="text" placeholder="Pequise aqui" />
            <button type="button">Enviar</button>
          </form>
        </div>
      </section>

      <section className="Filter">
        <select
          name="Tipo de Especialista"
          id="type-specialist"
          placeholder="Tipo de especialist"
        >
          <option value="" disabled selected>
            Tipo de Especialista
          </option>
          <option value="penal">Advogado penal</option>
          <option value="civil">Advogado Civil</option>
          <option value="familia">Advogdo de Família</option>
        </select>

        <select name="Motivo" id="motivo" placeholder="Tipo de especialist">
          <option value="" disabled selected>
            Motivo
          </option>
          <option value="violência">Violência</option>
          <option value="difamação">Difamação</option>
        </select>

        <select
          name="Gênero do especialista"
          id="Gênero do especialista"
          placeholder="Gênero do especialista"
        >
          <option value="" disabled selected>
            Gênero do especialista
          </option>
          <option value="penal">Homossexual</option>
          <option value="civil">Heterossexual</option>
          <option value="familia">Bissexual</option>
          <option value=" Adoção por casais homossexuais">Assexual</option>
          <option value=" Adoção por casais homossexuais">Pansexual</option>
        </select>

        <select
          name="Tipo de Especialista"
          id="type-specialist"
          placeholder="Tipo de especialist"
        >
          <option value="" disabled selected>
            Etnia do Especialista
          </option>
          <option value="penal">Preto</option>
          <option value="civil">Branco</option>
          <option value="familia">Pardo</option>
          <option value="familia">Amarelo</option>
        </select>
      </section>

      <section className="ResultsStatus">
        <div>
          <FaUserFriends />
          <p>803 especialistas</p>
        </div>

        <div>
          <span className="circle">.</span>
          <p>Online agora</p>
        </div>
      </section>

      <section className="LawyerSection">
        <div className="AreaLawyer">
          <img src={img01} alt="Foto exemplo" />
          <div className="infos">
            <h1>Mariele Oliveira</h1>
            <p>Advogada Penal | Bahia</p>
            <p>
              Especializada em direito penal, crimes em geral, inquérito e
              defesa processual. 15 anos de experiência, sou LGBTQIA+. Estou
              sempre disponível para conversar!
            </p>
          </div>
        </div>

        <div className="AreaLawyer">
          <img src={img02} alt="Foto exemplo" />
          <div className="infos">
            <h1>Bruno Alves</h1>
            <p>Advogado Cível | Paraná</p>
            <p>
              Forneço assistência jurídica e contenciosa em diversas áreas do
              Direito, como: Família e Sucessões, Civil e Trabalhista, atendendo
              pessoas que estejam ou não em situação de violência.
            </p>
          </div>
        </div>

        <div className="AreaLawyer">
          <img src={img03} alt="Foto exemplo" />
          <div className="infos">
            <h1>Vinicius Amorim</h1>
            <p>Advogado Cível | São Paulo</p>
            <p>
              DIREITOS CIVIS - Direitos LGBT+ como identidade de gênero,
              retificação de nome social e registro civil Ação de Indenização
              por danos morais e materiais.
            </p>
          </div>
        </div>

        <div className="AreaLawyer">
          <img src={img04} alt="Foto exemplo" />
          <div className="infos">
            <h1>Andreia Barros</h1>
            <p>Advogade de Família | Rio de Janeiro</p>
            <p>
              Olá! Sou Advogade Cível especialista em Direito da Família. Atuo
              com reconhecimento e dissolução de união estável, divórcio,
              regulamentação de guarda e regime de visitas, alienação parental e
              pensão alimentícia.
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default LookForSpecialist;
