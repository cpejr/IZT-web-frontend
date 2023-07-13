import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { ThemeProvider } from '@mui/material/styles';
import { useQueryClient } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import { Controller, useForm } from 'react-hook-form';
import { TailSpin } from 'react-loader-spinner';
import { toast } from 'react-toastify';

import {
  useGetUsers,
  useUpdateSoftwareAccess,
} from '../../../hooks/query/users';
import { FormSelect, Loading } from '../../common';
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
  buildCreateUserSoftwareAccessErrorMessage,
  buildGetUsersErrorMessage,
  modalAuthorizeAccessValidationSchema,
  themeDatePicker,
} from './utils';

export default function ModalAuthorizeSoftwareAccess({ close }) {
  // Variables

  const [isPending, setIsPending] = useState(false); // Important for modal loading
  const queryClient = useQueryClient();

  // Backend calls
  const { data: users, isLoading } = useGetUsers({
    onError: (err) => {
      const errorMessage = buildGetUsersErrorMessage(err);

      toast.error(errorMessage);
    },
  });

  const { mutate: updateSoftwareAccess } = useUpdateSoftwareAccess({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['users-with-software-access'],
      });

      toast.success('Autorização ao software concedida com sucesso!');
      close();
    },
    onError: (err) => {
      const errorMessage = buildCreateUserSoftwareAccessErrorMessage(err);

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
    resolver: zodResolver(modalAuthorizeAccessValidationSchema),
  });
  const onSubmit = ({ userId, softwareAccess }) => {
    updateSoftwareAccess({
      _id: userId,
      softwareAccess,
    });
    setIsPending(true);
    close();
  };

  if (isLoading)
    return (
      <Container>
        <Loading style={{ height: '25rem' }} />
      </Container>
    );

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <ModalContent>
          <div>
            <Label>Email:</Label>
            <FormSelect
              id="userId"
              name="userId"
              control={control}
              errors={errors}
              data={users?.map(({ _id, email }) => ({
                label: email,
                value: _id,
              }))}
              placeholder="Selecione o email"
              filterOption={(input, option) =>
                option?.children?.toLowerCase()?.includes(input?.toLowerCase())
              }
              showSearch
              style={{ width: '400px' }}
              size="large"
            />
          </div>

          <div>
            <Label>Validade do acesso:</Label>
            <AccessExpirationContainer>
              <ThemeProvider theme={themeDatePicker}>
                <Controller
                  control={control}
                  id="softwareAccess"
                  name="softwareAccess"
                  render={({ field: { onChange, onBlur } }) => (
                    <Date
                      onChange={onChange}
                      onBlur={onBlur}
                      format="DD/MM/YYYY"
                      disablePast
                      slotProps={{
                        textField: {
                          error: !!errors.softwareAccess,
                        },
                      }}
                      sx={{ fontSize: 16 }}
                    />
                  )}
                />
              </ThemeProvider>
            </AccessExpirationContainer>
            <ErrorMessage>{errors?.softwareAccess?.message}</ErrorMessage>
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
              <p>+ Autorizar</p>
            )}
          </ModalButton>
        </ModalContent>
      </Form>
    </Container>
  );
}

ModalAuthorizeSoftwareAccess.propTypes = {
  close: PropTypes.func.isRequired,
};