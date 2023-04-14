import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import IZTLogo from '../../assets/IZTLogo.svg';
import { RegisterInput, SubmitButton } from '../../components/common';
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
} from './Styles';
import { buildRegisterErrorMessage, registerValidationSchema } from './utils';

export default function Register() {
  const navigate = useNavigate();
  const { mutate: createUser, isLoading } = useCreateUser({
    onSuccess: () => {
      toast.success('Usuário cadastrado com sucesso!');
      navigate('/login');
    },
    onError: (err) => {
      const errorMessage = buildRegisterErrorMessage(err);

      toast.error(errorMessage);
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerValidationSchema),
  });
  const onSubmit = (data) => createUser(data);

  if (isLoading) return <p style={{ height: '100vh' }}>Loading...</p>;
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
              <RegisterInput
                label="País: "
                name="country"
                placeholder="Nome do país"
                register={register}
                errors={errors}
                type="text"
              />
              <RegisterInput
                label="Estado: "
                name="state"
                placeholder="Nome do estado"
                register={register}
                errors={errors}
                type="text"
              />
              <RegisterInput
                label="Cidade: "
                name="city"
                placeholder="Nome da cidade"
                register={register}
                errors={errors}
                type="text"
              />
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
          <SubmitButton
            // submitErrorMessage={submitErrorMessage}
            name="Criar conta"
            relativeWidth="70%"
          />
        </Form>
      </Container>
    </Page>
  );
}
