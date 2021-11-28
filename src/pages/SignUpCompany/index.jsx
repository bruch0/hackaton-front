import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import NavbarWrapper from '../../components/Wrapper';
import { SignCompany, Title, Form, Input, Submit } from './styles';

function SignUpCompany() {
  const history = useHistory();
  const [companyInfo, setCompanyInfo] = useState({
    name: '',
    email: '',
    password: '',
    cnpj: '',
    zipcode: '',
    adress: '',
  });

  const submitForm = (e) => {
    e.preventDefault();
    history.push('/login');
  };

  return (
    <>
      <NavbarWrapper isNotHome={1} />
      <SignCompany>
        <Title>Cadastro de empresas</Title>
        <Form onSubmit={submitForm}>
          <div>Nome</div>
          <Input
            value={companyInfo.name}
            onChange={(e) =>
              setCompanyInfo({ ...companyInfo, name: e.target.value })
            }
            placeholder="Escreva aqui"
          />
          <div>E-mail</div>
          <Input
            value={companyInfo.email}
            onChange={(e) =>
              setCompanyInfo({ ...companyInfo, email: e.target.value })
            }
            placeholder="Escreva aqui"
          />
          <div>Senha</div>
          <Input
            value={companyInfo.password}
            onChange={(e) =>
              setCompanyInfo({ ...companyInfo, password: e.target.value })
            }
            placeholder="Escreva aqui"
          />
          <div>CNPJ</div>
          <Input
            value={companyInfo.cnpj}
            onChange={(e) =>
              setCompanyInfo({ ...companyInfo, cnpj: e.target.value })
            }
            placeholder="XX.XXX.XXX/XXXX-XX"
          />
          <div>CEP</div>
          <Input
            value={companyInfo.zipcode}
            onChange={(e) =>
              setCompanyInfo({ ...companyInfo, zipcode: e.target.value })
            }
            placeholder="XXXXX-XXX"
          />
          <div>Endereço</div>
          <Input
            value={companyInfo.adress}
            onChange={(e) =>
              setCompanyInfo({ ...companyInfo, adress: e.target.value })
            }
            placeholder="Escreva aqui"
          />

          <Submit type="submit">Enviar</Submit>
        </Form>
      </SignCompany>
    </>
  );
}

export default SignUpCompany;
