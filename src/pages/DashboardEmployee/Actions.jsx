import React from 'react';
import { useHistory } from 'react-router-dom';
import { Actions } from './styles';

function UserActions() {
  const history = useHistory();

  const handleClick = () => {
    history.push('/search');
  };

  return (
    <Actions>
      <button type="button">Novo Atendimento</button>
      <button onClick={handleClick} type="button">
        Procurar Advogados Disponíveis Agora
      </button>
    </Actions>
  );
}

export default UserActions;
