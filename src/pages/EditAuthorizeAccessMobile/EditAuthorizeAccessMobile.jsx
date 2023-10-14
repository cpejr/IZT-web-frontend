import { zodResolver } from '@hookform/resolvers/zod';
import { ThemeProvider } from '@mui/material/styles';
import { useQueryClient } from '@tanstack/react-query';
import { Controller, useForm } from 'react-hook-form';
import { TailSpin } from 'react-loader-spinner';
import { useMediaQuery } from 'react-responsive';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useUpdateUserCourse } from '../../hooks/query/userCourse';
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
  buildUpdateUserCourseErrorMessage,
  toastSuccessMessage,
} from './utils';
import {
  updateAuthorizeAccessValidationSchemaDE,
  buildUpdateUserCourseErrorMessageDE,
  toastSuccessMessageDE,
} from './utilsDE';
import {
  updateAuthorizeAccessValidationSchemaEN,
  buildUpdateUserCourseErrorMessageEN,
  toastSuccessMessageEN,
} from './utilsEN';

export default function EditAuthorizeAccessMobile() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const authorizeUser = useLocation().state;
  const isSmallScreen = useMediaQuery({ maxWidth: 700 });

  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateText({ globalLanguage });

  // Backend calls
  const { mutate: updateUserCourse, isLoading } = useUpdateUserCourse({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['user-courses'],
      });
      if (globalLanguage === 'EN') toast.success(toastSuccessMessageEN);
      else if (globalLanguage === 'DE') toast.success(toastSuccessMessageDE);
      else toast.success(toastSuccessMessage);
      navigate('/administrador/liberacao-cursos');
    },
    onError: (err) => {
      if (globalLanguage === 'EN') {
        const errorMessage = buildUpdateUserCourseErrorMessageEN(err);
        toast.error(errorMessage);
      } else if (globalLanguage === 'DE') {
        const errorMessage = buildUpdateUserCourseErrorMessageDE(err);
        toast.error(errorMessage);
      } else {
        const errorMessage = buildUpdateUserCourseErrorMessage(err);
        toast.error(errorMessage);
      }
    },
  });

  // Form handlers
  let resolver;
  if (globalLanguage === 'DE') {
    resolver = zodResolver(updateAuthorizeAccessValidationSchemaEN);
  } else if (globalLanguage === 'EN') {
    resolver = zodResolver(updateAuthorizeAccessValidationSchemaDE);
  } else {
    resolver = zodResolver(updateAuthorizeAccessValidationSchema);
  }
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver });
  const onSubmit = ({ expiresAt }) =>
    updateUserCourse({
      _id: authorizeUser?._id,
      newUserCourseData: { expiresAt },
    });

  if (!isSmallScreen) return <Navigate to="/administrador/liberacao-cursos" />;

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>{translations.title}</Title>

        <Field>
          <Label>{translations.emailLabel}</Label>
          <EmailText>{authorizeUser?.user?.email}</EmailText>
        </Field>
        <Field>
          <Label>{translations.validityLabel}</Label>
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
                <p>{translations.loadingText}</p>
              </>
            ) : (
              <p>{translations.saveChangesLabel}</p>
            )}
          </SaveButton>

          <CancelButton to="/administrador/liberacao-cursos">
            <p>{translations.cancelButtonLabel}</p>
          </CancelButton>
        </Buttons>
      </Form>
    </Container>
  );
}
