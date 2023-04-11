import { TailSpin } from 'react-loader-spinner';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMediaQuery } from 'react-responsive';

import { FormInput, FormMask } from '../../common';
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
import { formsValidationSchema } from './utils';

export default function FormsContact() {
  const isSmallScreen = useMediaQuery({ maxWidth: 700 });

  const [isLoading, setIsLoading] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm({
    resolver: zodResolver(formsValidationSchema),
  });
  const onSubmit = (data) => console.log(data);

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
            mask="(99) 99999-9999"
            errors={errors}
          />
        </Section>

        <Section>
          <InputMessage>
            <Mensagem>
              Mensagem:
              <AreaText rows={13} placeholder="Escreva aqui sua mensagem" />
              <BotaoEnviar
                isLoading={isLoading}
                disabled={isLoading}
                type="submit"
                name="Enviar"
              >
                {isLoading ? (
                  <>
                    <TailSpin
                      height="15"
                      width="15"
                      color="white"
                      ariaLabel="tail-spin-loading"
                      radius="5"
                      wrapperStyle={{}}
                      wrapperClass=""
                    />
                    Carregando
                  </>
                ) : (
                  <>Enviar</>
                )}
              </BotaoEnviar>
            </Mensagem>
          </InputMessage>
        </Section>
      </Form>
    </ContactUs>
  );
}
