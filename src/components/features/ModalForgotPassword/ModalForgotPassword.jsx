import { useState } from 'react';

import { SendOutlined } from '@ant-design/icons';
import { zodResolver } from '@hookform/resolvers/zod';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { TailSpin } from 'react-loader-spinner';
import { toast } from 'react-toastify';

import { useForgotPassword } from '../../../hooks/query/users';
import { RegisterInput } from '../../common';
import {
  Container,
  Form,
  DataEntry,
  FormColumn,
  SaveChanges,
  Title,
  Subtitle,
} from './Styles';
import { buildForgotPasswordErrorMessage, forgotPasswordSchema } from './utils';

export default function ModalForgotPassword({ close }) {
  const [isPending, setIsPending] = useState(false);

  const { mutate: forgotPassword } = useForgotPassword({
    onSuccess: () => {
      toast.success('Email enviado com sucesso');
      close();
    },
    onError: (err) => {
      const errorMessage = buildForgotPasswordErrorMessage(err);

      toast.error(errorMessage);
      setIsPending(false);
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = ({ email }) => {
    setIsPending(true);
    forgotPassword(email);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <DataEntry>
          <FormColumn>
            <Title>Recuperação de Conta</Title>
            <Subtitle>
              Enviaremos um link para você recuperar sua conta
            </Subtitle>
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
