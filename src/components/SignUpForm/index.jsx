import React from 'react';
import NavbarWrapper from '../Wrapper';
import { SignUpContainer, Title, Form, Input, Submit } from './styles';

// eslint-disable-next-line react/prop-types
function SignUpForm({ category }) {
  return (
    <>
      <NavbarWrapper isNotHome={1} />
      <SignUpContainer>
        <Title>
          {category === 'company' ? 'Cadastros de empresa' : 'Cadastre-se'}
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
              <div>{category === 'company' ? 'CNPJ' : 'CPF'}</div>
              <Input
                placeholder={
                  category === 'company'
                    ? 'XX.XXX.XXX/XXXX-XX'
                    : 'XXX.XXX.XXX-XX'
                }
              />
            </div>
            <div>
              <div>{category === 'lawyer' ? 'Data de Nascimento' : ''}</div>
              {category === 'lawyer' && <Input placeholder="DD/MM/AAAA" />}
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
