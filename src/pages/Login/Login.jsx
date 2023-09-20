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
import { Header, ModalForgotPassword } from '../../components/features';
import { useLogin } from '../../hooks/query/sessions';
import useAuthStore from '../../stores/auth';
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
import { TranslateText } from './translations';
import { buildLoginErrorMessage, loginValidationSchema } from './utils';

export default function Login() {
  const [currentLanguage, setCurrentLanguage] = useState('PT');
  const translations = TranslateText({ currentLanguage });
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();

  const { mutate: login, isLoading } = useLogin({
    onSuccess: () => {
      toast.success('Usuário logado com sucesso!');

      const { auth } = useAuthStore.getState();
      const isAdminPath = auth?.user?.isAdmin ? '/administrador' : '/perfil';

      const redirectTo = state?.from || isAdminPath;
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

  const openModalForgotPassword = () => setShowModal(true);
  const closeModalForgotPassword = () => setShowModal(false);

  return (
    <>
      <Header setCurrentLanguage={setCurrentLanguage} />
      <Page>
        <Container>
          <Logo
            src={IZTLogo}
            alt="Logo da IZT: Um I atravessando um Z dentro de um circulo"
          />
          <DataEntry>
            <Title>{translations.loginJoin}</Title>
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
                label={translations.loginPassword}
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
                    {translations.loading}
                  </>
                ) : (
                  translations.loginLog
                )}
              </SubmitButton>
            </Form>
          </DataEntry>
          <Links>
            <ForgotPassword onClick={openModalForgotPassword}>
              {translations.loginForgotPassword}
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
              <ModalForgotPassword
                language={currentLanguage}
                close={closeModalForgotPassword}
              />
            </Modal>

            <SignUpLink>
              {translations.loginNotAccount}
              <Link to="/cadastro">{translations.loginHere}</Link>
            </SignUpLink>
          </Links>
        </Container>
      </Page>
    </>
  );
}
