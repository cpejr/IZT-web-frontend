import { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { FormInput, FormMask } from '../../common';
import {
  ContactUs,
  Form,
  Section,
  Title,
  Subsection,
  BotaoEnviar,
  Container,
} from './Styles';
import { FormInput, FormMask } from '../../common';
import { useSendProductBudget } from '../../../hooks/query/products';
import { ERROR_CODES } from '../../../utils/constants';

const validationSchema = z.object({
  name: z.string().min(1, 'Digite o seu nome completo'),
  company: z.string().min(1, 'Digite o nome da empresa'),
  email: z
    .string()
    .min(1, { message: 'Digite o email' })
    .email({
      message: 'Insira um email válido',
    })
    .trim(),
  telephone: z
    .string()
    .min(1, 'Digite o seu número do telefone')
    .transform((value) => value.replace(/[\s()-]*/g, '')), // Taking off mask chars
  country: z.string().min(1, 'Digite nome do seu país'),
  state: z.string().min(1, 'Digite o estado'),
  city: z.string().min(1, 'Digite a cidade'),
  ZIPcode: z
    .string()
    .min(1, 'Digite o seu CEP')
    .length(9, 'Digite um CEP válido')
    .transform((value) => value.replace(/-/g, '')), // Taking off mask chars,
  address: z.string().min(1, 'Digite o seu seu endereço'),
});

const errorMessages = {
  [ERROR_CODES.NOT_FOUND]: 'Produto não encontrado',
};
const defaultErrorMessage =
  'Erro ao solicitar os dados do produto. Tente novamente mais tarde';

export default function BudgetForm({ productId }) {
  const [submitErrorMessage, setSubmitErrorMessage] = useState('');

  const onError = (error) => {
    const code = error.response.status;
    const message = errorMessages[code] || defaultErrorMessage;

    setSubmitErrorMessage(message);
  };
  const { mutate: sendProductBudget, isLoading } = useSendProductBudget({
    onError,
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm({
    resolver: zodResolver(validationSchema),
  });
  const onSubmit = (formInput) => sendProductBudget({ productId, formInput });
  if (isLoading) return <p style={{ height: '100vh' }}>Loading...</p>;
  if (submitErrorMessage) return <p>{submitErrorMessage}</p>;

  return (
    <ContactUs>
      <Title>Requisite um orçamento</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <Section>
            <FormInput
              label="Nome:"
              name="name"
              placeholder="Nome completo"
              errors={errors}
              register={register}
            />
            <FormInput
              label="Empresa:"
              name="company"
              placeholder="Nome da empresa"
              errors={errors}
              register={register}
            />
            <FormInput
              label="E-mail:"
              name="email"
              placeholder="email@email.com"
              errors={errors}
              register={register}
            />
            <FormMask
              label="Telefone:"
              name="telephone"
              defaultValue=""
              control={control}
              placeholder="(99) 99999-9999"
              mask="+99 (99) 99999-9999"
              errors={errors}
            />
          </Section>

          <Section>
            <FormInput
              label="País:"
              name="country"
              placeholder="Brasil"
              errors={errors}
              register={register}
            />
            <Subsection>
              <FormInput
                label="Estado:"
                name="state"
                placeholder="Minas Gerais"
                errors={errors}
                register={register}
                width="50%"
              />

              <FormInput
                label="Cidade:"
                name="city"
                placeholder="Belo Horizonte"
                errors={errors}
                register={register}
                width="50%"
              />
            </Subsection>
            <FormMask
              label="CEP:"
              name="ZIPcode"
              placeholder="99999-999"
              defaultValue=""
              control={control}
              mask="99999-999"
              errors={errors}
            />
            <FormInput
              label="Endereço:"
              name="address"
              placeholder="Av. Maranhão, 54"
              errors={errors}
              register={register}
            />
          </Section>
        </Container>
        <BotaoEnviar>Enviar</BotaoEnviar>
      </Form>
    </ContactUs>
  );
}

BudgetForm.propTypes = {
  productId: PropTypes.string.isRequired,
};
