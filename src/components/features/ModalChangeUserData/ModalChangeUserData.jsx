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
  DivSeparacao,
  FormColumn2
} from './Styles';
import { buildUpdateUserErrorMessage, updateUserSchema } from './utils';

export default function ModalChangeUserData({ close }) {
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

      toast.success('Dados modificados com sucesso!');
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
            <Subtitle>Informações pessoais</Subtitle>
            <RegisterInput
              label="Empresa: "
              name="company"
              placeholder="Nome da empresa"
              register={register}
              errors={errors}
              type="text"
              defaultValue={user.company}
            />
            <RegisterInput
              label="Nome: "
              name="name"
              placeholder="Nome"
              register={register}
              errors={errors}
              type="text"
              defaultValue={user.name}
            />
            <RegisterInput
              label="Sobrenome: "
              name="surname"
              placeholder="Sobrenome"
              register={register}
              errors={errors}
              type="text"
              defaultValue={user.surname}
            />
            <RegisterInput
              label="Cargo: "
              name="role"
              placeholder="Nome do cargo"
              register={register}
              errors={errors}
              type="text"
              defaultValue={user.role}
            />
          </FormColumn>
          <FormColumn2>
            <Subtitle>Endereço</Subtitle>
            <FormSelect
              subtitle="País:"
              name="country"
              placeholder="Nome do país"
              size="large"
              control={control}
              errors={errors}
              data={countries.map(formatSelectData)}
              isBudget
              showSearch
              filterOption={selectFilter}
              isProfile
              defaultValue={user.country}
            
            />
            <FormSelect
              subtitle="Estado:"
              name="state"
              placeholder="Nome do estado"
              size="large"
              control={control}
              errors={errors}
              data={states?.map(formatSelectData)}
              isBudget
              showSearch
              filterOption={selectFilter}
              disabled={!states}
              isProfile
              defaultValue={user.state}
            />
            <FormSelect
              subtitle="Cidade:"
              name="city"
              placeholder="Nome da cidade"
              size="large"
              control={control}
              errors={errors}
              data={cities?.map(formatSelectData)}
              isBudget
              showSearch
              filterOption={selectFilter}
              disabled={!cities}
              isProfile
              defaultValue={user.city}
            />
            <DivSeparacao>
            <RegisterInput
              label="Endereço: "
              name="address"
              placeholder="Endereço"
              register={register}
              errors={errors}
              type="text"
              defaultValue={user.address}
              
            />
            </DivSeparacao>
          </FormColumn2>
        </DataEntry>

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
              Carregando
            </>
          ) : (
            <>
              <SaveOutlined />
              Salvar Alterações
            </>
          )}
        </SaveChanges>
      </Form>
    </Container>
  );
}

ModalChangeUserData.propTypes = {
  close: PropTypes.func.isRequired,
};
