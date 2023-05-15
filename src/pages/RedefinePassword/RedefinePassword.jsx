import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { TailSpin } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';

import IZTLogo from '../../assets/IZTLogo.svg';
import { DataInput } from '../../components/common';
import { useRedefinePassword } from '../../hooks/query/users';
import {
  Page,
  Container,
  Logo,
  Title,
  Form,
  SubmitButton,
  DataEntry,
} from './Styles';
import { redifinePasswordValidationSchema } from './utils';

export default function RedefinePassword() {
  const { token } = useParams();
  const { data: redefinePassword, isLoading } = useRedefinePassword({
    token,
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
                'Salvar'
              )}
            </SubmitButton>
          </Form>
        </DataEntry>
      </Container>
    </Page>
  );
}
