import { useCallback, useEffect, useMemo, useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { City, Country, State } from 'country-state-city';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { TailSpin } from 'react-loader-spinner';
import { toast } from 'react-toastify';

import { useSendProductBudget } from '../../../hooks/query/products';
import { FormInput, FormMask, FormSelect } from '../../common';
import {
  ContactUs,
  Form,
  Section,
  Title,
  Subsection,
  SubmitButton,
  Container,
  ButtonDiv,
  AddressSelectDiv,
} from './Styles';
import { budgetEmailSchema, buildBudgetEmailErrorMessage } from './utils';

export default function FormsBudget({ productId, isLoadingProduct = false }) {
  // States and variables
  const countries = useMemo(() => Country.getAllCountries(), []);
  const [states, setStates] = useState(null);
  const [cities, setCities] = useState(null);

  // Reusable functions
  const selectFilter = useCallback(
    (input, option) =>
      option?.children?.toLowerCase()?.includes(input?.toLowerCase()),
    []
  );
  const formatSelectData = useCallback(
    ({ name, isoCode, countryCode }) => ({
      label: name,
      value: JSON.stringify({
        name,
        isoCode,
        ...(!!countryCode && { countryCode }), // If countryCode exists, put it in the JSON
      }),
    }),
    []
  );

  // Backend calls
  const { mutate: sendProductBudget, isLoading } = useSendProductBudget({
    onSuccess: () => toast.success('Pedido enviado com sucesso!'),
    onError: (err) => {
      const errorMessage = buildBudgetEmailErrorMessage(err);

      toast.error(errorMessage);
    },
  });

  // Form handlers
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(budgetEmailSchema),
  });
  const onSubmit = (formInput) => sendProductBudget({ productId, formInput });

  // Country, state and city selects handlers
  const selectedContry = watch('country');
  const selectedState = watch('state');

  useEffect(() => {
    setValue('state', '');
    setValue('city', '');

    if (selectedContry) {
      const countryIsoCode = JSON.parse(selectedContry).isoCode;

      setStates(State.getStatesOfCountry(countryIsoCode));
    } else {
      setStates(null);
    }
  }, [setValue, selectedContry]);

  useEffect(() => {
    setValue('city', '');

    if (selectedState) {
      const countryIsoCode = JSON.parse(selectedState).countryCode;
      const stateIsoCode = JSON.parse(selectedState).isoCode;

      setCities(City.getCitiesOfState(countryIsoCode, stateIsoCode));
    } else {
      setCities(null);
    }
  }, [setValue, selectedState]);

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
            <AddressSelectDiv>
              <FormSelect
                subtitle="País:"
                name="country"
                size="large"
                control={control}
                errors={errors}
                data={countries.map(formatSelectData)}
                isBudget
                showSearch
                filterOption={selectFilter}
              />
            </AddressSelectDiv>
            <Subsection>
              <AddressSelectDiv>
                <FormSelect
                  subtitle="Estado:"
                  name="state"
                  size="large"
                  control={control}
                  errors={errors}
                  data={states?.map(formatSelectData)}
                  isBudget
                  showSearch
                  filterOption={selectFilter}
                  disabled={!states}
                />
              </AddressSelectDiv>

              <AddressSelectDiv>
                <FormSelect
                  subtitle="Cidade:"
                  name="city"
                  size="large"
                  control={control}
                  errors={errors}
                  data={cities?.map(formatSelectData)}
                  isBudget
                  showSearch
                  filterOption={selectFilter}
                  disabled={!cities}
                />
              </AddressSelectDiv>
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
            <ButtonDiv>
              <TailSpin
                height="15"
                width="15"
                color="white"
                ariaLabel="tail-spin-loading"
                radius="5"
              />
              Carregando
            </ButtonDiv>
          ) : (
            'Enviar'
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
