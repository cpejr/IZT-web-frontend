import FormInput from '../../common/FormInput/FormIpunt';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  ContactUs,
  Form,
  Section,
  Title,
  Mensagem,
  BotaoEnviar,
  InputMessage,
} from './Styles';
import { useEffect, useState } from 'react';

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

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleWindowResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  const breakpoint = 700;

  return (
    <ContactUs>
      <Title>{`Entre em Contato ${
        windowWidth <= breakpoint ? '' : 'Conosco'
      }`}</Title>
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

export default FormsContactUs;
