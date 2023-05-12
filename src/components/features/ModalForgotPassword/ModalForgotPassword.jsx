import { useState } from 'react';

import { SendOutlined } from '@ant-design/icons';
import { zodResolver } from '@hookform/resolvers/zod';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { TailSpin } from 'react-loader-spinner';
import { toast } from 'react-toastify';

import { getEmailUser } from '../../../services/api';
import useAuthStore from '../../../stores/auth';
import { RegisterInput } from '../../common';
import {
  Container,
  Form,
  DataEntry,
  FormColumn,
  SaveChanges,
  Subtitle,
  Subtitle2,
} from './Styles';
import { buildVerifyEmailErrorMessage, verifyEmailSchema } from './utils';

export default function ModalForgotPassword({ close }) {
  const [isPending, setIsPending] = useState(false);

  const { mutate: verifyEmail } = getEmailUser({
    onSuccess: () => {
      toast.success('Email enviado com sucesso');
      close();
    },
    onError: (err) => {
      const errorMessage = buildVerifyEmailErrorMessage(err);

      toast.error(errorMessage);
      setIsPending(false);
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(verifyEmailSchema),
  });

  const onSubmit = (data) => {
    setIsPending(true);
    verifyEmail(data);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <DataEntry>
          <FormColumn>
            <Subtitle>Recuperação de Conta</Subtitle>
            <Subtitle2>
              Insira seu email e enviaremos um link para você recuperar sua
              conta
            </Subtitle2>
            <RegisterInput
              label="Insira seu Email: "
              name="email"
              placeholder="Email"
              register={register}
              errors={errors}
              type="text"
              defaultValue=""
            />
          </FormColumn>
        </DataEntry>

        <SaveChanges
          disabled={isPending}
          type="submit"
          name="Salvar Alterações"
          relativeWidth="70%"
        >
          {isPending ? (
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
            <>
              <SendOutlined />
              Enviar
            </>
          )}
        </SaveChanges>
      </Form>
    </Container>
  );
}

ModalForgotPassword.propTypes = {
  close: PropTypes.func.isRequired,
};
