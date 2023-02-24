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
  Button,
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
  password: z
    .string()
    .min(8, { message: 'A senha deve ter no mínimo 8 caracteres' }),
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
            <Button type="submit">Entrar</Button>
          </Form>
        </DataEntry>
      </Container>
    </Page>
  );
}

export default Login;
