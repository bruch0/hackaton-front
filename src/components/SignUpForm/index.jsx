import React from 'react';
import { useHistory } from 'react-router-dom';
import NavbarWrapper from '../Wrapper';
import { SignUpContainer, Title, Form, Input, Submit } from './styles';

// eslint-disable-next-line react/prop-types
function SignUpForm({ category }) {
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    history.push('/login');
  };

  return (
    <>
      <NavbarWrapper isNotHome={1} />
      <SignUpContainer>
        <Title>
          {category === 'company' ? 'Cadastros de empresa' : 'Cadastre-se'}
        </Title>
        <Form onSubmit={(e) => onSubmit(e)}>
          <div>Nome</div>
          <Input id="name" placeholder="Escreva aqui" />
          <div>E-mail</div>
          <Input placeholder="Escreva aqui" />
          <div>Senha</div>
          <Input placeholder="Escreva aqui" type="password" />
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
