import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  ContactUs,
  Form,
  Section,
  Title,
  Mensagem,
  BotaoEnviar,
  InputMessage,
} from './Styles';
import { FormInput, FormMask } from '../../common';

const validationSchema = z.object({
  body: z.object({
    name: z
      .string({ required_error: 'Name is required' })
      .max(40, { message: 'Name must be a maximum of 40 characters' })
      .min(3, { message: 'Name must be atleast 3 characters' }),

    company: z
      .string({ required_error: 'Company name is required' })
      .max(40, { message: 'Name must be a maximum of 40 characters' })
      .min(3, { message: 'Name must be atleast 3 characters' }),

    email: z
      .string({ required_error: 'Email is required' })
      .email('Must be a valid email'),

    telephone: z
      .string({ required_error: 'Telephone is required' })
      .max(15, { message: 'Telephone must be a maximum of 15 characters' })
      .regex(/^\+(?:[0-9] ?){6,14}[0-9]$/, 'Telephone bad formatted'),

    country: z
      .string({ required_error: 'Country is required' })
      .max(30, { message: 'Country must be a maximum of 30 characters' })
      .min(4, { message: 'Country must be atleast 4 characters' }),

    state: z
      .string({ required_error: 'State is required' })
      .max(30, { message: 'State must be a maximum of 30 characters' })
      .min(4, { message: 'State must be atleast 4 characters' }),

    city: z
      .string({ required_error: 'City is required' })
      .max(30, { message: 'City must be a maximum of 30 characters' })
      .min(4, { message: 'City must be atleast 4 characters' }),

    ZIPcode: z
      .string({ required_error: 'ZIPcode is required' })
      .max(8, { message: 'ZIPcode must be a maximum of 8 characters' })
      .min(5, { message: 'ZIPcode must be atleast 5 characters' })
      .regex(/^[0-9]{5}(?:-[0-9]{4})?$/, 'Zip code bad formatted'),

    address: z
      .string({ required_error: 'Adress is required' })
      .max(50, { message: 'Adress must be a maximum of 50 characters' })
      .min(5, { message: 'Adress must be atleast 5 characters' }),
  }),

  params: z.object({
    id: z.string({ required_error: 'Product ID is required' }),
  }),
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

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleWindowResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  const breakpoint = 700;

  const onSubmit = (data) => console.log(data);

  return (
    <ContactUs>
      <Title>Requisite um Orçamento</Title>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Section>
          <FormInput
            label="Name:"
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

          {/* PAÍS */}
          <FormMask
            label="Pais:"
            name="country"
            defaultValue=""
            control={control}
            placeholder="Brasil"
            errors={errors}
          />

          {/* ESTADO */}
          <FormMask
            label="Estado:"
            name="state"
            defaultValue=""
            control={control}
            placeholder="Minas Gerais"
            errors={errors}
          />

          {/* CIDADE */}
          <FormMask
            label="Cidade:"
            name="city"
            defaultValue=""
            control={control}
            placeholder="Belo Horizonte"
            errors={errors}
          />

          {/* CEP */}
          <FormMask
            label="CEP:"
            name="ZIPcode"
            defaultValue=""
            control={control}
            placeholder="99999-999"
            errors={errors}
          />

          {/* Endereço */}
          <FormMask
            label="Endereco:"
            name="address"
            defaultValue=""
            control={control}
            placeholder="Av. Maranhão, 54"
            errors={errors}
          />
        </Section>

        <Section>
          <InputMessage>
            <Mensagem>
              Mensagem:
              <textarea rows={17} />
              <BotaoEnviar>Enviar</BotaoEnviar>
            </Mensagem>
          </InputMessage>
        </Section>
      </Form>
    </ContactUs>
  );
}

export default BudgetForm;
