import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import PropTypes from 'prop-types';
import { Controller, useForm } from 'react-hook-form';

import {
  Container,
  Form,
  Label,
  AccessExpirationContainer,
  Input,
  ModalContent,
  ModalButton,
  ErrorMessage,
  Date,
} from './Styles';
import { modalAuthorizeAccessValidationSchema } from './utils';

export default function ModalAuthorizeAccess({ close }) {
  const [isPending, setIsPending] = useState(false); // Important for modal loading

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm({
    resolver: zodResolver(modalAuthorizeAccessValidationSchema),
  });

  const onSubmit = (authorizedUser) => {
    setIsPending(true);
    console.log(authorizedUser);
    close();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <ModalContent>
          <div>
            <Label>Email:</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="email@email.com"
              {...register('email')}
            />
            {errors?.email?.message && (
              <ErrorMessage>{errors?.email?.message}</ErrorMessage>
            )}
          </div>
          <div>
            <Label>Validade do acesso:</Label>
            <AccessExpirationContainer>
              <ThemeProvider theme={darkTheme}>
                <Controller
                  control={control}
                  name="accessExpiration"
                  render={({
                    field: { onChange, onBlur },
                    formState: { error },
                  }) => (
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <Date
                        onChange={onChange}
                        onBlur={onBlur}
                        format="DD/MM/YYYY"
                        disablePast
                        slotProps={{
                          textField: {
                            // error: !!error,
                            helperText: errors?.accessExpiration?.message,
                          },
                        }}
                        // renderInput={(params) => (
                        //   <TextField
                        //     {...params}
                        //     error={!!error}
                        //     helperText={errors?.message}
                        //   />
                        // )}
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
