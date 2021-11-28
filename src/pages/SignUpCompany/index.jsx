import React from 'react';
import NavbarWrapper from '../../components/Wrapper';
import { SignCompany, Title, Form, Input, Submit } from './styles';

function SignUpCompany() {
  return (
    <>
      <NavbarWrapper isNotHome={1} />
      <SignCompany>
        <Title>Cadastro de empresas</Title>
        <Form>
          <div>Nome</div>
          <Input id="name" placeholder="Escreva aqui" />
          <div>E-mail</div>
          <Input placeholder="Escreva aqui" />
          <div>Senha</div>
          <Input placeholder="Escreva aqui" />
          <div>CNPJ</div>
          <Input placeholder="XX.XXX.XXX/XXXX-XX" />
          <div>CEP</div>
          <Input placeholder="XXXXX-XXX" />
          <div>Endereço</div>
          <Input placeholder="Escreva aqui" />

          <Submit type="submit">Enviar</Submit>
        </Form>
      </SignCompany>
    </>
  );
}

export default SignUpCompany;
