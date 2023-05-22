import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useQueryClient } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { useUpdateUserCourse } from '../../../hooks/query/userCourse';
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
  buildUpdateUserCourseErrorMessage,
  modalUpdateAuthorizeAccessValidationSchema,
  themeDatePicker,
} from './utils';

export default function ModalEditAuthorizeAccess({ authorizedUser, close }) {
  // Variables
  const [isPending, setIsPending] = useState(false); // Important for modal loading
  const queryClient = useQueryClient();

  // Backend calls
  const { mutate: updateUserCourse } = useUpdateUserCourse({
    onSuccess: () => {
      Promise.all([
        queryClient.invalidateQueries({
          queryKey: ['user-courses'],
        }),
      ]);

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
  const onSubmit = (data) => {
    updateUserCourse({ _id: authorizedUser?._id, newCategoryData: data });
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
              name="email"
              control={control}
              errors={errors}
              defaultValue={authorizedUser?.user.email}
            />
          </div>
          <div>
            <Label>Validade do acesso:</Label>
            <AccessExpirationContainer>
              <ThemeProvider theme={themeDatePicker}>
                <Controller
                  control={control}
                  name="accessExpiration"
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
            <p>{isPending ? 'Carregando...' : '+ Salvar Alterações'}</p>
          </ModalButton>
        </ModalContent>
      </Form>
    </Container>
  );
}

ModalEditAuthorizeAccess.propTypes = {
  close: PropTypes.func.isRequired,
  authorizedUser: PropTypes.object,
};

ModalEditAuthorizeAccess.defaultProps = {
  authorizedUser: {},
};
