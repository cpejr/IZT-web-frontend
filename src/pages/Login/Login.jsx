import React from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Page, Container, Logo, Title, Form, dataEntry } from './Styles';
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
  return (
    <Page>
      <Container>
        <Logo
          src="/public/IZT.svg"
          alt="Logo da IZT: Um I atravessando um Z dentro de um circulo"
        />
        <dataEntry>
          <Title>Entre na sua conta</Title>
          <Form>
            <DataInput
              label="Digite seu E-mail: "
              name="email"
              placeholder="email"
              register={register}
              errors={errors}
            />
          </Form>
        </dataEntry>
      </Container>
    </Page>
  );
}

export default Login;
