import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import {
  Container,
  Form,
  Label,
  Input,
  ModalContent,
  ModalButton,
} from './Styles';
import {
  // buildModalAuthorizeAccessErrorMessage,
  modalAuthorizeAccessValidationSchema,
} from './utils';

export default function ModalAuthorizeAccess({ close }) {
  const [isPending, setIsPending] = useState(false); // Important for modal loading

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
          <Label>Email:</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Digite aqui o seu email"
            errors={errors}
            register={register}
          />
          {errors?.email?.message && <p>{errors?.email?.message}</p>}
          <Label>Validade do acesso:</Label>
          <Input
            id="accessExpiration"
            name="accessExpiration"
            type="accessExpiration"
            placeholder="DD/MM/YYYY"
            control={control}
            errors={errors}
            register={register}
          />
          {errors?.accessExpiration?.message && (
            <p>{errors?.accessExpiration?.message}</p>
          )}
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
