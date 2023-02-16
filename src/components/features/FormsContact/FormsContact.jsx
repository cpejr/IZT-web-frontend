import FormInput from '../../common/FormInput/FormIpunt';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  ContactUs,
  Form,
  Section,
  Title,
  Empresa,
  Representante,
  Email,
  Telefone,
  Mensagem,
  BotaoEnviar,
} from './Styles';

// name,
// label,
// placeholder,
// errors,
// register,

function FormsContactUs() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  return (
    <ContactUs>
      <Title>Entre em Contato Conosco</Title>
      <Form>
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
            name="company"
            placeholder="Nome do representante empresa"
            errors={errors}
            register={register}
          />
          <FormInput
            label="E-mail:"
            name="company"
            placeholder="email@email.com"
            errors={errors}
            register={register}
          />
          <FormInput
            label="Telefone:"
            name="company"
            placeholder="(XX) 9XXXX-XXXX"
            errors={errors}
            register={register}
          />
        </Section>

        <Section>
          <Mensagem>
            Mensagem:
            <textarea rows={15} />
            <BotaoEnviar>Enviar</BotaoEnviar>
          </Mensagem>
        </Section>
      </Form>
    </ContactUs>
  );
}

export default FormsContactUs;
