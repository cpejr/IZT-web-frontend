import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useQueryClient } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import { Controller, useForm } from 'react-hook-form';
import { TailSpin } from 'react-loader-spinner';
import { toast } from 'react-toastify';

import { useUpdateUserCourse } from '../../../hooks/query/userCourse';
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
  buildUpdateUserCourseErrorMessage,
  modalUpdateAuthorizeAccessValidationSchema,
  themeDatePicker,
} from './utils';

export default function ModalEditAuthorizeAccess({ authorizeUser, close }) {
  // Variables
  const [isPending, setIsPending] = useState(false); // Important for modal loading
  const queryClient = useQueryClient();

  // Backend calls
  const { mutate: updateUserCourse } = useUpdateUserCourse({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['user-courses'],
      });
      toast.success('Autorização de acesso ao curso alterada com sucesso!');
      close();
    },
    onError: (err) => {
      const errorMessage = buildUpdateUserCourseErrorMessage(err);

      toast.error(errorMessage);
      setIsPending(false);
    },
  });

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: zodResolver(modalUpdateAuthorizeAccessValidationSchema),
  });
  const onSubmit = ({ expiresAt }) => {
    updateUserCourse({
      _id: authorizeUser?._id,
      newUserCourseData: { expiresAt },
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
            <h1>{authorizeUser?.user?.email}</h1>
          </div>
          <div>
            <Label>Validade do acesso:</Label>
            <AccessExpirationContainer>
              <ThemeProvider theme={themeDatePicker}>
                <Controller
                  control={control}
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
                            error: !!errors.expiresAt,
                          },
                        }}
                      />
                    </LocalizationProvider>
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
                  wrapperStyle={{}}
                  wrapperClass=""
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

ModalEditAuthorizeAccess.propTypes = {
  close: PropTypes.func.isRequired,
  authorizeUser: PropTypes.object,
};

ModalEditAuthorizeAccess.defaultProps = {
  authorizeUser: {},
};
