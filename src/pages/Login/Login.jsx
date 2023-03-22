import { Link, useNavigate } from 'react-router-dom';
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
import { buildLoginErrorMessage, loginValidationSchema } from './utils';

export default function Login() {
  const navigate = useNavigate();
  const loginOnSuccess = () => navigate('/');
  const loginOnError = (err) => {
    const code = err?.response?.data?.httpCode;
    const errorMessage = buildLoginErrorMessage(code);

    // Do something to the errorMessage
    alert(errorMessage);
  };
  const { mutate: login, isLoading } = useLogin({
    onSuccess: loginOnSuccess,
    onError: loginOnError,
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginValidationSchema),
  });
  const onSubmit = (data) => login(data);

  if (isLoading) return <p style={{ height: '100vh' }}>Loading...</p>;
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
              // submitErrorMessage={submitErrorMessage}
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
