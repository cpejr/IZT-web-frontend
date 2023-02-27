import React from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Page,
  Container,
  Logo,
  Title,
  Form,
  DataEntry,
  SubmitSpace,
  Button,
  RemeberMe,
  SignUpLink,
  Links,
  ErrorMessage,
} from './Styles';
import { DataInput } from '../../components/common';

const validationSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Favor digitar o email' })
    .email({
      message: 'Insira um email válido',
    })
    .trim(),
  password: z.string(),
});

function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validationSchema),
  });
  const onSubmit = (data) => console.log(data);
  const invalid = true;
  return (
    <Page>
      <Container>
        <Logo
          src="/public/IZT.svg"
          alt="Logo da IZT: Um I atravessando um Z dentro de um circulo"
        />
        <DataEntry>
          <Title>Entre na sua conta</Title>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <DataInput
              label="Digite seu E-mail: "
              name="email"
              placeholder="Email"
              register={register}
              errors={errors}
              type="text"
            />
            <DataInput
              label="Digite sua senha: "
              name="password"
              placeholder="Senha"
              register={register}
              errors={errors}
              type="password"
            />
            <SubmitSpace>
              <ErrorMessage failedToLog={invalid}>
                Email e/ou senha inválidos
              </ErrorMessage>
              <Button type="submit">Entrar</Button>
            </SubmitSpace>
          </Form>
        </DataEntry>
        <Links>
          <RemeberMe>Esqueceu a sua senha? Clique aqui!</RemeberMe>
          <SignUpLink>
            Ainda não tem uma conta? <a href="#SignUp">Cadastre-se aqui!</a>
          </SignUpLink>
        </Links>
      </Container>
    </Page>
  );
}

export default Login;
