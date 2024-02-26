import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { TailSpin } from 'react-loader-spinner';
import { useMediaQuery } from 'react-responsive';
import { toast } from 'react-toastify';

import { useSendFormContact } from '../../../hooks/query/contact';
import { useGlobalLanguage } from '../../../stores/globalLanguage';
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
import { TranslateText } from './translations';
import { buildFormContactErrorMessage, formsValidationSchema } from './utils';
import {
  buildFormContactErrorMessageDE,
  formsValidationSchemaDE,
} from './utilsDE';
import {
  buildFormContactErrorMessageEN,
  formsValidationSchemaEN,
} from './utilsEN';

export default function FormsContact() {
  // Translation
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateText({ globalLanguage });

  let validationSchema;

  if (globalLanguage === 'DE') {
    validationSchema = formsValidationSchemaDE;
  } else if (globalLanguage === 'PT') {
    validationSchema = formsValidationSchema;
  } else {
    validationSchema = formsValidationSchemaEN;
  }
  let phoneMask = '+99 (99) 99999-9999';
  if (globalLanguage === 'DE') phoneMask = '+99 999 999999';
  else if (globalLanguage === 'EN') phoneMask = '+9 (999) 999-9999';

  const isSmallScreen = useMediaQuery({ maxWidth: 700 });

  const { mutate: sendFormContact, isLoading } = useSendFormContact({
    onSuccess: () => toast.success(translations.successToast),

    onError: (err) => {
      if (globalLanguage === 'DE') {
        const errorMessage = buildFormContactErrorMessageDE(err);
        toast.error(errorMessage);
      } else if (globalLanguage === 'PT') {
        const errorMessage = buildFormContactErrorMessage(err);
        toast.error(errorMessage);
      } else {
        const errorMessage = buildFormContactErrorMessageEN(err);
        toast.error(errorMessage);
      }
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm({
    resolver: zodResolver(validationSchema),
  });
  const onSubmit = (formInput) => sendFormContact(formInput);

  return (
    <ContactUs id="contact">
      <Title>
        {isSmallScreen ? translations.smallTitle : translations.title}
      </Title>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Section>
          <FormInput
            label={translations.label1}
            name="company"
            placeholder={translations.placeholder1}
            errors={errors}
            register={register}
          />

          <FormInput
            label={translations.label2}
            name="representative"
            placeholder={translations.placeholder2}
            errors={errors}
            register={register}
          />

          <FormInput
            label={translations.label3}
            name="email"
            placeholder={translations.placeholder3}
            errors={errors}
            register={register}
          />

          <FormMask
            label={translations.label4}
            name="telephone"
            defaultValue=""
            control={control}
            placeholder={translations.placeholder4}
            mask={phoneMask}
            errors={errors}
          />
        </Section>

        <Section>
          <InputMessage>
            <Mensagem>
              <FormsTextArea
                name="message"
                label={translations.label5}
                rows={11}
                placeholder={translations.placeholder5}
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
                    <p>{translations.loading}</p>
                  </>
                ) : (
                  <p> {translations.buttonLabel}</p>
                )}
              </SubmitButton>
            </Mensagem>
          </InputMessage>
        </Section>
      </Form>
    </ContactUs>
  );
}
