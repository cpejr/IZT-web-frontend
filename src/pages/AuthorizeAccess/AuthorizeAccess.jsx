import { useState, useMemo } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Controller, useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';

import { RegisterInput } from '../../components/common';
import useWindowSize from '../../hooks/useWindowSize';
import {
  Container,
  Form,
  Title,
  ButtonsDiv,
  SaveButton,
  CancelButton,
  Label,
  AccessExpirationContainer,
  ErrorMessage,
  Date,
} from './Styles';
import { authorizeAccessValidationSchema } from './utils';

export default function AuthorizeAccess() {
  const [isLoading, setIsLoading] = useState(false); // Important for modal loading
  const [dateError, setDateError] = useState(null);

  const darkTheme = createTheme({
    palette: {
      text: {
        primary: '#000',
        secondary: '#000000',
        disabled: '#404040',
      },
      action: {
        active: '#000000',
        hover: '#203699',
        selected: '#203699',
      },
    },
  });

  const errorMessage = useMemo(() => {
    switch (dateError) {
      case 'invalidDate': {
        return 'Data inválida';
      }
      case 'disablePast': {
        return 'Insira uma data futura';
      }
      default: {
        return '';
      }
    }
  }, [dateError]);

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(authorizeAccessValidationSchema),
  });

  const onSubmit = (authorizedUser) => {
    setIsLoading(true);
    console.log(authorizedUser);
  };

  const { width: windowWidth } = useWindowSize();
  const mobileBreakpoint = 700;

  if (windowWidth > mobileBreakpoint)
    return <Navigate to="/administrador/loja/liberacao-cursos" />;
  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>Autorizar Acesso</Title>

        <RegisterInput
          label="Email:"
          labelStyle={{ fontSize: '1.5em' }}
          errorStyle={{ fontSize: '1em' }}
          name="email"
          register={register}
          errors={errors}
          placeholder="email@email.com"
        />

        <div>
          <Label>Validade do acesso:</Label>
          <AccessExpirationContainer>
            <ThemeProvider theme={darkTheme}>
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
                          // error: !!error,
                          helperText: errorMessage,
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

        <ButtonsDiv>
          <SaveButton disabled={isLoading} type="submit">
            <p>{isLoading ? 'Carregando...' : '+ Autorizar'}</p>
          </SaveButton>

          <CancelButton to="/administrador/loja/liberacao-cursos">
            <p>Cancelar</p>
          </CancelButton>
        </ButtonsDiv>
      </Form>
    </Container>
  );
}
