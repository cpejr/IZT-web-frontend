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
import { useGetUsers, useUpdateSoftwareAccess } from '../../hooks/query/users';
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
  buildCreateUserSoftwareAccessErrorMessage,
  toastSuccessMessage,
} from './utils';
import {
  authorizeAccessValidationSchemaDE,
  buildCreateUserSoftwareAccessErrorMessageDE,
  toastSuccessMessageDE,
} from './utilsDE';
import {
  authorizeAccessValidationSchemaEN,
  buildCreateUserSoftwareAccessErrorMessageEN,
  toastSuccessMessageEN,
} from './utilsEN';

export default function SoftwareAuthorizationMobile() {
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
        const errorMessage = buildCreateUserSoftwareAccessErrorMessageEN(err);
        toast.error(errorMessage);
      } else if (globalLanguage === 'DE') {
        const errorMessage = buildCreateUserSoftwareAccessErrorMessageDE(err);
        toast.error(errorMessage);
      } else {
        const errorMessage = buildCreateUserSoftwareAccessErrorMessage(err);
        toast.error(errorMessage);
      }
    },
  });
  const { mutate: updateSoftwareAccess } = useUpdateSoftwareAccess({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['users-with-software-access'],
      });
      if (globalLanguage === 'EN') toast.success(toastSuccessMessageEN);
      else if (globalLanguage === 'DE') toast.success(toastSuccessMessageDE);
      else toast.success(toastSuccessMessage);
    },
    onError: (err) => {
      if (globalLanguage === 'EN') {
        const errorMessage = buildCreateUserSoftwareAccessErrorMessageEN(err);
        toast.error(errorMessage);
      } else if (globalLanguage === 'DE') {
        const errorMessage = buildCreateUserSoftwareAccessErrorMessageDE(err);
        toast.error(errorMessage);
      } else {
        const errorMessage = buildCreateUserSoftwareAccessErrorMessage(err);
        toast.error(errorMessage);
      }
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
  const onSubmit = ({ userId, softwareAccess }) => {
    updateSoftwareAccess({
      _id: userId,
      softwareAccess,
    });
    setIsLoading(true);
    navigate('/administrador/liberacao-software');
  };

  if (!isSmallScreen)
    return <Navigate to="/administrador/liberacao-software" />;

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>{translations.pageTitle}</Title>

        <div>
          <Label>{translations.emailLabel}</Label>
          <FormSelect
            id="userId"
            name="userId"
            control={control}
            errors={errors}
            data={users?.map(({ _id, email }) => ({
              label: email,
              value: _id,
            }))}
            placeholder={translations.searchPlaceholder}
            filterOption={(input, option) =>
              option?.children?.toLowerCase()?.includes(input?.toLowerCase())
            }
            showSearch
            style={{ width: '400px' }}
            size="large"
          />
        </div>
        <div>
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
          <ErrorMessage>{errors?.softwareAccess?.message}</ErrorMessage>
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
              <p>{translations.authorizeButton}</p>
            )}
          </SaveButton>

          <CancelButton to="/administrador/liberacao-software">
            <p>{translations.cancelButton}</p>
          </CancelButton>
        </ButtonsDiv>
      </Form>
    </Container>
  );
}
