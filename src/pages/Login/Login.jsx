import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
  RemeberMe,
  SignUpLink,
  Links,
} from './Styles';
import IZTLogo from '../../assets/IZTLogo.svg';
import { DataInput, SubmitButton } from '../../components/common';
import { useLogin } from '../../hooks/query/sessions';
import { ERROR_CODES } from '../../utils/constants';

const validationSchema = z.object({
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

export default function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validationSchema),
  });
  const [submitErrorMessage, setSubmitErrorMessage] = useState('');
  const navigate = useNavigate();
  const onSuccess = () => navigate('/');
  const onError = (error) => {
    switch (error.response.status) {
      case ERROR_CODES.BAD_REQUEST:
        setSubmitErrorMessage('Dados inválidos');
        break;
      case ERROR_CODES.UNAUTHORIZED:
        setSubmitErrorMessage('E-mail ou senha incorretos');
        break;
      case ERROR_CODES.FORBIDDEN:
        setSubmitErrorMessage(
          'A sua conta ainda não foi ativada. Por favor verifique o e-mail'
        );
        break;
      case ERROR_CODES.INTERNAL_SERVER:
        setSubmitErrorMessage(
          'Erro ao realizar o login. Tente novamente mais tarde'
        );
        break;
      default:
        break;
    }
  };
  const { mutate: login } = useLogin({ onSuccess, onError });

  const onSubmit = (data) => login(data);
  return (
    <Page>
      <Container>
        <Logo
          src={IZTLogo}
          alt="Logo da IZT: Um I atravessando um Z dentro de um circulo"
        />
        <DataEntry>
          <Title>Entre na sua conta</Title>
          <Form onSubmit={handleSubmit(onSubmit)}>
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
            <SubmitButton
              name="Entrar"
              submitErrorMessage={submitErrorMessage}
              relativeWidth="70%"
            />
          </Form>
        </DataEntry>
        <Links>
          <RemeberMe to="/">Esqueceu a sua senha? Clique aqui!</RemeberMe>
          <SignUpLink>
            Ainda não tem uma conta? <Link to="/">Cadastre-se aqui!</Link>
          </SignUpLink>
        </Links>
      </Container>
    </Page>
  );
}
