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
import { buildRegisterErrorMessage, registerValidationSchema } from './utils';

export default function Register() {
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
      const errorMessage = buildRegisterErrorMessage(err);

      toast.error(errorMessage);
    },
  });

  // Form handlers
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(registerValidationSchema),
  });
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
        <Title>Crie sua conta</Title>
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
              />
              <RegisterInput
                label="Nome: "
                name="name"
                placeholder="Nome"
                register={register}
                errors={errors}
                type="text"
              />
              <RegisterInput
                label="Sobrenome: "
                name="surname"
                placeholder="Sobrenome"
                register={register}
                errors={errors}
                type="text"
              />
              <RegisterInput
                label="Cargo: "
                name="role"
                placeholder="Nome do cargo"
                register={register}
                errors={errors}
                type="text"
              />
            </FormColumn>
            <FormColumn>
              <Subtitle>Endereço</Subtitle>
              <AddressSelect>
                <Label>País:</Label>
                <FormSelect
                  name="country"
                  placeholder="Nome do país"
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
                <Label>Estado:</Label>
                <FormSelect
                  name="state"
                  placeholder="Nome do estado"
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
                <Label>Cidade:</Label>
                <FormSelect
                  name="city"
                  placeholder="Nome da cidade"
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
                label="Endereço: "
                name="address"
                placeholder="Endereço"
                register={register}
                errors={errors}
                type="text"
              />
            </FormColumn>
            <FormColumn>
              <Subtitle>Credenciais</Subtitle>
              <RegisterInput
                label="E-mail: "
                name="email"
                placeholder="email@email.com"
                register={register}
                errors={errors}
                type="text"
              />
              <RegisterInput
                label="Senha: "
                name="password"
                placeholder="********"
                register={register}
                errors={errors}
                type="password"
              />
              <RegisterInput
                label="Confirme sua senha: "
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
                  Carregando
                </>
              ) : (
                'Criar Conta'
              )}
            </SubmitButton>
          </ButtonDiv>
        </Form>
      </Container>
    </Page>
  );
}
