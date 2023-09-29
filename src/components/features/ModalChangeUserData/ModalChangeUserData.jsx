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
import { buildUpdateUserErrorMessage, updateUserSchema } from './utils';

export default function ModalChangeUserData({ close, language }) {
  let profilePersonalInfo;
  let profileCompany;
  let phCompany;
  let profileName;
  let profileLastName;
  let profileRole;
  let phRole;
  let profileAdress;
  let profileCoutry;
  let phCountry;
  let profileState;
  let phState;
  let profileCity;
  let phCity;
  let profileStreet;
  let profileChangeInformation;
  let profileLoading;
  let toastMessage;

  if (language === 'EN') {
    profilePersonalInfo = 'Personal information';
    profileCompany = 'Company: ';
    phCompany = 'Company name';
    profileName = 'Name: ';
    profileLastName = 'Last Name: ';
    profileRole = 'Job: ';
    phRole = 'Job Title';
    profileAdress = 'Adress: ';
    profileCoutry = 'Country: ';
    phCountry = 'Country name';
    profileState = 'State: ';
    phState = 'State name';
    profileCity = 'City: ';
    phCity = 'City name';
    profileStreet = 'Street: ';
    profileChangeInformation = 'Save Information';
    profileLoading = 'Loading';
    toastMessage = 'Data modified successfully!';
  } else if (language === 'PT') {
    profilePersonalInfo = 'Informações Pessoais';
    profileCompany = 'Empresa: ';
    phCompany = 'Nome da empresa';
    profileName = 'Nome: ';
    profileLastName = 'Sobrenome: ';
    profileRole = 'Cargo: ';
    phRole = 'Nome do Cargo';
    profileAdress = 'Endereço: ';
    profileCoutry = 'País: ';
    phCountry = 'Nome do País';
    profileState = 'Estado: ';
    phState = 'Nome do Estado';
    profileCity = 'Cidade: ';
    phCity = 'Nome da Cidade';
    profileStreet = 'Rua: ';
    profileChangeInformation = 'Salvar Infomações';
    profileLoading = 'Carregando';
    toastMessage = 'Dados modificados com sucesso!';
  } else if (language === 'DE') {
    profilePersonalInfo = 'Persönliche Informationen';
    profileCompany = 'Unternehmen: ';
    phCompany = 'Firmenname';
    profileName = 'Name: ';
    profileLastName = 'Nachname: ';
    profileRole = 'Position oder Job: ';
    phRole = 'Berufsbezeichnung';
    profileAdress = 'Adresse: ';
    profileCoutry = 'Land: ';
    phCountry = 'Landesname';
    profileState = 'Bundesland: ';
    phState = 'Bundeslandname';
    profileCity = 'Stadt: ';
    phCity = 'Stadtname';
    profileStreet = 'Straße: ';
    profileChangeInformation = 'Informationen speichern';
    profileLoading = 'Laden';
    toastMessage = 'Daten erfolgreich geändert!';
  }

  // States and variables
  const countries = useMemo(() => Country.getAllCountries(), []);
  const [states, setStates] = useState(null);
  const [cities, setCities] = useState(null);
  const [isPending, setIsPending] = useState(false); // Important for modals usage

  const user = useAuthStore((state) => state.auth?.user);
  const setUser = useAuthStore((state) => state.setUser);

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

      toast.success(toastMessage);
      close();
    },
    onError: (err) => {
      const errorMessage = buildUpdateUserErrorMessage(err);

      toast.error(errorMessage);
      setIsPending(false);
    },
  });

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
    watch,
  } = useForm({
    resolver: zodResolver(updateUserSchema),
  });
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
              <Subtitle fontSize="2.5rem">{profilePersonalInfo}</Subtitle>
            ) : (
              <Subtitle>{profilePersonalInfo}</Subtitle>
            )}
            <RegisterInput
              label={profileCompany}
              name="company"
              placeholder={phCompany}
              register={register}
              errors={errors}
              type="text"
              defaultValue={user.company}
            />
            <RegisterInput
              label={profileName}
              name="name"
              placeholder={profileName}
              register={register}
              errors={errors}
              type="text"
              defaultValue={user.name}
            />
            <RegisterInput
              label={profileLastName}
              name="surname"
              placeholder={profileLastName}
              register={register}
              errors={errors}
              type="text"
              defaultValue={user.surname}
            />
            <RegisterInput
              label={profileRole}
              name="role"
              placeholder={phRole}
              register={register}
              errors={errors}
              type="text"
              defaultValue={user.role}
            />
          </FormColumn>
          <FormColumn>
            {language === 'DE' ? (
              <Subtitle fontSize="2.5rem">{profileAdress}</Subtitle>
            ) : (
              <Subtitle>{profileAdress}</Subtitle>
            )}
            <FormSelect
              subtitle={profileCoutry}
              name="country"
              placeholder={phCountry}
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
              subtitle={profileState}
              name="state"
              placeholder={phState}
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
              subtitle={profileCity}
              name="city"
              placeholder={phCity}
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
                label={profileStreet}
                name="address"
                placeholder={profileStreet}
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
                {profileLoading}
              </>
            ) : (
              <>
                <SaveOutlined />
                {profileChangeInformation}
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
                {profileLoading}
              </>
            ) : (
              <>
                <SaveOutlined />
                {profileChangeInformation}
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
