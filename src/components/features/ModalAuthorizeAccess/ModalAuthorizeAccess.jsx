import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import PropTypes from 'prop-types';
import { Controller, useForm } from 'react-hook-form';

import {
  Container,
  Form,
  Label,
  AccessExpirationContainer,
  SelectEmail,
  ModalContent,
  ModalButton,
  ErrorMessage,
  Date,
} from './Styles';
import {
  modalAuthorizeAccessValidationSchema,
  themeDatePicker,
  emails,
  errorMessage,
} from './utils';

export default function ModalAuthorizeAccess({ close, data }) {
  const [isPending, setIsPending] = useState(false); // Important for modal loading
  const [dateError, setDateError] = useState(null);

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: zodResolver(modalAuthorizeAccessValidationSchema),
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
            <Controller
              name="email"
              control={control}
              render={({ field: { onChange, value } }) => (
                <SelectEmail
                  placeholder="Selecione o email"
                  size="large"
                  onChange={onChange}
                  value={value}
                  defaultValue={data?.email}
                  options={emails}
                />
              )}
            />

            {errors?.email?.message && (
              <ErrorMessage>{errors?.email?.message}</ErrorMessage>
            )}
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
                        onError={(newError) => setDateError(newError)}
                        disablePast
                        slotProps={{
                          textField: {
                            error: !!errors.accessExpiration,
                            helperText: errors.accessExpiration ? (
                              <div>
                                <ErrorMessage>
                                  {errors.accessExpiration.message}
                                </ErrorMessage>
                              </div>
                            ) : (
                              <div>
                                <ErrorMessage>{errorMessage}</ErrorMessage>
                              </div>
                            ),
                          },
                        }}
                      />
                    </LocalizationProvider>
                  )}
                />
              </ThemeProvider>
            </AccessExpirationContainer>
            {errors?.accessExpiration?.message && (
              <ErrorMessage>
                {errors?.accessExErrorMessageiration?.message}
              </ErrorMessage>
            )}
          </div>

          <ModalButton disabled={isPending || dateError} type="submit">
            <p>{isPending ? 'Carregando...' : '+ Autorizar'}</p>
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
