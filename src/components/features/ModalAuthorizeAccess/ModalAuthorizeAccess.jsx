import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import {
  Container,
  Form,
  Label,
  AccessExpirationContainer,
  Input,
  Picture,
  ModalContent,
  ModalButton,
  ErrorMessage,
} from './Styles';
import { modalAuthorizeAccessValidationSchema } from './utils';
import Calendar from '../../../assets/administratorPage/calendarIcon.png';

export default function ModalAuthorizeAccess({ close }) {
  const [isPending, setIsPending] = useState(false); // Important for modal loading
  const queryClient = useQueryClient();

  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm({
    resolver: zodResolver(modalAuthorizeAccessValidationSchema),
  });

  const onSubmit = (authorizedUser) => {
    setIsPending(true);
    console.log(authorizedUser);
    close();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <ModalContent>
          <div>
            <Label>Email:</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Digite aqui o seu email"
              {...register('email')}
            />
            {errors?.email?.message && (
              <ErrorMessage>{errors?.email?.message}</ErrorMessage>
            )}
          </div>

          <div>
            <Label>Validade do acesso:</Label>
            <AccessExpirationContainer>
              <Input
                id="accessExpiration"
                name="accessExpiration"
                type="accessExpiration"
                placeholder="DD/MM/YYYY"
                control={control}
                errors={errors}
                register={register}
              />
              <button>
                <Picture src={Calendar} alt="calendarIcon" />
              </button>
            </AccessExpirationContainer>
            {errors?.accessExpiration?.message && (
              <ErrorMessage>
                {errors?.accessExErrorMessageiration?.message}
              </ErrorMessage>
            )}
          </div>

          <ModalButton disabled={isPending} type="submit">
            <p>{isPending ? 'Carregando...' : '+ Autorizar'}</p>
          </ModalButton>
        </ModalContent>
      </Form>
    </Container>
  );
}

ModalAuthorizeAccess.propTypes = {
  close: PropTypes.func.isRequired,
};
