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
  AreaText,
} from './Styles';
import { FormInput, FormMask } from '../../common';

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

  telephone: z.string().min(1, 'Favor digitar o número do telefone'),

  message: z
    .string({ required_error: 'Favor inserir uma mensagem' })
    .max(1500, {
      message: 'A mensagem deve conter até no máximo 1500 caracteres',
    })
    .min(5, { message: 'A mensagem deve conter no mínimo 5 caracteres' }),
});

function FormsContactUs() {
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
      <Title>{`Entre em Contato ${
        windowWidth <= breakpoint ? '' : 'Conosco'
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
            mask="(99) 99999-9999"
            errors={errors}
          />
        </Section>

        <Section>
          <InputMessage>
            <Mensagem>
              Mensagem:
              <AreaText rows={13} placeholder="Escreva aqui sua mensagem" />
              <BotaoEnviar>Enviar</BotaoEnviar>
            </Mensagem>
          </InputMessage>
        </Section>
      </Form>
    </ContactUs>
  );
}

export default FormsContactUs;
