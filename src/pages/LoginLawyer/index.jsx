import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Container from './styles';

function LoginLawyer() {
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
    console.log(data);
  };

  return (
    <Container>
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
          type="passowrd"
          id="senha"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('password')}
        />
        <button type="submit">Enviar</button>
        <p>
          Não possui uma conta? <span>Cadastre-se</span>
        </p>
        <a href="/#">Esqueceu sua senha?</a>
      </form>
    </Container>
  );
}

export default LoginLawyer;
