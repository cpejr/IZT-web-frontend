/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
import { React, useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SaveOutlined } from '@ant-design/icons';
import { RegisterInput } from '../../common';
import {
  Container,
  Form,
  DataEntry,
  FormColumn,
  SaveChanges,
  Subtitle,
} from './Styles';
import { useUpdateUser } from '../../../hooks/query/users.js';
import useAuthStore from '../../../stores/auth';
import { ERROR_CODES } from '../../../utils/constants';

const validationSchema = z.object({
  company: z.string().min(1, 'Favor digitar o nome da empresa'),

  name: z
    .string()
    .min(1, 'Informe um nome')
    .min(3, 'O nome não pode ter menos de 3 caracteres')
    .max(40, 'O nome não pode ter mais de 40 caracteres'),

  surname: z
    .string()
    .min(1, 'Informe um sobrenome')
    .min(2, 'O sobrenome não pode ter menos de 2 caracteres')
    .max(40, 'O sobrenome não pode ter mais de 40 caracteres'),

  role: z.string().min(1, 'Informe um cargo'),

  country: z
    .string()
    .min(1, 'Informe um telefone')
    .min(3, 'User country must be atleast 3 characters')
    .max(30, 'User country must be a maximum of 30 characters'),

  state: z
    .string()
    .min(1, 'Informe um estado')
    .min(3, 'User state must be atleast 3 characters')
    .max(30, 'User state must be a maximum of 30 characters'),

  city: z
    .string()
    .min(1, 'Informe uma cidade')
    .min(3, 'User city must be atleast 3 characters')
    .max(30, 'User city must be a maximum of 30 characters'),

  address: z
    .string()
    .min(1, 'Informe um endereço')
    .min(3, 'User address must be atleast 3 characters')
    .max(50, 'User address must be a maximum of 50 characters'),
}); // all inputs validation schema

function ChangeUserDataModal({ close }) {
  const [errorMessage, setSubmitErrorMessage] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validationSchema),
  });

  const { auth, setUser } = useAuthStore();

  const onSuccess = (data) => {
    setUser(data);
    close();
  };
  const onError = (error) => {
    switch (error.response.status) {
      case ERROR_CODES.UNAUTHORIZED:
        setSubmitErrorMessage('Usuário não autorizado');
        break;
      case ERROR_CODES.NOT_FOUND:
        setSubmitErrorMessage('Usuário não encontrado');
        break;
      case ERROR_CODES.INTERNAL_SERVER:
        setSubmitErrorMessage(
          'Erro ao editar os dados cadastrais. Tente novamente mais tarde'
        );
        break;
      default:
        break;
    }
  };

  const { mutate: updateUser, isLoading } = useUpdateUser({
    onSuccess,
    onError,
  });

  const onSubmit = async (data) =>
    updateUser({ id: auth.user._id, newUserData: data });

  if (isLoading) return <p>Loading...</p>;
  if (errorMessage) return <p>{errorMessage}</p>;

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
              defaultValue={auth.user.company}
            />
            <RegisterInput
              label="Nome: "
              name="name"
              placeholder="Nome"
              register={register}
              errors={errors}
              type="text"
              defaultValue={auth.user.name}
            />
            <RegisterInput
              label="Sobrenome: "
              name="surname"
              placeholder="Sobrenome"
              register={register}
              errors={errors}
              type="text"
              defaultValue={auth.user.surname}
            />
            <RegisterInput
              label="Cargo: "
              name="role"
              placeholder="Nome do cargo"
              register={register}
              errors={errors}
              type="text"
              defaultValue={auth.user.role}
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
              defaultValue={auth.user.country}
            />
            <RegisterInput
              label="Estado: "
              name="state"
              placeholder="Nome do estado"
              register={register}
              errors={errors}
              type="text"
              defaultValue={auth.user.state}
            />
            <RegisterInput
              label="Cidade: "
              name="city"
              placeholder="Nome da cidade"
              register={register}
              errors={errors}
              type="text"
              defaultValue={auth.user.city}
            />
            <RegisterInput
              label="Endereço: "
              name="address"
              placeholder="Endereço"
              register={register}
              errors={errors}
              type="text"
              defaultValue={auth.user.address}
            />
          </FormColumn>
        </DataEntry>
        <SaveChanges type="submit" name="Salvar Alterações" relativeWidth="70%">
          <SaveOutlined />
          Salvar Alterações
        </SaveChanges>
      </Form>
    </Container>
  );
}

export default ChangeUserDataModal;
