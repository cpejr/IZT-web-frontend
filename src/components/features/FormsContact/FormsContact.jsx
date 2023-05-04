import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { TailSpin } from 'react-loader-spinner';
import { useMediaQuery } from 'react-responsive';
import { toast } from 'react-toastify';

import { useSendFormContact } from '../../../hooks/query/contact';
import { FormInput, FormMask } from '../../common';
import {
  ContactUs,
  Form,
  Section,
  Title,
  Mensagem,
  SubmitButton,
  InputMessage,
  AreaText,
} from './Styles';
import { buildFormContactErrorMessage, formsValidationSchema } from './utils';

export default function FormsContact() {
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

  return (
    <ContactUs>
      <Title>{`Entre em Contato ${isSmallScreen ? '' : 'Conosco'}`}</Title>

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
              {errors?.message?.message && <p>{errors?.message?.message}</p>}
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
                    Carregando
                  </>
                ) : (
                  'Enviar'
                )}
              </SubmitButton>
            </Mensagem>
          </InputMessage>
        </Section>
      </Form>
    </ContactUs>
  );
}
