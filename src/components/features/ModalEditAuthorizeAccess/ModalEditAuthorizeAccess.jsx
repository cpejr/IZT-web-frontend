import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { ThemeProvider } from '@mui/material/styles';
import { useQueryClient } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import { Controller, useForm } from 'react-hook-form';
import { TailSpin } from 'react-loader-spinner';
import { toast } from 'react-toastify';

import { useGlobalLanguage } from '../../../stores/globalLanguage';
import { TranslateText } from './translations';

import { useUpdateUserCourse } from '../../../hooks/query/userCourse';
import {
  Container,
  Form,
  Label,
  AccessExpirationContainer,
  ModalContent,
  ModalButton,
  ErrorMessage,
  Date,
  EmailText,
} from './Styles';
import {
  buildUpdateUserCourseErrorMessage,
  modalUpdateAuthorizeAccessValidationSchema,
  themeDatePicker,
} from './utils';

export default function ModalEditAuthorizeAccess({ authorizeUser, close }) {
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateText({ globalLanguage });

  // Variables
  const [isPending, setIsPending] = useState(false); // Important for modal loading
  const queryClient = useQueryClient();

  // Backend calls
  const { mutate: updateUserCourse } = useUpdateUserCourse({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['user-courses'],
      });
      toast.success(<p>{translations.courseAuthorizationEdited}</p>);
      close();
    },
    onError: (err) => {
      const errorMessage = buildUpdateUserCourseErrorMessage(err);

      toast.error(errorMessage);
      setIsPending(false);
    },
  });

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: zodResolver(modalUpdateAuthorizeAccessValidationSchema),
  });
  const onSubmit = ({ expiresAt }) => {
    updateUserCourse({
      _id: authorizeUser?._id,
      newUserCourseData: { expiresAt },
    });
    setIsPending(true);
    close();
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <ModalContent>
          <div>
            <Label>{translations.email}</Label>
            <EmailText>{authorizeUser?.user?.email}</EmailText>
          </div>

          <div>
            <Label>{translations.accessValidity}</Label>
            <AccessExpirationContainer>
              <ThemeProvider theme={themeDatePicker}>
                <Controller
                  control={control}
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
            <ErrorMessage>{errors.expiresAt?.message}</ErrorMessage>
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
              <p>{translations.save}</p>
            )}
          </ModalButton>
        </ModalContent>
      </Form>
    </Container>
  );
}

ModalEditAuthorizeAccess.propTypes = {
  close: PropTypes.func.isRequired,
  authorizeUser: PropTypes.object,
};

ModalEditAuthorizeAccess.defaultProps = {
  authorizeUser: {},
};
