import { useMemo } from 'react';

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
  AddressSelectDiv,
  ButtonDiv,
} from './Styles';
import { buildRegisterErrorMessage, registerValidationSchema } from './utils';

export default function Register() {
  const navigate = useNavigate();
  const { mutate: createUser, isLoading } = useCreateUser({
    onSuccess: (user) => {
      toast.success('Verifique sua caixa de mensagens e confirme seu email!');
      navigate('/verificar-email', { state: user.email });
    },
    onError: (err) => {
      const errorMessage = buildRegisterErrorMessage(err);

      toast.error(errorMessage);
    },
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm({
    resolver: zodResolver(registerValidationSchema),
  });
  const onSubmit = (data) => {
    console.log(data);
    createUser(data);
  };

  const countries = useMemo(() => Country.getAllCountries(), []);
  const selectedContry = watch('country');

  const states = useMemo(
    () =>
      selectedContry
        ? State.getStatesOfCountry(JSON.parse(selectedContry)?.isoCode)
        : null,
    [selectedContry]
  );
  const selectedState = watch('state');

  const cities = useMemo(
    () =>
      selectedContry && selectedState
        ? City.getCitiesOfState(
            JSON.parse(selectedContry)?.isoCode,
            JSON.parse(selectedState)?.isoCode
          )
        : null,
    [selectedContry, selectedState]
  );

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
              <AddressSelectDiv>
                <Label>País:</Label>
                <FormSelect
                  name="country"
                  placeholder="Nome do país"
                  size="large"
                  control={control}
                  errors={errors}
                  data={countries.map(({ name, isoCode }) => ({
                    label: name,
                    value: JSON.stringify({ name, isoCode }),
                  }))}
                />
              </AddressSelectDiv>

              <AddressSelectDiv>
                <Label>Estado:</Label>
                <FormSelect
                  name="state"
                  placeholder="Nome do estado"
                  size="large"
                  control={control}
                  errors={errors}
                  data={states?.map(({ name, isoCode }) => ({
                    label: name,
                    value: JSON.stringify({ name, isoCode }),
                  }))}
                  disabled={!states}
                />
              </AddressSelectDiv>

              <AddressSelectDiv>
                <Label>Cidade:</Label>
                <FormSelect
                  name="city"
                  placeholder="Nome da cidade"
                  size="large"
                  control={control}
                  errors={errors}
                  data={cities?.map(({ name, isoCode }) => ({
                    label: name,
                    value: JSON.stringify({ name, isoCode }),
                  }))}
                  disabled={!cities}
                />
              </AddressSelectDiv>

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
