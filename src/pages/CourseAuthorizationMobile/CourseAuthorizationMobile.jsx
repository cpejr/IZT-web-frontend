import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { ThemeProvider } from '@mui/material/styles';
import { useQueryClient } from '@tanstack/react-query';
import { Controller, useForm } from 'react-hook-form';
import { TailSpin } from 'react-loader-spinner';
import { useMediaQuery } from 'react-responsive';
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { FormSelect } from '../../components/common';
import { useCreateUserCourse } from '../../hooks/query/userCourse';
import { useGetUsers } from '../../hooks/query/users';
import { useGlobalLanguage } from '../../stores/globalLanguage';
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
import { TranslateText } from './translations';
import {
  authorizeAccessValidationSchema,
  themeDatePicker,
  buildCreateUserCourseErrorMessage,
  buildGetUsersErrorMessage,
  toastSuccessMessage,
} from './utils';
import {
  authorizeAccessValidationSchemaDE,
  buildCreateUserCourseErrorMessageDE,
  buildGetUsersErrorMessageDE,
  toastSuccessMessageDE,
} from './utilsDE';
import {
  authorizeAccessValidationSchemaEN,
  buildCreateUserCourseErrorMessageEN,
  buildGetUsersErrorMessageEN,
  toastSuccessMessageEN,
} from './utilsEN';

export default function CourseAuthorizationMobile() {
  const courseId = '646acfad1bae8cb3a56a05f4';
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const queryClient = useQueryClient();
  const isSmallScreen = useMediaQuery({ maxWidth: 700 });

  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateText({ globalLanguage });

  // Backend calls
  const { data: users } = useGetUsers({
    onError: (err) => {
      if (globalLanguage === 'EN') {
        const errorMessage = buildGetUsersErrorMessageEN(err);
        toast.error(errorMessage);
      } else if (globalLanguage === 'DE') {
        const errorMessage = buildGetUsersErrorMessageDE(err);
        toast.error(errorMessage);
      } else {
        const errorMessage = buildGetUsersErrorMessage(err);
        toast.error(errorMessage);
      }
    },
  });
  const { mutate: createUserCourse } = useCreateUserCourse({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['user-courses'],
      });
      queryClient.invalidateQueries({
        queryKey: ['users'],
      });
      if (globalLanguage === 'EN') toast.success(toastSuccessMessageEN);
      else if (globalLanguage === 'DE') toast.success(toastSuccessMessageDE);
      else toast.success(toastSuccessMessage);
    },
    onError: (err) => {
      if (globalLanguage === 'EN') {
        const errorMessage = buildCreateUserCourseErrorMessageEN(err);
        toast.error(errorMessage);
      } else if (globalLanguage === 'DE') {
        const errorMessage = buildCreateUserCourseErrorMessageDE(err);
        toast.error(errorMessage);
      } else {
        const errorMessage = buildCreateUserCourseErrorMessage(err);
        toast.error(errorMessage);
      }
      setIsLoading(false);
    },
  });

  // Form handlers
  let resolver;
  if (globalLanguage === 'EN') {
    resolver = zodResolver(authorizeAccessValidationSchemaEN);
  } else if (globalLanguage === 'DE') {
    resolver = zodResolver(authorizeAccessValidationSchemaDE);
  } else {
    resolver = zodResolver(authorizeAccessValidationSchema);
  }
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver });
  const onSubmit = ({ userId, expiresAt }) => {
    createUserCourse({
      user: userId,
      expiresAt,
      course: courseId,
    });
    setIsLoading(true);
    navigate('/administrador/liberacao-cursos');
  };

  if (!isSmallScreen) return <Navigate to="/administrador/liberacao-cursos" />;

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>{translations.title}</Title>

        <div>
          <Label>{translations.emailLabel}</Label>
          <FormSelect
            id="userId"
            name="userId"
            control={control}
            errors={errors}
            data={users
              ?.filter(({ courses }) => !courses?.includes(courseId))
              ?.map(({ _id, email }) => ({
                label: email,
                value: _id,
              }))}
            placeholder={translations.placeholderEmail}
            filterOption={(input, option) =>
              option?.children?.toLowerCase()?.includes(input?.toLowerCase())
            }
            showSearch
            style={{ width: '100%' }}
            size="large"
          />
        </div>
        <div>
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
                />
                <p>{translations.loadingText}</p>
              </>
            ) : (
              <p>{translations.authorizeButtonLabel}</p>
            )}
          </SaveButton>

          <CancelButton to="/administrador/liberacao-cursos">
            <p>{translations.cancelButtonLabel}</p>
          </CancelButton>
        </ButtonsDiv>
      </Form>
    </Container>
  );
}
