import { zodResolver } from '@hookform/resolvers/zod';
import { ThemeProvider } from '@mui/material/styles';
import { useQueryClient } from '@tanstack/react-query';
import { Controller, useForm } from 'react-hook-form';
import { TailSpin } from 'react-loader-spinner';
import { useMediaQuery } from 'react-responsive';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useUpdateUserCourse } from '../../hooks/query/userCourse';
import {
  Container,
  Form,
  Title,
  Buttons,
  SaveButton,
  CancelButton,
  Label,
  EmailText,
  AccessExpirationContainer,
  ErrorMessage,
  Date,
  Field,
} from './Styles';
import {
  updateAuthorizeAccessValidationSchema,
  themeDatePicker,
  buildUpdateUserCourseErrorMessage,
} from './utils';

export default function EditAuthorizeAccessMobile() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const authorizeUser = useLocation().state;
  const isSmallScreen = useMediaQuery({ maxWidth: 700 });

  // Backend calls
  const { mutate: updateUserCourse, isLoading } = useUpdateUserCourse({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['user-courses'],
      });
      toast.success('Autorização de acesso ao curso alterada com sucesso!');
      navigate('/administrador/liberacao-cursos');
    },
    onError: (err) => {
      const errorMessage = buildUpdateUserCourseErrorMessage(err);

      toast.error(errorMessage);
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
  const onSubmit = ({ expiresAt }) =>
    updateUserCourse({
      _id: authorizeUser?._id,
      newUserCourseData: { expiresAt },
    });

  if (!isSmallScreen) return <Navigate to="/administrador/liberacao-cursos" />;

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>Editar Autorização de Acesso</Title>

        <Field>
          <Label>Email:</Label>
          <EmailText>{authorizeUser?.user?.email}</EmailText>
        </Field>
        <Field>
          <Label>Validade do acesso:</Label>
          <AccessExpirationContainer>
            <ThemeProvider theme={themeDatePicker}>
              <Controller
                control={control}
                id="expiresAt"
                name="expiresAt"
                render={({ field: { onChange, onBlur } }) => (
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
                )}
              />
            </ThemeProvider>
          </AccessExpirationContainer>
          <ErrorMessage>{errors?.expiresAt?.message}</ErrorMessage>
        </Field>

        <Buttons>
          <SaveButton disabled={isLoading} type="submit">
            {isLoading ? (
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
              <p>Salvar Alterações</p>
            )}
          </SaveButton>

          <CancelButton to="/administrador/liberacao-cursos">
            <p>Cancelar</p>
          </CancelButton>
        </Buttons>
      </Form>
    </Container>
  );
}
