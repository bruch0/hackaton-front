import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { AiFillApple, AiOutlineGoogle } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import NavbarWrapper from '../../components/Wrapper';
import Container from './styles';

function LawyersRegistry() {
  const schema = yup.object().shape({
    name: yup.string().required(' *Campo obrigatório'),
    email: yup
      .string()
      .email(' Email inválido!')
      .required(' *Campo obrigatório'),
    password: yup.string().required(' *Campo obrigatório').min(8),
    cnpj: yup.string().required(' *Campo obrigatório'),
    cpf: yup.string().required(' *Campo obrigatório'),
    adress: yup.string().required(' *Campo obrigatório'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    data.preventDefault();
  };

  return (
    <>
      <NavbarWrapper isNotHome={1} />
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">
            Nome: <span>{errors.name?.message}</span>
          </label>
          <input
            id="name"
            placeholder="Digite seu nome"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register('name')}
          />
          <label htmlFor="email">
            Email: <span>{errors.email?.message}</span>
          </label>
          <input
            id="email"
            placeholder="Digite seu email"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register('email')}
          />
          <label htmlFor="senha">
            Senha: <span>{errors.password?.message}</span>
          </label>
          <input
            placeholder="Digite sua senha"
            type="password"
            id="senha"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register('password')}
          />

          <label htmlFor="cnpj">
            Cnpj: <span>{errors.cnpj?.message}</span>
          </label>
          <input
            placeholder="xx.xxx.xxx/xxxx-xx"
            type="text"
            id="cnpj"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register('cnpj')}
          />

          <label htmlFor="cep">
            Cep: <span>{errors.cep?.message}</span>
          </label>
          <input
            placeholder="xxxxx-xxx"
            type="text"
            id="cep"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register('cep')}
          />

          <label htmlFor="adress">
            Endereco: <span>{errors.adress?.message}</span>
          </label>
          <input
            placeholder="Informe seu endereço"
            type="text"
            id="adress"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register('adress')}
          />

          <button type="submit">Entrar</button>
          <a href="/#">Esqueceu sua senha?</a>
        </form>
        <div>Ou</div>
        <div>
          <FaFacebookF />
          Entrar com Facebook
        </div>
        <div>
          <AiOutlineGoogle />
          Entrar com Google
        </div>
        <div>
          <AiFillApple />
          Entrar com Apple
        </div>
      </Container>
    </>
  );
}

export default LawyersRegistry;
