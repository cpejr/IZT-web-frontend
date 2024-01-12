import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { ThemeProvider } from '@mui/material/styles';
import { useQueryClient } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import { Controller, useForm } from 'react-hook-form';
import { TailSpin } from 'react-loader-spinner';
import { toast } from 'react-toastify';

import { useCreateUserCourse } from '../../../hooks/query/userCourse';
import { useGetUsers } from '../../../hooks/query/users';
import { FormSelect, Loading } from '../../common';
import {
  Container,
  Form,
  Label,
  AccessExpirationContainer,
  ModalContent,
  ModalButton,
  ErrorMessage,
  Date,
} from './Styles';
import { TranslateText } from './translations';
import {
  buildCreateUserCourseErrorMessage,
  buildGetUsersErrorMessage,
  modalAuthorizeAccessValidationSchema,
  themeDatePicker,
  toastSuccessMessage,
} from './utils';
import {
  buildCreateUserCourseErrorMessageDE,
  buildGetUsersErrorMessageDE,
  modalAuthorizeAccessValidationSchemaDE,
  toastSuccessMessageDE,
} from './utilsDE';
import {
  buildCreateUserCourseErrorMessageEN,
  buildGetUsersErrorMessageEN,
  modalAuthorizeAccessValidationSchemaEN,
  toastSuccessMessageEN,
} from './utilsEN';

export default function ModalAuthorizeAccess({ close, language }) {
  // Variables
  const courseId = '646acfad1bae8cb3a56a05f4';
  const [isPending, setIsPending] = useState(false); // Important for modal loading
  const queryClient = useQueryClient();
  const translations = TranslateText({ language });

  // Backend calls
  const { data: users, isLoading } = useGetUsers({
    onError: (err) => {
      if (language === 'EN') {
        const errorMessage = buildGetUsersErrorMessageEN(err);
        toast.error(errorMessage);
      } else if (language === 'DE') {
        const errorMessage = buildGetUsersErrorMessageDE(err);
        toast.error(errorMessage);
      } else {
        const errorMesage = buildGetUsersErrorMessage(err);
        toast.error(errorMesage);
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
      if (language === 'EN') toast.success(toastSuccessMessageEN);
      else if (language === 'DE') toast.success(toastSuccessMessageDE);
      else toast.success(toastSuccessMessage);
      close();
    },
    onError: (err) => {
      if (language === 'DE') {
        const errorMessage = buildCreateUserCourseErrorMessageDE(err);
        toast.error(errorMessage);
        setIsPending(false);
      } else if (language === 'EN') {
        const errorMessage = buildCreateUserCourseErrorMessageEN(err);
        toast.error(errorMessage);
        setIsPending(false);
      } else {
        const errorMessage = buildCreateUserCourseErrorMessage(err);
        toast.error(errorMessage);
        setIsPending(false);
      }
    },
  });

  // Form handlers
  let resolver;
  if (language === 'DE') {
    resolver = zodResolver(modalAuthorizeAccessValidationSchemaDE);
  } else if (language === 'EN') {
    resolver = zodResolver(modalAuthorizeAccessValidationSchemaEN);
  } else {
    resolver = zodResolver(modalAuthorizeAccessValidationSchema);
  }
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({ resolver });
  const onSubmit = ({ userId, expiresAt }) => {
    createUserCourse({
      user: userId,
      course: courseId,
      expiresAt,
    });
    setIsPending(true);
    close();
  };

  if (isLoading)
    return (
      <Container>
        <Loading style={{ height: '25rem' }} />
      </Container>
    );

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <ModalContent>
          <div>
            <Label>Email:</Label>
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
              placeholder={translations.phEmail}
              filterOption={(input, option) =>
                option?.children?.toLowerCase()?.includes(input?.toLowerCase())
              }
              showSearch
              style={{ width: '400px' }}
              size="large"
            />
          </div>
          <div>
            <Label>{translations.accessExpiration}</Label>
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

          <ModalButton disabled={isPending} type="submit">
            {isPending ? (
              <>
                <TailSpin
                  height="15"
                  width="15"
                  color="white"
                  ariaLabel="tail-spin-loading"
                  radius="5"
                />
                <p>{translations.loading}</p>
              </>
            ) : (
              <p>{translations.authorize}</p>
            )}
          </ModalButton>
        </ModalContent>
      </Form>
    </Container>
  );
}

ModalAuthorizeAccess.propTypes = {
  close: PropTypes.func.isRequired,
};
ModalAuthorizeAccess.propTypes = {
  language: PropTypes.string.isRequired,
};
