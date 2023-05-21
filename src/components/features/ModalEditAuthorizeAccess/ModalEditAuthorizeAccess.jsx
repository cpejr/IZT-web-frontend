import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import PropTypes from 'prop-types';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { useUpdateUserCourse } from '../../../hooks/query/userCourse';
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
  buildUpdateUserCourseErrorMessage,
  modalUpdateAuthorizeAccessValidationSchema,
  themeDatePicker,
} from './utils';

export default function ModalAuthorizeAccess({ close, data }) {
  // Variables
  const [isPending, setIsPending] = useState(false); // Important for modal loading

  // Backend calls
  const { data: users, isLoading: isLoadingUsers } = useGetUsers({
    onError: (err) => {
      const errorMessage = buildUpdateUserCourseErrorMessage(err);

      toast.error(errorMessage);
    },
  });

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: zodResolver(modalUpdateAuthorizeAccessValidationSchema),
  });
  const onSubmit = (authorizedUser) => {
    console.log(authorizedUser);
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

ModalAuthorizeAccess.propTypes = {
  close: PropTypes.func.isRequired,
  data: PropTypes.object,
};

ModalAuthorizeAccess.defaultProps = {
  data: {},
};
