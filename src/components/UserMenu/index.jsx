import React from 'react';
import Container from './styles';

import logotipo from '../../assets/images/logotipo.png';

function UserMenu() {
  return (
    <Container>
      <img src={logotipo} alt="Logotipo" />
      <ul>
        <li>
          <a href="/">Editar Perfil</a>
        </li>
        <li>
          <a href="/">Configurações</a>
        </li>
        <li>
          <a href="/">Sair</a>
        </li>
      </ul>
    </Container>
  );
}

export default UserMenu;
