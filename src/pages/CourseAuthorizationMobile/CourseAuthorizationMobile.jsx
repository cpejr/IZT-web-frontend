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
  buildCreateUserCourseErrorMessage,
  buildGetUsersErrorMessage,
} from './utils';

export default function CourseAuthorizationMobile() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const queryClient = useQueryClient();
  const isSmallScreen = useMediaQuery({ maxWidth: 700 });

  // Backend calls
  const { data: users } = useGetUsers({
    onError: (err) => {
      const errorMessage = buildGetUsersErrorMessage(err);

      toast.error(errorMessage);
    },
  });
  const { mutate: createUserCourse } = useCreateUserCourse({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['user-courses'],
      });

      toast.success('Autorização ao curso concedida com sucesso!');
    },
    onError: (err) => {
      const errorMessage = buildCreateUserCourseErrorMessage(err);

      toast.error(errorMessage);
      setIsLoading(false);
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
  const onSubmit = ({ userId, expiresAt }) => {
    createUserCourse({
      user: userId,
      expiresAt,
      course: '645548677d3184e5b411a08f',
    });
    setIsLoading(true);
    navigate('/administrador/liberacao-cursos');
  };

  if (!isSmallScreen) return <Navigate to="/administrador/liberacao-cursos" />;

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
            style={{ width: '100%' }}
            size="large"
          />
        </div>
        <div>
          <Label>Validade do acesso:</Label>
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
                <p>Carregando</p>
              </>
            ) : (
              <p>+ Autorizar</p>
            )}
          </SaveButton>

          <CancelButton to="/administrador/liberacao-cursos">
            <p>Cancelar</p>
          </CancelButton>
        </ButtonsDiv>
      </Form>
    </Container>
  );
}
