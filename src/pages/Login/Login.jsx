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
import useAuthStore from '../../stores/auth';
import { useGlobalLanguage } from '../../stores/globalLanguage';
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
import { buildLoginErrorMessageDE, loginValidationSchemaDE } from './utilsDE';
import { buildLoginErrorMessageEN, loginValidationSchemaEN } from './utilsEN';

export default function Login() {
  // Translation
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateText({ globalLanguage });

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
      if (globalLanguage === 'DE') {
        const errorMessageDE = buildLoginErrorMessageDE(err);

        toast.error(errorMessageDE);
      } else if (globalLanguage === 'EN') {
        const errorMessageEN = buildLoginErrorMessageEN(err);

        toast.error(errorMessageEN);
      } else {
        const errorMessage = buildLoginErrorMessage(err);

        toast.error(errorMessage);
      }
    },
  });

  // Forms Handlers

  let resolver;
  if (globalLanguage === 'DE') {
    resolver = zodResolver(loginValidationSchemaDE);
  } else if (globalLanguage === 'EN') {
    resolver = zodResolver(loginValidationSchemaEN);
  } else {
    resolver = zodResolver(loginValidationSchema);
  }
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver });

  const onSubmit = (data) => login(data);

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
              language={globalLanguage}
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
  );
}
