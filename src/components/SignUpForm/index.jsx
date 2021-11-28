import React from 'react';
import NavbarWrapper from '../Wrapper';
import { SignUpContainer, Title, Form, Input, Submit } from './styles';

function SignUpForm(type) {
  return (
    <>
      <NavbarWrapper isNotHome={1} />
      <SignUpContainer>
        <Title>
          {type === 'company' ? 'Cadastro de empresa' : 'Cadastre-se'}
        </Title>
        <Form>
          <div>Nome</div>
          <Input id="name" placeholder="Escreva aqui" />
          <div>E-mail</div>
          <Input placeholder="Escreva aqui" />
          <div>Senha</div>
          <Input placeholder="Escreva aqui" />
          <div className="document">
            <div>
              {type === 'company' ? 'CNPJ' : 'CPF'}
              <Input
                placeholder={
                  type === 'company' ? 'XX.XXX.XXX/XXXX-XX' : 'XXX.XXX.XXX-XX'
                }
              />
            </div>
            <div>
              {type === 'company' ? '' : 'Data de Nascimento'}
              <Input placeholder="DD/MM/AAAA" />
            </div>
          </div>

          <div>CEP</div>

          <Input placeholder="XXXXX-XXX" />

          <div>Endereço</div>
          <Input placeholder="Escreva aqui" />

          <Submit type="submit">Enviar</Submit>
        </Form>
      </SignUpContainer>
    </>
  );
}

export default SignUpForm;
