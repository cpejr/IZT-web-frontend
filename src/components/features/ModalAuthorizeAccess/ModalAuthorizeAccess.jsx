import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { ThemeProvider } from '@mui/material/styles';
import { useQueryClient } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import { Controller, useForm } from 'react-hook-form';
import { TailSpin } from 'react-loader-spinner';
import { toast } from 'react-toastify';

import { useCreateUserCourse } from '../../../hooks/query/userCourse';
import { useGetUsers } from '../../../hooks/query/users';
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
  buildCreateUserCourseErrorMessage,
  buildGetUsersErrorMessage,
  modalAuthorizeAccessValidationSchema,
  themeDatePicker,
} from './utils';

export default function ModalAuthorizeAccess({ close }) {
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

  const { mutate: createUserCourse } = useCreateUserCourse({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['user-courses'],
      });

      toast.success('Autorização ao curso concedida com sucesso!');
      close();
    },
    onError: (err) => {
      const errorMessage = buildCreateUserCourseErrorMessage(err);

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
  const onSubmit = ({ userId, expiresAt }) => {
    createUserCourse({
      user: userId,
      course: '645548677d3184e5b411a08f',
      expiresAt,
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
                  id="expiresAt"
                  name="expiresAt"
                  render={({ field: { onChange, onBlur } }) => (
                    <Date
                      onChange={onChange}
                      onBlur={onBlur}
                      format="DD/MM/YYYY"
                      disablePast
                      slotProps={{
                        textField: {
                          error: !!errors.expiresAt,
                        },
                      }}
                    />
                  )}
                />
              </ThemeProvider>
            </AccessExpirationContainer>
            <ErrorMessage>{errors?.expiresAt?.message}</ErrorMessage>
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

ModalAuthorizeAccess.propTypes = {
  close: PropTypes.func.isRequired,
};
