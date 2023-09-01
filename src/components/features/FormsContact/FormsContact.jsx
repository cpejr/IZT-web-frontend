import { zodResolver } from '@hookform/resolvers/zod';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { TailSpin } from 'react-loader-spinner';
import { useMediaQuery } from 'react-responsive';
import { toast } from 'react-toastify';

import { useSendFormContact } from '../../../hooks/query/contact';
import { FormInput, FormsTextArea, FormMask } from '../../common';
import {
  ContactUs,
  Form,
  Section,
  Title,
  Mensagem,
  SubmitButton,
  InputMessage,
} from './Styles';
import { buildFormContactErrorMessage, formsValidationSchema } from './utils';

export default function FormsContact({ language }) {
  const isSmallScreen = useMediaQuery({ maxWidth: 700 });

  const { mutate: sendFormContact, isLoading } = useSendFormContact({
    onSuccess: () =>
      toast.success('Formulário de contato enviado com sucesso!'),
    onError: (err) => {
      const errorMessage = buildFormContactErrorMessage(err);
      toast.error(errorMessage);
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm({
    resolver: zodResolver(formsValidationSchema),
  });
  const onSubmit = (formInput) => sendFormContact(formInput);

  let title;
  let smallTitle;
  let label1;
  let placeholder1;
  let label2;
  let placeholder2;
  let label3;
  let placeholder3;
  let label4;
  let placeholder4;
  let label5;
  let placeholder5;
  let buttonLabel;
  let loading;

  if (language === 'EN') {
    title = 'Contact Us';
    smallTitle = 'Get in Touch';

    label1 = 'Company:';
    placeholder1 = 'Company Name';

    label2 = 'Representative:';
    placeholder2 = 'Representative Name';

    label3 = 'Email:';
    placeholder3 = 'email@example.com';

    label4 = 'Phone:';
    placeholder4 = '(99) 99999-9999';

    label5 = 'Message:';
    placeholder5 = 'Write your message here';

    buttonLabel = 'Send';
    loading = 'Loading';
  } else if (language === 'PT') {
    title = 'Entre em Contato Conosco';
    smallTitle = 'Entre em Contato';

    label1 = 'Empresa:';
    placeholder1 = 'Nome da Empresa';

    label2 = 'Representante:';
    placeholder2 = 'Nome do Representante';

    label3 = 'E-mail:';
    placeholder3 = 'email@example.com';

    label4 = 'Telefone:';
    placeholder4 = '(99) 99999-9999';

    label5 = 'Mensagem:';
    placeholder5 = 'Escreva sua mensagem aqui';

    buttonLabel = 'Enviar';
    loading = 'Carregando';
  } else if (language === 'DE') {
    title = 'Kontaktieren Sie uns';
    smallTitle = 'Kommunikation';

    label1 = 'Firma:';
    placeholder1 = 'Firmenname';

    label2 = 'Vertreter:';
    placeholder2 = 'Vertretername';

    label3 = 'E-Mail:';
    placeholder3 = 'email@example.com';

    label4 = 'Telefon:';
    placeholder4 = '(99) 99999-9999';

    label5 = 'Nachricht:';
    placeholder5 = 'Schreiben Sie hier Ihre Nachricht';

    buttonLabel = 'Senden';
    loading = 'Wird geladen';
  }

  return (
    <ContactUs id="contact">
      <Title>{isSmallScreen ? smallTitle : title}</Title>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Section>
          <FormInput
            label={label1}
            name="company"
            placeholder={placeholder1}
            errors={errors}
            register={register}
          />

          <FormInput
            label={label2}
            name="representative"
            placeholder={placeholder2}
            errors={errors}
            register={register}
          />

          <FormInput
            label={label3}
            name="email"
            placeholder={placeholder3}
            errors={errors}
            register={register}
          />

          <FormMask
            label={label4}
            name="telephone"
            defaultValue=""
            control={control}
            placeholder={placeholder4}
            mask="+99 (99) 99999-9999"
            errors={errors}
          />
        </Section>

        <Section>
          <InputMessage>
            <Mensagem>
              <FormsTextArea
                name="message"
                label={label5}
                rows={11}
                placeholder={placeholder5}
                errors={errors}
                register={register}
              />
              <SubmitButton disabled={isLoading} type="submit">
                {isLoading ? (
                  <>
                    <TailSpin
                      height="15"
                      width="15"
                      color="white"
                      ariaLabel="tail-spin-loading"
                      radius="5"
                    />
                    <p>{loading}</p>
                  </>
                ) : (
                  <p> {buttonLabel}</p>
                )}
              </SubmitButton>
            </Mensagem>
          </InputMessage>
        </Section>
      </Form>
    </ContactUs>
  );
}

FormsContact.propTypes = {
  language: PropTypes.string.isRequired,
};
