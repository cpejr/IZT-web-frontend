import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
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
import { useCreateBudgetEmail } from '../../../hooks/query/formBudget';
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
  telephone: z.string().min(1, 'Digite o seu número do telefone'),
  country: z.string().min(1, 'Digite nome do seu país'),
  state: z.string().min(1, 'Digite o estado'),
  city: z.string().min(1, 'Digite a cidade'),
  ZIPcode: z
    .string()
    .min(1, 'Digite o seu CEP')
    .regex(/^[0-9]{5}(?:-[0-9]{4})?$/, 'Digite um CEP válido'),
  address: z.string().min(1, 'Digite o seu seu endereço'),
});

export default function BudgetForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm({
    resolver: zodResolver(validationSchema),
  });
  const onError = (error) => {
    switch (error.response.status) {
      case ERROR_CODES.BAD_REQUEST:
        throw new Error('Não foi possível enviar o formulário');
      default:
        throw new Error('Erro desconhecido');
    }
  };

  const { mutate: createBudgetEmail, Loading } = useCreateBudgetEmail(onError);

  const onSubmit = async (data) => createBudgetEmail(data);

  if (Loading) return <p style={{ height: '100vh' }}>Loading...</p>;

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
        </Container>
        <BotaoEnviar>Enviar</BotaoEnviar>
      </Form>
    </ContactUs>
  );
}
