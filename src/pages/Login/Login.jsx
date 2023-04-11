import { TailSpin } from 'react-loader-spinner';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import IZTLogo from '../../assets/IZTLogo.svg';
import { DataInput, SubmitButton } from '../../components/common';
import { useLogin } from '../../hooks/query/sessions';
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
  LoadingButton,
} from './Styles';
import { buildLoginErrorMessage, loginValidationSchema } from './utils';

export default function Login() {
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useLogin({
    onSuccess: () => navigate('/'),
    onError: (err) => {
      const errorMessage = buildLoginErrorMessage(err);

      // Do something to the errorMessage
      alert(errorMessage);
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginValidationSchema),
  });
  const onSubmit = (data) => login(data);

  // if (isLoading) return <p style={{ height: '100vh' }}>Loading...</p>;
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

            {isLoading ? (
              <LoadingButton>
                <TailSpin
                  height="15"
                  width="15"
                  color="white"
                  ariaLabel="tail-spin-loading"
                  radius="5"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
                Carregando
              </LoadingButton>
            ) : (
              <SubmitButton
                isLoading={isLoading}
                disabled={isLoading}
                type="submit"
                name="Entrar"
                relativeWidth="100%"
              />
            )}
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
