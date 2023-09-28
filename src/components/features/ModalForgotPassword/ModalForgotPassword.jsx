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

export default function ModalForgotPassword({ close, language }) {
  let modalAccount;
  let modalLink;
  let modalEmail;
  let modalSend;
  let loading;
  let modalEmailSent;

  if (language === 'EN') {
    modalAccount = 'Account Recovery';
    modalLink = 'We will send you a link to recover your account';
    modalEmail = 'Enter your Email: ';
    modalSend = 'Send';
    loading = 'Loading';
    modalEmailSent = 'Email sent successfully';
  } else if (language === 'PT') {
    modalAccount = 'Recuperação de Conta';
    modalLink = 'Enviaremos um link para você recuperar sua conta';
    modalEmail = 'Insira seu Email: ';
    modalSend = 'Enviar';
    loading = 'Carregando';
    modalEmailSent = 'Email enviado com sucesso';
  } else if (language === 'DE') {
    modalAccount = 'Kontowiederherstellung';
    modalLink = 'Wir senden Ihnen einen Link, um Ihr Konto wiederherzustellen';
    modalEmail = 'Geben Sie Ihre E-Mail ein:';
    modalSend = 'Senden';
    loading = 'Wird geladen';
    modalEmailSent = 'E-Mail erfolgreich versendet';
  }
  const [isPending, setIsPending] = useState(false);

  const { mutate: forgotPassword } = useForgotPassword({
    onSuccess: () => {
      toast.success({ modalEmailSent });
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
            <Title>{modalAccount}</Title>
            <Subtitle>{modalLink}</Subtitle>
            <RegisterInput
              label={modalEmail}
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
              {loading}
            </>
          ) : (
            <>
              <SendOutlined />
              {modalSend}
            </>
          )}
        </SaveChanges>
      </Form>
    </Container>
  );
}

ModalForgotPassword.propTypes = {
  close: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
};
