/* eslint-disable import/extensions */
import { React } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Page,
  Container,
  Logo,
  Title,
  FormColumn,
  DataEntry,
  Form,
  Subtitle,
} from './Styles';
import IZTLogo from '../../assets/IZTLogo.svg';
import { RegisterInput, SubmitButton } from '../../components/common';
import { useCreateUser } from '../../hooks/query/users.js';

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

  role: z.string().min(1, 'Informe um cargo'),

  country: z
    .string()
    .min(1, 'Informe um país')
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

  confirmPassword: z.string().min(1, { message: 'Confirme sua senha' }),
}); // all inputs validation schema

function SignUp() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validationSchema),
  });

  const { mutateAsync: createUser, isLoading } = useCreateUser({
    onSucess: () => navigate('/login', { replace: true }),
  });

  const onSubmit = async (data) => {
    try {
      await createUser(data);
    } catch (error) {
      let errorMessage;
      console.log(error.response.status);
      switch (error.response.status) {
        case 400:
          errorMessage = 'Dados Inválidos.';
          break;
        case 409:
          errorMessage = 'O email já está sendo utilizado.';
          break;
        case 500:
          errorMessage =
            'Erro ao realizar o cadastro. Tente novamente mais tarde.';
          break;
        default:
          break;
      }
      alert(errorMessage);
    }
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <Page>
      <Container>
        <Logo
          src={IZTLogo}
          alt="Logo da IZT: Um I atravessando um Z dentro de um circulo"
        />
        <Title>Crie sua conta</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <DataEntry>
            <FormColumn>
              <Subtitle>Informações pessoais</Subtitle>
              <RegisterInput
                label="Empresa: "
                name="company"
                placeholder="Nome da empresa"
                register={register}
                errors={errors}
                type="text"
              />
              <RegisterInput
                label="Nome: "
                name="name"
                placeholder="Nome"
                register={register}
                errors={errors}
                type="text"
              />
              <RegisterInput
                label="Sobrenome: "
                name="surname"
                placeholder="Sobrenome"
                register={register}
                errors={errors}
                type="text"
              />
              <RegisterInput
                label="Cargo: "
                name="role"
                placeholder="Nome do cargo"
                register={register}
                errors={errors}
                type="text"
              />
            </FormColumn>
            <FormColumn>
              <Subtitle>Endereço</Subtitle>
              <RegisterInput
                label="País: "
                name="country"
                placeholder="Nome do país"
                register={register}
                errors={errors}
                type="text"
              />
              <RegisterInput
                label="Estado: "
                name="state"
                placeholder="Nome do estado"
                register={register}
                errors={errors}
                type="text"
              />
              <RegisterInput
                label="Cidade: "
                name="city"
                placeholder="Nome da cidade"
                register={register}
                errors={errors}
                type="text"
              />
              <RegisterInput
                label="Endereço: "
                name="address"
                placeholder="Endereço"
                register={register}
                errors={errors}
                type="text"
              />
            </FormColumn>
            <FormColumn>
              <Subtitle>Credenciais</Subtitle>
              <RegisterInput
                label="E-mail: "
                name="email"
                placeholder="email@email.com"
                register={register}
                errors={errors}
                type="text"
              />
              <RegisterInput
                label="Senha: "
                name="password"
                placeholder="********"
                register={register}
                errors={errors}
                type="password"
              />
              <RegisterInput
                label="Confirme sua senha: "
                name="confirmPassword"
                placeholder="********"
                register={register}
                errors={errors}
                type="password"
              />
            </FormColumn>
          </DataEntry>
          <SubmitButton type="submit" name="Criar conta" relativeWidth="70%" />
        </Form>
      </Container>
    </Page>
  );
}

export default SignUp; // user registration function
