import { useCallback, useEffect, useMemo, useState } from 'react';

import { SaveOutlined } from '@ant-design/icons';
import { zodResolver } from '@hookform/resolvers/zod';
import { City, Country, State } from 'country-state-city';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { TailSpin } from 'react-loader-spinner';
import { toast } from 'react-toastify';

import { useUpdateUser } from '../../../hooks/query/users';
import useAuthStore from '../../../stores/auth';
import { FormSelect, RegisterInput } from '../../common';
import {
  Container,
  Form,
  DataEntry,
  FormColumn,
  SaveChanges,
  Subtitle,
  SeparationDiv,
} from './Styles';
import { TranslateText } from './translations';
import { buildUpdateUserErrorMessage, updateUserSchema } from './utils';
import { buildUpdateUserErrorMessageDE, updateUserSchemaDE } from './utilsDE';
import { buildUpdateUserErrorMessageEN, updateUserSchemaEN } from './utilsEN';

export default function ModalChangeUserData({ close, language }) {
  // States and variables

  const countries = useMemo(() => Country.getAllCountries(), []);
  const [states, setStates] = useState(null);
  const [cities, setCities] = useState(null);
  const [isPending, setIsPending] = useState(false); // Important for modals usage

  const user = useAuthStore((state) => state.auth?.user);
  const setUser = useAuthStore((state) => state.setUser);
  const translations = TranslateText({ language });

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

  const { mutate: updateUser } = useUpdateUser({
    onSuccess: (data) => {
      setUser(data);

      toast.success('Dados Alterados com Sucesso');
      close();
    },
    onError: (err) => {
      if (language === 'PT') {
        const errorMessage = buildUpdateUserErrorMessage(err);

        toast.error(errorMessage);
      } else if (language === 'DE') {
        const errorMessage = buildUpdateUserErrorMessageDE(err);

        toast.error(errorMessage);
      } else {
        const errorMessage = buildUpdateUserErrorMessageEN(err);

        toast.error(errorMessage);
      }

      setIsPending(false);
    },
  });

  let resolver;
  if (language === 'PT') {
    resolver = zodResolver(updateUserSchema);
  } else if (language === 'EN') {
    resolver = zodResolver(updateUserSchemaEN);
  } else {
    resolver = zodResolver(updateUserSchemaDE);
  }
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
    watch,
  } = useForm({ resolver });
  const onSubmit = (data) => {
    setIsPending(true);

    const newUserData = {
      ...data,
      city: JSON.parse(data.city).name,
      country: JSON.parse(data.country).name,
      state: JSON.parse(data.state).name,
    };

    updateUser({ _id: user._id, newUserData });
  };

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
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <DataEntry>
          <FormColumn>
            {language === 'DE' ? (
              <Subtitle fontSize="2.5rem">
                {translations.profilePersonalInfo}
              </Subtitle>
            ) : (
              <Subtitle>{translations.profilePersonalInfo}</Subtitle>
            )}
            <RegisterInput
              label={translations.profileCompany}
              name="company"
              placeholder={translations.phCompany}
              register={register}
              errors={errors}
              type="text"
              defaultValue={user.company}
            />
            <RegisterInput
              label={translations.profileName}
              name="name"
              placeholder={translations.namePlaceholder}
              register={register}
              errors={errors}
              type="text"
              defaultValue={user.name}
            />
            <RegisterInput
              label={translations.profileLastName}
              name="surname"
              placeholder={translations.lastNamePlaceholder}
              register={register}
              errors={errors}
              type="text"
              defaultValue={user.surname}
            />
            <RegisterInput
              label={translations.profileRole}
              name="role"
              placeholder={translations.phRole}
              register={register}
              errors={errors}
              type="text"
              defaultValue={user.role}
            />
          </FormColumn>
          <FormColumn>
            {language === 'DE' ? (
              <Subtitle fontSize="2.5rem">
                {translations.profileAdress}
              </Subtitle>
            ) : (
              <Subtitle>{translations.profileAdress}</Subtitle>
            )}
            <FormSelect
              subtitle={translations.profileCoutry}
              name="country"
              placeholder={translations.phCountry}
              size="large"
              control={control}
              errors={errors}
              data={countries.map(formatSelectData)}
              isProfile
              showSearch
              filterOption={selectFilter}
              defaultValue={user.country}
            />
            <FormSelect
              subtitle={translations.profileState}
              name="state"
              placeholder={translations.phState}
              size="large"
              control={control}
              errors={errors}
              data={states?.map(formatSelectData)}
              showSearch
              filterOption={selectFilter}
              disabled={!states}
              isProfile
              defaultValue={user.state}
            />
            <FormSelect
              subtitle={translations.profileCity}
              name="city"
              placeholder={translations.phCity}
              size="large"
              control={control}
              errors={errors}
              data={cities?.map(formatSelectData)}
              showSearch
              filterOption={selectFilter}
              disabled={!cities}
              isProfile
              defaultValue={user.city}
            />

            <SeparationDiv>
              <RegisterInput
                label={translations.profileStreet}
                name="address"
                placeholder={translations.profileStreet}
                register={register}
                errors={errors}
                type="text"
                defaultValue={user.address}
              />
            </SeparationDiv>
          </FormColumn>
        </DataEntry>
        {language === 'DE' ? (
          <SaveChanges
            disabled={isPending}
            type="submit"
            name="Salvar Alterações"
            relativeWidth="70%"
            fontSize="1.7rem"
            fontSizeMobile="1.3rem"
            fontSizeMiniMobile="0.9rem"
          >
            {isPending ? (
              <>
                <TailSpin
                  height="15"
                  width="15"
                  color="white"
                  ariaLabel="tail-spin-loading"
                  radius="5"
                />
                {translations.profileLoading}
              </>
            ) : (
              <>
                <SaveOutlined />
                {translations.profileChangeInformation}
              </>
            )}
          </SaveChanges>
        ) : (
          <SaveChanges
            disabled={isPending}
            type="submit"
            name="Salvar Alterações"
            relativeWidth="70%"
          >
            {isPending ? (
              <>
                <TailSpin
                  height="15"
                  width="15"
                  color="white"
                  ariaLabel="tail-spin-loading"
                  radius="5"
                />
                {translations.profileLoading}
              </>
            ) : (
              <>
                <SaveOutlined />
                {translations.profileChangeInformation}
              </>
            )}
          </SaveChanges>
        )}
      </Form>
    </Container>
  );
}

ModalChangeUserData.propTypes = {
  close: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
};
