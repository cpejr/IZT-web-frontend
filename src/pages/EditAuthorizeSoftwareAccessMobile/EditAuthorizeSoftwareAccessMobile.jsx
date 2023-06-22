import { zodResolver } from '@hookform/resolvers/zod';
import { ThemeProvider } from '@mui/material/styles';
import { useQueryClient } from '@tanstack/react-query';
import { Controller, useForm } from 'react-hook-form';
import { TailSpin } from 'react-loader-spinner';
import { useMediaQuery } from 'react-responsive';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useUpdateSoftwareAccess } from '../../hooks/query/users';
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
  buildUpdateSoftwareAccessErrorMessage,
} from './utils';

export default function EditAuthorizeSofwareAccessMobile() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const authorizeUser = useLocation().state;
  const isSmallScreen = useMediaQuery({ maxWidth: 700 });

  // Backend calls
  const { mutate: updateSoftwareAccess, isLoading } = useUpdateSoftwareAccess({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['users-with-software-access'],
      });
      toast.success('Autorização de acesso ao software alterada com sucesso!');
      navigate('/administrador/liberacao-software');
    },
    onError: (err) => {
      const errorMessage = buildUpdateSoftwareAccessErrorMessage(err);

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
  const onSubmit = ({ softwareAccess }) =>
    updateSoftwareAccess({
      _id: authorizeUser?._id,
      softwareAccess,
    });

  if (!isSmallScreen)
    return <Navigate to="/administrador/liberacao-software" />;

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>Editar Autorização de Acesso</Title>

        <Field>
          <Label>Email:</Label>
          <EmailText>{authorizeUser.email}</EmailText>
        </Field>
        <Field>
          <Label>Validade do acesso:</Label>
          <AccessExpirationContainer>
            <ThemeProvider theme={themeDatePicker}>
              <Controller
                control={control}
                name="softwareAccess"
                render={({ field: { onChange, onBlur } }) => (
                  <Date
                    id="softwareAccess"
                    onChange={onChange}
                    onBlur={onBlur}
                    format="DD/MM/YYYY"
                    disablePast
                    slotProps={{
                      textField: {
                        error: !!errors.softwareAccess,
                      },
                    }}
                  />
                )}
              />
            </ThemeProvider>
          </AccessExpirationContainer>
          <ErrorMessage>{errors.softwareAccess?.message}</ErrorMessage>
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

          <CancelButton to="/administrador/liberacao-software">
            <p>Cancelar</p>
          </CancelButton>
        </Buttons>
      </Form>
    </Container>
  );
}
