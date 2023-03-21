import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';
import {
  ContactUs,
  Form,
  Section,
  Title,
  Mensagem,
  BotaoEnviar,
  InputMessage,
  AreaText,
} from './Styles';
import useWindowSize from '../../../hooks/useWindowSize';
import { AddToast, FormInput, FormMask } from '../../common';
import { ERROR_CODES } from '../../../utils/constants';
import { useSendFormContact } from '../../../hooks/query/contact';

const validationSchema = z.object({
  company: z.string().min(1, 'Favor digitar o nome da empresa'),
  representative: z.string().min(1, 'Favor digitar o nome do representante'),
  email: z
    .string()
    .min(1, { message: 'Favor digitar o email' })
    .email({
      message: 'Insira um email válido',
    })
    .trim(),
  telephone: z
    .string()
    .min(1, 'Favor digitar o número do telefone')
    .transform((value) => value.replace(/[\s()-]*/g, '')), // Taking off mask chars
  message: z
    .string({ required_error: 'Favor inserir uma mensagem' })
    .max(1500, {
      message: 'A mensagem deve conter até no máximo 1500 caracteres',
    })
    .min(5, { message: 'A mensagem deve conter no mínimo 5 caracteres' }),
});

const errorMessages = {
  [ERROR_CODES.BAD_REQUEST]: 'Dados inválidos',
};
const defaultErrorMessage =
  'Erro ao solicitar contato. Tente novamente mais tarde';

export default function FormsContact() {
  const onError = (error) => {
    const code = error.response.status;
    const message = errorMessages[code] || defaultErrorMessage;

    toast.error(message);
  };

  const onSuccess = () => {
    toast.success('Formulário de contao enviado com sucesso!');
  };

  const { mutate: sendFormContact, isLoading } = useSendFormContact({
    onSuccess,
    onError,
  });

  const {
    handleSubmit,
    watch,
    register,
    formState: { errors },
    control,
  } = useForm({
    resolver: zodResolver(validationSchema),
  });
  const mobileBreakpoint = 700;
  const { width: windowWidth } = useWindowSize();

  const onSubmit = (formInput) => {
    sendFormContact(formInput);
    console.log(formInput);
  };
  if (isLoading) return <p style={{ height: '100vh' }}>Loading...</p>;
  console.log(watch());
  console.log(errors);
  return (
    <ContactUs>
      <Title>{`Entre em Contato ${
        windowWidth <= mobileBreakpoint ? '' : 'Conosco'
      }`}</Title>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Section>
          <FormInput
            label="Empresa:"
            name="company"
            placeholder="Nome da empresa"
            errors={errors}
            register={register}
          />

          <FormInput
            label="Representante:"
            name="representative"
            placeholder="Nome do representante"
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
          <InputMessage>
            <Mensagem>
              Mensagem:
              <AreaText
                rows={13}
                placeholder="Escreva aqui sua mensagem"
                {...register('message')}
              />
              <BotaoEnviar>Enviar</BotaoEnviar>
            </Mensagem>
          </InputMessage>
        </Section>
      </Form>
      <AddToast />
    </ContactUs>
  );
}
