import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { FiSave } from 'react-icons/fi';
import { Navigate } from 'react-router-dom';

import { RegisterInput } from '../../components/common';
import useWindowSize from '../../hooks/useWindowSize';
import {
  Container,
  Form,
  Title,
  ButtonsDiv,
  SaveButton,
  CancelButton,
} from './Styles';
import { authorizeAccessValidationSchema } from './utils';
import { useState } from 'react';

export default function AuthorizeAccess() {
  const queryClient = useQueryClient();

  const [isLoading, setIsLoading] = useState(false); // Important for modal loading

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(authorizeAccessValidationSchema),
  });

  const onSubmit = (authorizedUser) => {
    setIsLoading(true);
    console.log(authorizedUser);
  };

  const { width: windowWidth } = useWindowSize();
  const mobileBreakpoint = 700;

  if (windowWidth > mobileBreakpoint)
    return <Navigate to="/administrador/loja/liberacao-cursos" />;
  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>Autorizar Acesso</Title>

        <RegisterInput
          label="Email:"
          labelStyle={{ fontSize: '1.5em' }}
          errorStyle={{ fontSize: '1em' }}
          name="email"
          register={register}
          errors={errors}
        />

        <ButtonsDiv>
          <SaveButton disabled={isLoading} type="submit">
            <FiSave size={20} />
            <p>{isLoading ? 'Carregando...' : '+ Autorizar'}</p>
          </SaveButton>

          <CancelButton to="/administrador/loja/liberacao-cursos">
            <p>Cancelar</p>
          </CancelButton>
        </ButtonsDiv>
      </Form>
    </Container>
  );
}
