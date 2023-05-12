import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { TailSpin } from 'react-loader-spinner';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import IZTLogo from '../../assets/IZTLogo.svg';
import { DataInput } from '../../components/common';
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
  buildRedefinePasswordErrorMessage,
  redifinePasswordValidationSchema,
} from './utils';

export default function RedefinePassword() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const redirectTo = state?.from || '/login';

  const [isLoading, setLoading] = useState(false);

  const onSuccess = () => {
    // Handle success case here
    navigate(redirectTo);
  };

  const onError = (err) => {
    // Handle error case here
    const errorMessage = buildRedefinePasswordErrorMessage(err);
    toast.error(errorMessage);
  };

  const onSubmit = async (data) => {
    const { password, confirmPassword } = data;
    if (password === confirmPassword) {
      // Passwords match
      setLoading(true);
      try {
        toast.success('Senhas alteradas com sucesso');
        onSuccess();
      } catch (err) {
        toast.error('Ocorreu um erro ao processar a comparação de senhas.');
        onError(err);
      }
    } else {
      // Passwords do not match
      toast.error('As senhas não coincidem!');
      onError();
    }
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
          <Title>Redefinir Senha</Title>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <DataInput
              label="Insira a nova senha"
              name="password"
              placeholder="********"
              register={register}
              errors={errors}
              type="password"
            />
            <DataInput
              label="Confirme a nova senha"
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
                'Salvar nova senha'
              )}
            </SubmitButton>
          </Form>
        </DataEntry>
      </Container>
    </Page>
  );
}
