import { useState } from 'react';

import { CloseOutlined } from '@ant-design/icons';
import { zodResolver } from '@hookform/resolvers/zod';
import { Modal } from 'antd';
import { useForm } from 'react-hook-form';
import { TailSpin } from 'react-loader-spinner';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import IZTLogo from '../../assets/IZTLogo.svg';
import { DataInput } from '../../components/common';
import { ModalForgotPassword } from '../../components/features';
import { useLogin } from '../../hooks/query/sessions';
import {
  Page,
  Container,
  Logo,
  Title,
  Form,
  SubmitButton,
  DataEntry,
  ForgotPassword,
  SignUpLink,
  Links,
} from './Styles';
import { buildLoginErrorMessage, loginValidationSchema } from './utils';

export default function Login() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const redirectTo = state?.from || '/perfil';

  const { mutate: login, isLoading } = useLogin({
    onSuccess: () => {
      toast.success('Usuário logado com sucesso!');
      navigate(redirectTo);
    },
    onError: (err) => {
      const errorMessage = buildLoginErrorMessage(err);

      toast.error(errorMessage);
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

  const [showModal, setShowModal] = useState(false);

  const openModalForgotPassword = () => setShowModal(true);
  const closeModalForgotPassword = () => setShowModal(false);

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
            <SubmitButton disabled={isLoading} type="submit">
              {isLoading ? (
                <>
                  <TailSpin
                    height="15"
                    width="15"
                    color="white"
                    ariaLabel="tail-spin-loading"
                    radius="5"
                  />
                  Carregando
                </>
              ) : (
                'Entrar'
              )}
            </SubmitButton>
          </Form>
        </DataEntry>
        <Links>
          <ForgotPassword onClick={openModalForgotPassword}>
            Esqueceu a sua senha? Clique aqui!
          </ForgotPassword>
          <Modal
            open={showModal}
            onCancel={closeModalForgotPassword}
            footer={null}
            width={700}
            closeIcon={<CloseOutlined />}
            destroyOnClose
            centered
          >
            <ModalForgotPassword close={closeModalForgotPassword} />
          </Modal>

          <SignUpLink>
            Ainda não tem uma conta?{' '}
            <Link to="/cadastro">Cadastre-se aqui!</Link>
          </SignUpLink>
        </Links>
      </Container>
    </Page>
  );
}
