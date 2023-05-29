import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Controller, useForm } from 'react-hook-form';
import { useMediaQuery } from 'react-responsive';
import { Navigate, useNavigate } from 'react-router-dom';

import { FormSelect } from '../../components/common';
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
import { authorizeAccessValidationSchema, themeDatePicker } from './utils';

export const emails = [
  { label: 'thiagofraga@cpejr.com.br', value: 'thiagofraga@cpejr.com.br' },
  { label: 'amandaalves@cpejr.com.br', value: 'amandaalves@cpejr.com.br' },
  { label: 'joaopiraja@cpejr.com.br', value: 'joaopiraja@cpejr.com.br' },
];

export default function AuthorizeAccessMobile() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false); // Important for modal loading
  const isSmallScreen = useMediaQuery({ maxWidth: 700 });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(authorizeAccessValidationSchema),
  });
  const onSubmit = (authorizedUser) => {
    console.log(authorizedUser);
    setIsLoading(true);
    navigate('/administrador/liberacao-cursos');
  };

  if (!isSmallScreen) return <Navigate to="/administrador/liberacao-cursos" />;

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>Autorizar Acesso</Title>

        <div>
          <Label>Email:</Label>
          <FormSelect
            name="email"
            control={control}
            errors={errors}
            data={emails}
            placeholder="Selecione o email"
            filterOption={(input, option) =>
              option?.key?.toLowerCase()?.includes(input?.toLowerCase())
            }
            showSearch
            style={{ width: '40rem' }}
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

        <ButtonsDiv>
          <SaveButton disabled={isLoading} type="submit">
            <p>{isLoading ? 'Carregando...' : '+ Autorizar'}</p>
          </SaveButton>

          <CancelButton to="/administrador/liberacao-cursos">
            <p>Cancelar</p>
          </CancelButton>
        </ButtonsDiv>
      </Form>
    </Container>
  );
}
