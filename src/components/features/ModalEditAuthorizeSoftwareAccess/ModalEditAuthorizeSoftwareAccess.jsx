import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { ThemeProvider } from '@mui/material/styles';
import { useQueryClient } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import { Controller, useForm } from 'react-hook-form';
import { TailSpin } from 'react-loader-spinner';
import { toast } from 'react-toastify';

import { useUpdateSoftwareAccess } from '../../../hooks/query/users';
import {
  Container,
  Form,
  Label,
  AccessExpirationContainer,
  ModalContent,
  ModalButton,
  ErrorMessage,
  Date,
} from './Styles';
import {
  buildUpdateSoftwareAccessErrorMessage,
  modalUpdateAuthorizeAccessValidationSchema,
  themeDatePicker,
} from './utils';

export default function ModalEditAuthorizeSoftwareAccess({
  authorizeUser,
  close,
}) {
  // Variables
  const [isPending, setIsPending] = useState(false); // Important for modal loading
  const queryClient = useQueryClient();

  // Backend calls
  const { mutate: updateSoftwareAccess } = useUpdateSoftwareAccess({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['users-with-software-access'],
      });
      toast.success('Autorização de acesso ao software alterada com sucesso!');
      close();
    },
    onError: (err) => {
      const errorMessage = buildUpdateSoftwareAccessErrorMessage(err);

      toast.error(errorMessage);
      setIsPending(false);
    },
  });

  // Form handlers

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: zodResolver(modalUpdateAuthorizeAccessValidationSchema),
  });
  const onSubmit = ({ softwareAccess }) => {
    updateSoftwareAccess({
      _id: authorizeUser?._id,
      softwareAccess,
    });
    setIsPending(true);
    close();
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <ModalContent>
          <div>
            <Label>Email:</Label>
            <h1>{authorizeUser.email}</h1>
          </div>

          <div>
            <Label>Validade do acesso:</Label>
            <AccessExpirationContainer>
              <ThemeProvider theme={themeDatePicker}>
                <Controller
                  control={control}
                  name="softwareAccess"
                  render={({ field: { onChange, onBlur } }) => (
                    <Date
                      id="softwareAccess"
                      onChange={onChange}
                      onBlur={onBlur}
                      format="DD/MM/YYYY"
                      disablePast
                      slotProps={{
                        textField: {
                          error: !!errors.softwareAccess,
                        },
                      }}
                    />
                  )}
                />
              </ThemeProvider>
            </AccessExpirationContainer>
            <ErrorMessage>{errors.softwareAccess?.message}</ErrorMessage>
          </div>

          <ModalButton disabled={isPending} type="submit">
            {isPending ? (
              <>
                <TailSpin
                  height="15"
                  width="15"
                  color="white"
                  ariaLabel="tail-spin-loading"
                  radius="5"
                />
                <p>Carregando</p>
              </>
            ) : (
              <p>Salvar Alterações</p>
            )}
          </ModalButton>
        </ModalContent>
      </Form>
    </Container>
  );
}

ModalEditAuthorizeSoftwareAccess.propTypes = {
  close: PropTypes.func.isRequired,
  authorizeUser: PropTypes.object.isRequired,
};
