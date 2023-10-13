import { zodResolver } from '@hookform/resolvers/zod';
import { ThemeProvider } from '@mui/material/styles';
import { useQueryClient } from '@tanstack/react-query';
import { Controller, useForm } from 'react-hook-form';
import { TailSpin } from 'react-loader-spinner';
import { useMediaQuery } from 'react-responsive';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useUpdateSoftwareAccess } from '../../hooks/query/users';
import { useGlobalLanguage } from '../../stores/globalLanguage';
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
import { TranslateText } from './translations';
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

  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateText({ globalLanguage });

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
        <Title>{translations.pageTitle}</Title>

        <Field>
          <Label>{translations.emailLabel}</Label>
          <EmailText>{authorizeUser.email}</EmailText>
        </Field>
        <Field>
          <Label>{translations.accessValidityLabel}</Label>
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
                <p>{translations.loadingText}</p>
              </>
            ) : (
              <p>{translations.saveChangesButton}</p>
            )}
          </SaveButton>

          <CancelButton to="/administrador/liberacao-software">
            <p>{translations.cancelButton}</p>
          </CancelButton>
        </Buttons>
      </Form>
    </Container>
  );
}
