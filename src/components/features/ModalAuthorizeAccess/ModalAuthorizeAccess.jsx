import { useState, useMemo } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import { Controller, useForm } from 'react-hook-form';
import { TailSpin } from 'react-loader-spinner';
// import { toast } from 'react-toastify';

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

export default function ModalAuthorizeAccess({ close, data }) {
  const [isPending, setIsPending] = useState(false); // Important for modal loading
  const [dateError, setDateError] = useState(null);

  const customTheme = createTheme({
    typography: {
      fontFamily: 'Montserrat',
    },
    palette: {
      mode: 'light',
    },
  });

  // ADICIONAR A FUNÇÃO AQUI
  // const { mutate: autorizeAcess } = useAutorizeAcess({
  //   onSuccess: () => {
  //     toast.success('Acesso Autorizado com sucesso!');
  //     close();
  //   },
  //   onError: (err) => {
  //     const errorMessage = buildUpdateCategoryErrorMessage(err);

  //     toast.error(errorMessage);
  //     setIsPending(false);
  //   },
  // });

  const {
    handleSubmit,
    register,
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
              defaultValue={data?.email}
              {...register('email')}
            />
            {errors?.email?.message && (
              <ErrorMessage>{errors?.email?.message}</ErrorMessage>
            )}
          </div>
          <div>
            <Label>Validade do acesso:</Label>
            <AccessExpirationContainer>
              <ThemeProvider theme={customTheme}>
                <Controller
                  control={control}
                  name="accessExpiration"
                  render={({ field: { onChange, onBlur } }) => (
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <Date
                        defaultValue={dayjs(data?.expiration, 'DD/MM/YYYY')}
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
  data: PropTypes.object,
};

ModalAuthorizeAccess.defaultProps = {
  data: {},
};
