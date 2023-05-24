import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useQueryClient } from '@tanstack/react-query';
import { Controller, useForm } from 'react-hook-form';
import { TailSpin } from 'react-loader-spinner';
import { useMediaQuery } from 'react-responsive';
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { FormSelect } from '../../components/common';
import { useUpdateUserCourse } from '../../hooks/query/userCourse';
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
import {
  updateAuthorizeAccessValidationSchema,
  themeDatePicker,
  buildUpdateUserCourseErrorMessage,
} from './utils';

export default function EditAuthorizeAccessMobile({ authorizeUser }) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const queryClient = useQueryClient();
  const isSmallScreen = useMediaQuery({ maxWidth: 700 });

  // Backend calls
  const { mutate: updateUserCourse } = useUpdateUserCourse({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['user-courses'],
      });
      toast.success('Autorização de acesso ao curso alterada com sucesso!');
    },
    onError: (err) => {
      const errorMessage = buildUpdateUserCourseErrorMessage(err);

      toast.error(errorMessage);
      setIsLoading(false);
    },
  });

  // Form handlers
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(updateAuthorizeAccessValidationSchema),
  });
  const onSubmit = ({ expiresAt }) => {
    updateUserCourse({
      _id: authorizeUser?._id,
      newUserCourseData: { expiresAt },
    });
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
          <h1>{authorizeUser?.user?.email}</h1>
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

        <ButtonsDiv>
          <SaveButton disabled={isLoading} type="submit">
            {isLoading ? (
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
          </SaveButton>

          <CancelButton to="/administrador/liberacao-cursos">
            <p>Cancelar</p>
          </CancelButton>
        </ButtonsDiv>
      </Form>
    </Container>
  );
}
