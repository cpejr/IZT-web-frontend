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
import {
  authorizeAccessValidationSchema,
  themeDatePicker,
  buildCreateUserSoftwareAccessErrorMessage,
} from './utils';

export default function SoftwareAuthorizationMobile() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const queryClient = useQueryClient();
  const isSmallScreen = useMediaQuery({ maxWidth: 700 });

  // Backend calls
  const { data: users } = useGetUsers({
    onError: (err) => {
      const errorMessage = buildCreateUserSoftwareAccessErrorMessage(err);

      toast.error(errorMessage);
    },
  });
  const { mutate: updateSoftwareAccess } = useUpdateSoftwareAccess({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['users-with-software-access'],
      });

      toast.success('Autorização ao software concedida com sucesso!');
      close();
    },
    onError: (err) => {
      const errorMessage = buildCreateUserSoftwareAccessErrorMessage(err);

      toast.error(errorMessage);
      setIsPending(false);
    },
  });

  // Form handlers
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(authorizeAccessValidationSchema),
  });
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
        <Title>Autorizar Acesso</Title>

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
            placeholder="Selecione o email"
            filterOption={(input, option) =>
              option?.children?.toLowerCase()?.includes(input?.toLowerCase())
            }
            showSearch
            style={{ width: '400px' }}
            size="large"
          />
        </div>
        <div>
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
                <p>Carregando</p>
              </>
            ) : (
              <p>+ Autorizar</p>
            )}
          </SaveButton>

          <CancelButton to="/administrador/liberacao-software">
            <p>Cancelar</p>
          </CancelButton>
        </ButtonsDiv>
      </Form>
    </Container>
  );
}
