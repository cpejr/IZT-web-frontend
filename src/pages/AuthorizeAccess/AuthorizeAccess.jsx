import { useState, useMemo } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMediaQuery } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Controller, useForm } from 'react-hook-form';
import { Navigate, useNavigate } from 'react-router-dom';

import { RegisterInput } from '../../components/common';
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
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false); // Important for modal loading
  const [dateError, setDateError] = useState(null);

  const theme = createTheme({
    palette: {
      primary: {
        main: '#000000',
        light: '#000000',
      },
      text: {
        primary: '#000000',
        secondary: '#000000',
        disabled: '#000000',
      },
      action: {
        active: '#000000',
        hover: '#203699',
        selected: '#203699',
        disabled: '#000000',
      },
      background: {
        default: '#fff',
      },
      divider: '#000000',
    },
    typography: {
      fontFamily: 'Montserrat',
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
    navigate('/administrador/loja/liberacao-cursos');
  };

  const isMobile = useMediaQuery('(max-width:700px)');

  if (!isMobile) return <Navigate to="/administrador/loja/liberacao-cursos" />;

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
            <ThemeProvider theme={theme}>
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
                            <ErrorMessage>
                              {errors.accessExpiration.message}
                            </ErrorMessage>
                          ) : (
                            <ErrorMessage>{errorMessage}</ErrorMessage>
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
