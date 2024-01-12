import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { ThemeProvider } from '@mui/material/styles';
import { useQueryClient } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import { Controller, useForm } from 'react-hook-form';
import { TailSpin } from 'react-loader-spinner';
import { toast } from 'react-toastify';

import {
  useGetUsers,
  useUpdateSoftwareAccess,
} from '../../../hooks/query/users';
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
  buildCreateUserSoftwareAccessErrorMessage,
  buildGetUsersErrorMessage,
  modalAuthorizeAccessValidationSchema,
  themeDatePicker,
  toastSuccessMessage,
} from './utils';
import {
  buildCreateUserSoftwareAccessErrorMessageDE,
  buildGetUsersErrorMessageDE,
  modalAuthorizeAccessValidationSchemaDE,
  toastSuccessMessageDE,
} from './utilsDE';
import {
  buildCreateUserSoftwareAccessErrorMessageEN,
  buildGetUsersErrorMessageEN,
  modalAuthorizeAccessValidationSchemaEN,
  toastSuccessMessageEN,
} from './utilsEN';

export default function ModalAuthorizeSoftwareAccess({ close, language }) {
  // Variables
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

  const { mutate: updateSoftwareAccess } = useUpdateSoftwareAccess({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['users-with-software-access'],
      });

      if (language === 'EN') toast.success(toastSuccessMessageEN);
      else if (language === 'DE') toast.success(toastSuccessMessageDE);
      else toast.success(toastSuccessMessage);
      close();
    },
    onError: (err) => {
      if (language === 'EN') {
        const errorMessage = buildCreateUserSoftwareAccessErrorMessageEN(err);
        toast.error(errorMessage);
      } else if (language === 'DE') {
        const errorMessage = buildCreateUserSoftwareAccessErrorMessageDE(err);
        toast.error(errorMessage);
      } else {
        const errorMessage = buildCreateUserSoftwareAccessErrorMessage(err);
        toast.error(errorMessage);
      }
      setIsPending(false);
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
  const onSubmit = ({ userId, softwareAccess }) => {
    updateSoftwareAccess({
      _id: userId,
      softwareAccess,
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
              data={users?.map(({ _id, email }) => ({
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
                  id="softwareAccess"
                  name="softwareAccess"
                  render={({ field: { onChange, onBlur } }) => (
                    <Date
                      onChange={onChange}
                      onBlur={onBlur}
                      format="DD/MM/YYYY"
                      disablePast
                      slotProps={{
                        textField: {
                          error: !!errors.softwareAccess,
                        },
                      }}
                      sx={{ fontSize: 16 }}
                    />
                  )}
                />
              </ThemeProvider>
            </AccessExpirationContainer>
            <ErrorMessage>{errors?.softwareAccess?.message}</ErrorMessage>
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

ModalAuthorizeSoftwareAccess.propTypes = {
  close: PropTypes.func.isRequired,
};
ModalAuthorizeSoftwareAccess.propTypes = {
  language: PropTypes.string.isRequired,
};
