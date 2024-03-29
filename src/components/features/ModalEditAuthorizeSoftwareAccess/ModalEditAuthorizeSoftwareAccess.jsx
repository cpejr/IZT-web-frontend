import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { ThemeProvider } from '@mui/material/styles';
import { useQueryClient } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import { Controller, useForm } from 'react-hook-form';
import { TailSpin } from 'react-loader-spinner';
import { toast } from 'react-toastify';

import { useUpdateSoftwareAccess } from '../../../hooks/query/users';
import { useGlobalLanguage } from '../../../stores/globalLanguage';
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
import { TranslateText } from './translations';
import {
  buildUpdateSoftwareAccessErrorMessage,
  modalUpdateAuthorizeAccessValidationSchema,
  themeDatePicker,
} from './utils';
import {
  buildUpdateSoftwareAccessErrorMessageDE,
  modalUpdateAuthorizeAccessValidationSchemaDE,
} from './utilsDE';
import {
  buildUpdateSoftwareAccessErrorMessageEN,
  modalUpdateAuthorizeAccessValidationSchemaEN,
} from './utilsEN';

export default function ModalEditAuthorizeSoftwareAccess({
  authorizeUser,
  close,
}) {
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateText({ globalLanguage });

  // Variables
  const [isPending, setIsPending] = useState(false); // Important for modal loading
  const queryClient = useQueryClient();

  // Backend calls
  const { mutate: updateSoftwareAccess } = useUpdateSoftwareAccess({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['users-with-software-access'],
      });
      toast.success(<p>{translations.softwareAuthorizationEdited}</p>);
      close();
    },
    onError: (err) => {
      if (globalLanguage === 'PT') {
        const errorMessage = buildUpdateSoftwareAccessErrorMessage(err);
        toast.error(errorMessage);
      } else if (globalLanguage === 'EN') {
        const errorMessage = buildUpdateSoftwareAccessErrorMessageEN(err);
        toast.error(errorMessage);
      } else {
        const errorMessage = buildUpdateSoftwareAccessErrorMessageDE(err);
        toast.error(errorMessage);
      }
      setIsPending(false);
    },
  });

  let validationSchema;

  if (globalLanguage === 'PT') {
    validationSchema = modalUpdateAuthorizeAccessValidationSchema;
  } else if (globalLanguage === 'EN') {
    validationSchema = modalUpdateAuthorizeAccessValidationSchemaEN;
  } else {
    validationSchema = modalUpdateAuthorizeAccessValidationSchemaDE;
  }

  // Form handlers
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: zodResolver(validationSchema),
  });
  const onSubmit = ({ softwareAccess }) => {
    updateSoftwareAccess({
      _id: authorizeUser?._id,
      softwareAccess,
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
            <EmailText>{authorizeUser.email}</EmailText>
          </div>

          <div>
            <Label>{translations.accessValidity}</Label>
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

ModalEditAuthorizeSoftwareAccess.propTypes = {
  close: PropTypes.func.isRequired,
  authorizeUser: PropTypes.object.isRequired,
};
