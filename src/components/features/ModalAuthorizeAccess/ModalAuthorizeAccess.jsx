import { zodResolver } from '@hookform/resolvers/zod';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
  Container,
  Form,
  Label,
  Input,
  ModalContent,
  ModalButton,
} from './Styles';

export default function ModalAuthorizeAccess({ close }) {
  const dateRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
  const validationSchema = z.object({
    email: z
      .string()
      .min(1, { message: 'Favor digitar o email' })
      .email({
        message: 'Insira um email válido',
      })
      .trim(),

    accessExpiration: z
      .date()
      .refine((val) => dateRegex.test(val), {
        message: 'Data inválida. O formato deve ser DD/MM/YY',
      })
      .transform((val) => {
        // eslint-disable-next-line no-unused-vars
        const [_, day, month, year] = val.match(dateRegex);
        return new Date(`${year}-${month}-${day}`);
      }),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = (authorizedUser) => {
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
          <ModalButton type="submit">
            <p>+ Autorizar</p>
          </ModalButton>
        </ModalContent>
      </Form>
    </Container>
  );
}

ModalAuthorizeAccess.propTypes = {
  close: PropTypes.func.isRequired,
};
