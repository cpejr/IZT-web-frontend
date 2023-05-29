import { zodResolver } from '@hookform/resolvers/zod';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
// import { TailSpin } from 'react-loader-spinner';
import { toast } from 'react-toastify';

import { useSendProductBudget } from '../../../hooks/query/products';
import { FormInput, FormMask } from '../../common';
import {
  ContactUs,
  Form,
  Section,
  Title,
  Subsection,
  SubmitButton,
  Container,
} from './Styles';
import { budgetEmailSchema, buildBudgetEmailErrorMessage } from './utils';

export default function FormsBudget({ productId, isLoadingProduct = false }) {
  const { mutate: sendProductBudget, isLoading } = useSendProductBudget({
    onError: (err) => {
      const errorMessage = buildBudgetEmailErrorMessage(err);

      toast.error(errorMessage);
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm({
    resolver: zodResolver(budgetEmailSchema),
  });
  const onSubmit = (formInput) => sendProductBudget({ productId, formInput });

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
              mask="+99 (99) 99999-9999"
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
            <FormMask
              label="CEP:"
              name="ZIPcode"
              placeholder="99999-999"
              defaultValue=""
              control={control}
              mask="99999-999"
              errors={errors}
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
        <SubmitButton type="submit" disabled={isLoading || isLoadingProduct}>
          {isLoading || isLoadingProduct ? (
            <>
              {/* <TailSpin
                height="15"
                width="15"
                color="white"
                ariaLabel="tail-spin-loading"
                radius="5"
                wrapperStyle={{}}
                wrapperClass=""
              /> */}
              Carregando
            </>
          ) : (
            <>Enviar</>
          )}
        </SubmitButton>
      </Form>
    </ContactUs>
  );
}

FormsBudget.defaultProps = {
  isLoadingProduct: false,
};

FormsBudget.propTypes = {
  productId: PropTypes.string.isRequired,
  isLoadingProduct: PropTypes.bool,
};