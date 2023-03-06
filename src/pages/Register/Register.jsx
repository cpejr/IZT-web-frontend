import { React, useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Page, Container, Logo, Title, Form, DataEntry } from './Styles';
import IZTLogo from '../../assets/IZTLogo.svg';
import { DataInput, SubmitButton } from '../../components/common';

const validationSchema = z.object({
  company: z.string().min(1, 'Favor digitar o nome da empresa'),

  name: z
    .string()
    .min(1, 'Informe um nome')
    .min(3, 'O nome não pode ter menos de 3 caracteres')
    .max(40, 'O nome não pode ter mais de 40 caracteres'),

  surname: z
    .string()
    .min(1, 'Informe um sobrenome')
    .min(2, 'O sobrenome não pode ter menos de 2 caracteres')
    .max(40, 'O sobrenome não pode ter mais de 40 caracteres'),

  country: z
    .string()
    .min(1, 'Informe um telefone')
    .min(3, 'User country must be atleast 3 characters')
    .max(30, 'User country must be a maximum of 30 characters'),

  state: z
    .string()
    .min(1, 'Informe um estado')
    .min(3, 'User state must be atleast 3 characters')
    .max(30, 'User state must be a maximum of 30 characters'),

  city: z
    .string()
    .min(1, 'Informe uma cidade')
    .min(3, 'User city must be atleast 3 characters')
    .max(30, 'User city must be a maximum of 30 characters'),

  address: z
    .string()
    .min(1, 'Informe um endereço')
    .min(3, 'User address must be atleast 3 characters')
    .max(50, 'User address must be a maximum of 50 characters'),

  email: z
    .string()
    .min(1, { message: 'Favor digitar o email' })
    .email({
      message: 'Insira um email no formato email@email.com',
    })
    .trim(),

  password: z
    .string()
    .min(1, { message: 'Favor digitar uma senha' })
    .min(6, 'A senha não pode ter menos de 6 caracteres')
    .max(16, 'A senha não pode ter mais de 16 caracteres'),
});

function SignUp() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validationSchema),
  });
  const [submitErrorMessage, setSubmitErrorMessage] = useState('');

  const onSubmit = (data) => {
    console.log(data);
    setTimeout(() => {
      setSubmitErrorMessage('Email e/ou senha incorretos');
    }, 3000);
  };

  return (
    <Page>
      <Container>
        <Logo
          src={IZTLogo}
          alt="Logo da IZT: Um I atravessando um Z dentro de um circulo"
        />
        <Title>Crie sua conta</Title>
        <DataEntry>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <DataInput
              label="Empresa: "
              name="company"
              placeholder="Nome da empresa"
              register={register}
              errors={errors}
              type="text"
            />
            <DataInput
              label="Nome: "
              name="name"
              placeholder="Nome"
              register={register}
              errors={errors}
              type="password"
            />
            <DataInput
              label="Sobrenome: "
              name="surname"
              placeholder="Sobrenome"
              register={register}
              errors={errors}
              type="text"
            />
            <DataInput
              label="Cargo: "
              name="role"
              placeholder="Nome do cargo"
              register={register}
              errors={errors}
              type="select"
            />
          </Form>
          <Form>
            <DataInput
              label="País: "
              name="country"
              placeholder="Nome do país"
              register={register}
              errors={errors}
              type="text"
            />
            <DataInput
              label="Estado: "
              name="state"
              placeholder="Nome do estado"
              register={register}
              errors={errors}
              type="password"
            />
            <DataInput
              label="Cidade: "
              name="city"
              placeholder="Nome da cidade"
              register={register}
              errors={errors}
              type="text"
            />
            <DataInput
              label="Endereço: "
              name="address"
              placeholder="Endereço"
              register={register}
              errors={errors}
              type="text"
            />
          </Form>
          <Form>
            <DataInput
              label="E-mail: "
              name="email"
              placeholder="email@email.com"
              register={register}
              errors={errors}
              type="text"
            />
            <DataInput
              label="Senha: "
              name="password"
              placeholder="********"
              register={register}
              errors={errors}
              type="password"
            />
            <DataInput
              label="Confirme sua senha: "
              name="confirmPassword"
              placeholder="********"
              register={register}
              errors={errors}
              type="password"
            />
          </Form>
        </DataEntry>
        <SubmitButton
          name="Criar conta"
          submitErrorMessage={submitErrorMessage}
          relativeWidth="70%"
        />
      </Container>
    </Page>
  );
}

export default SignUp;
