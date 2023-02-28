import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  Container,
  Form,
  Section,
  Subsection,
  Title,
  SendButton,
  Information,
} from './Styles';
import { FormInput, FormMask } from '../../common';

const validationSchema = z.object({
  name: z.string().min(1, 'Favor digitar o seu nome completo'),

  company: z.string().min(1, 'Favor digitar o nome da empresa'),

  email: z
    .string()
    .min(1, { message: 'Favor digitar o email' })
    .email({
      message: 'Insira um email válido',
    })
    .trim(),

  telephone: z.string().min(1, 'Favor digitar o seu número do telefone'),

  country: z.string().min(1, 'Favor digitar nome do seu país'),

  state: z.string().min(1, 'Favor digitar o nome do seu estado'),

  city: z.string().min(1, 'Favor digitar o nome da sua cidade'),

  ZIPcode: z
    .string()
    .min(1, 'Favor digitar o seu CEP')
    .regex(/^[0-9]{5}(?:-[0-9]{4})?$/, 'Digite um CEP válido'),

  address: z.string().min(1, 'Favor digitar o seu seu endereço'),
});

function BudgetForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <Container>
      <Title>Requisite um Orçamento</Title>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Information>
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
              mask="(99) 99999-9999"
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
              />

              <FormInput
                label="Cidade:"
                name="city"
                placeholder="Belo Horizonte"
                errors={errors}
                register={register}
              />
            </Subsection>

            <FormInput
              label="CEP:"
              name="ZIPcode"
              placeholder="99999-999"
              errors={errors}
              register={register}
            />

            <FormInput
              label="Endereço:"
              name="address"
              placeholder="Av. Maranhão, 54"
              errors={errors}
              register={register}
            />
          </Section>
        </Information>
        <SendButton>Enviar</SendButton>
      </Form>
    </Container>
  );
}

export default BudgetForm;
