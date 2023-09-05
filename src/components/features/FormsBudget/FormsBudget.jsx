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
import { TranslateText } from './translations';
import { budgetEmailSchema, buildBudgetEmailErrorMessage } from './utils';

export default function FormsBudget({
  currentLanguage,
  productId,
  isLoadingProduct = false,
}) {
  // States and variables
  const countries = useMemo(() => Country.getAllCountries(), []);
  const [states, setStates] = useState(null);
  const [cities, setCities] = useState(null);

  const translations = TranslateText({ currentLanguage });

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
      <Title>{translations.title}</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <Section>
            <FormInput
              label={translations.label1}
              name="name"
              placeholder={translations.placeholder1}
              errors={errors}
              register={register}
            />
            <FormInput
              label={translations.label2}
              name="company"
              placeholder={translations.placeholder2}
              errors={errors}
              register={register}
            />
            <FormInput
              label={translations.label3}
              name="email"
              placeholder={translations.label3}
              errors={errors}
              register={register}
            />
            <FormMask
              label={translations.label4}
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
                subtitle={translations.label5}
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
                  subtitle={translations.label6}
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
                  subtitle={translations.label7}
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
              label={translations.label8}
              name="ZIPcode"
              placeholder="99999-999"
              defaultValue=""
              control={control}
              mask="99999-999"
              errors={errors}
            />
            <FormInput
              label={translations.label9}
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
              {translations.loading}
            </ButtonDiv>
          ) : (
            <p>{translations.label10}</p>
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
  currentLanguage: PropTypes.string.isRequired,
};
