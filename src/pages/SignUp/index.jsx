import React from 'react';
import { Link } from 'react-router-dom';
import NavbarWrapper from '../../components/Wrapper';
import { SignUpPage, Title, Disclaimer } from './styles';

function SignUp() {
  return (
    <>
      <NavbarWrapper isNotHome={1} />
      <SignUpPage>
        <Title>Cadastro</Title>
        <Disclaimer>
          Seja bem vinde! <br />
          Por favor, selecione uma opção abaixo
        </Disclaimer>
        <Link to="/sign-up-lawyer">ADVOGADE</Link>
        <Link to="/sign-up-company">EMPRESA</Link>
      </SignUpPage>
    </>
  );
}

export default SignUp;
