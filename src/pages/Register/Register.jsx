import { useCallback, useEffect, useMemo, useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { City, Country, State } from 'country-state-city';
import { useForm } from 'react-hook-form';
import { TailSpin } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import IZTLogo from '../../assets/IZTLogo.svg';
import {
  FormSelect,
  RegisterInput,
  SubmitButton,
} from '../../components/common';
import { useCreateUser } from '../../hooks/query/users';
import { useGlobalLanguage } from '../../stores/globalLanguage';
import {
  Page,
  Container,
  Logo,
  Title,
  FormColumn,
  DataEntry,
  Form,
  Subtitle,
  Label,
  AddressSelect,
  ButtonDiv,
} from './Styles';
import { TranslateText } from './translations';
import { buildRegisterErrorMessage, registerValidationSchema } from './utils';
import {
  buildRegisterErrorMessageDE,
  registerValidationSchemaDE,
} from './utilsDE';
import {
  buildRegisterErrorMessageEN,
  registerValidationSchemaEN,
} from './utilsEN';

export default function Register() {
  // Translation
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateText({ globalLanguage });

  // States and variables
  const countries = useMemo(() => Country.getAllCountries(), []);
  const [states, setStates] = useState(null);
  const [cities, setCities] = useState(null);
  const navigate = useNavigate();

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
  const { mutate: createUser, isLoading } = useCreateUser({
    onSuccess: (user) => {
      navigate('/verificar-email', { state: user.email });
    },
    onError: (err) => {
      if (globalLanguage === 'DE') {
        const errorMessageDE = buildRegisterErrorMessageDE(err);

        toast.error(errorMessageDE);
      } else if (globalLanguage === 'EN') {
        const errorMessageEN = buildRegisterErrorMessageEN(err);

        toast.error(errorMessageEN);
      } else {
        const errorMessage = buildRegisterErrorMessage(err);

        toast.error(errorMessage);
      }
    },
  });

  // Form handlers
  let resolver;

  if (globalLanguage === 'DE') {
    resolver = zodResolver(registerValidationSchemaDE);
  } else if (globalLanguage === 'EN') {
    resolver = zodResolver(registerValidationSchemaEN);
  } else {
    resolver = zodResolver(registerValidationSchema);
  }
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    watch,
  } = useForm({ resolver });
  const onSubmit = (data) => createUser(data);

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
    <Page>
      <Container>
        <Logo
          src={IZTLogo}
          alt="Logo da IZT: Um I atravessando um Z dentro de um circulo"
        />
        <Title>{translations.registerCreate}</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <DataEntry>
            <FormColumn>
              <Subtitle>{translations.registerPersonalInfo}</Subtitle>
              <RegisterInput
                label={translations.registerCompany}
                name="company"
                placeholder={translations.phCompany}
                register={register}
                errors={errors}
                type="text"
              />
              <RegisterInput
                label={translations.registerName}
                name="name"
                placeholder={translations.phName}
                register={register}
                errors={errors}
                type="text"
              />
              <RegisterInput
                label={translations.registerLastName}
                name="surname"
                placeholder={translations.phLastName}
                register={register}
                errors={errors}
                type="text"
              />
              <RegisterInput
                label={translations.registerRole}
                name="role"
                placeholder={translations.phRole}
                register={register}
                errors={errors}
                type="text"
              />
            </FormColumn>
            <FormColumn>
              <Subtitle>{translations.registerAdress}</Subtitle>
              <AddressSelect>
                <Label>{translations.registerCoutry}</Label>
                <FormSelect
                  name="country"
                  size="large"
                  control={control}
                  errors={errors}
                  data={countries.map(formatSelectData)}
                  showSearch
                  isRegister
                  filterOption={selectFilter}
                />
              </AddressSelect>

              <AddressSelect>
                <Label>{translations.registerState}</Label>
                <FormSelect
                  name="state"
                  size="large"
                  control={control}
                  errors={errors}
                  data={states?.map(formatSelectData)}
                  showSearch
                  isRegister
                  filterOption={selectFilter}
                  disabled={!states}
                />
              </AddressSelect>

              <AddressSelect>
                <Label>{translations.registerCity}</Label>
                <FormSelect
                  name="city"
                  size="large"
                  control={control}
                  errors={errors}
                  data={cities?.map(formatSelectData)}
                  showSearch
                  isRegister
                  filterOption={selectFilter}
                  disabled={!cities}
                />
              </AddressSelect>

              <RegisterInput
                label={translations.registerStreet}
                name="address"
                placeholder={translations.phStreet}
                register={register}
                errors={errors}
                type="text"
              />
            </FormColumn>
            <FormColumn>
              <Subtitle>{translations.registerCredentials}</Subtitle>
              <RegisterInput
                label="E-mail: "
                name="email"
                placeholder="email@email.com"
                register={register}
                errors={errors}
                type="text"
              />
              <RegisterInput
                label={translations.registerPassword}
                name="password"
                placeholder="********"
                register={register}
                errors={errors}
                type="password"
              />
              <RegisterInput
                label={translations.registerConfirmPassword}
                name="confirmPassword"
                placeholder="********"
                register={register}
                errors={errors}
                type="password"
              />
            </FormColumn>
          </DataEntry>
          <ButtonDiv>
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
                  {translations.loading}
                </>
              ) : (
                translations.registerCreateAccount
              )}
            </SubmitButton>
          </ButtonDiv>
        </Form>
      </Container>
    </Page>
  );
}
