import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useQueryClient } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { useCreateUserCourse } from '../../../hooks/query/userCourse';
import { useGetUsers } from '../../../hooks/query/users';
import { FormSelect } from '../../common';
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
  const { data: users, isLoading: isLoadingUserCourses } = useGetUsers({
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
      expiresAt,
      course: '645548677d3184e5b411a08f',
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
                option?.key?.toLowerCase()?.includes(input?.toLowerCase())
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
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <Date
                        onChange={onChange}
                        onBlur={onBlur}
                        format="DD/MM/YYYY"
                        disablePast
                        slotProps={{
                          textField: {
                            error: !!errors.accessExpiration,
                          },
                        }}
                      />
                    </LocalizationProvider>
                  )}
                />
              </ThemeProvider>
            </AccessExpirationContainer>
            <ErrorMessage>{errors?.accessExpiration?.message}</ErrorMessage>
          </div>

          <ModalButton disabled={isPending} type="submit">
            <p>{isPending ? 'Carregando...' : '+ Autorizar'}</p>
          </ModalButton>
        </ModalContent>
      </Form>
    </Container>
  );
}

ModalAuthorizeAccess.propTypes = {
  close: PropTypes.func.isRequired,
};
