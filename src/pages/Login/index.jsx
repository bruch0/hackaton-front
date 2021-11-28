import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { AiFillApple, AiOutlineGoogle } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import NavbarWrapper from '../../components/Wrapper';
import { Container, Title, Option, Log } from './styles';

function Login() {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email(' Email inválido!')
      .required(' *Campo obrigatório'),
    password: yup.string().required(' *Campo obrigatório'),
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
    console.log(data);
  };

  return (
    <>
      <NavbarWrapper isNotHome={1} />
      <Container>
        <Title>Login</Title>
        <form onSubmit={handleSubmit(onSubmit)}>
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
          <button type="submit">Entrar</button>
          <a href="/#">Esqueceu sua senha?</a>
        </form>
        <Option>Ou</Option>
        <Log>
          <FaFacebookF />
          Entrar com Facebook
        </Log>
        <Log>
          <AiOutlineGoogle />
          Entrar com Google
        </Log>
        <Log>
          <AiFillApple />
          Entrar com Apple
        </Log>
      </Container>
    </>
  );
}

export default Login;
