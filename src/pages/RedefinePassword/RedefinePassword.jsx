import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { TailSpin } from 'react-loader-spinner';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import IZTLogo from '../../assets/IZTLogo.svg';
import { DataInput } from '../../components/common';
import { useRedefinePassword } from '../../hooks/query/users';

import { TranslateText } from './translations';
import { useGlobalLanguage } from '../../stores/globalLanguage';

import {
  Page,
  Container,
  Logo,
  Title,
  Form,
  SubmitButton,
  DataEntry,
} from './Styles';
import {
  redifinePasswordValidationSchema,
  buildRedefinePasswordErrorMessage,
} from './utils';

export default function RedefinePassword() {
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateText({ globalLanguage });

  const { token } = useParams();
  const navigate = useNavigate();

  const { mutate: redefinePassword, isLoading } = useRedefinePassword({
    onSuccess: () => {
      toast.success(translations.toast);
      navigate('/login');
    },
    onError: (err) => {
      const errorMessage = buildRedefinePasswordErrorMessage(err);

      toast.error(errorMessage);
    },
  });

  const onSubmit = async ({ password }) => {
    redefinePassword({ token, password });
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(redifinePasswordValidationSchema),
  });

  return (
    <Page>
      <Container>
        <Logo
          src={IZTLogo}
          alt="Logo da IZT: Um I atravessando um Z dentro de um circulo"
        />
        <DataEntry>
          <Title>{translations.title}</Title>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <DataInput
              label={translations.newPassword}
              name="password"
              placeholder="********"
              register={register}
              errors={errors}
              type="password"
            />
            <DataInput
              label={translations.confirmNewPassword}
              name="confirmPassword"
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
                translations.save
              )}
            </SubmitButton>
          </Form>
        </DataEntry>
      </Container>
    </Page>
  );
}
