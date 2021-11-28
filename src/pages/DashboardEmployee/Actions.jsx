import React from 'react';
import { Link } from 'react-router-dom';
import { Actions } from './styles';

function UserActions() {
  return (
    <Actions>
      <Link to="/search">Novo Atendimento</Link>
      <Link to="/search">Procurar Advogados Disponíveis Agora</Link>
    </Actions>
  );
}

export default UserActions;
