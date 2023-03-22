import { useState } from 'react';
import PropTypes from 'prop-types';
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
import { useUpdateUser } from '../../../hooks/query/users';
import useAuthStore from '../../../stores/auth';
import { buildUpdateUserErrorMessage, updateUserSchema } from './utils';

export default function ModalChangeUserData({ close }) {
  const [isPending, setIsPending] = useState(false); // Important for modals usage
  const {
    auth: { user },
    setUser,
  } = useAuthStore();

  const updateUserOnSuccess = (data) => {
    setUser(data);
    close();
  };
  const updateUserOnError = (err) => {
    const code = err?.response?.data?.httpCode;
    const errorMessage = buildUpdateUserErrorMessage(code);

    // Do something to the errorMessage
    alert(errorMessage);

    setIsPending(false);
  };
  const { mutate: updateUser } = useUpdateUser({
    onSuccess: updateUserOnSuccess,
    onError: updateUserOnError,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(updateUserSchema),
  });
  const onSubmit = (data) => {
    setIsPending(true);
    updateUser({ id: user._id, newUserData: data });
  };

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
          <FormColumn>
            <Subtitle>Endereço</Subtitle>
            <RegisterInput
              label="País: "
              name="country"
              placeholder="Nome do país"
              register={register}
              errors={errors}
              type="text"
              defaultValue={user.country}
            />
            <RegisterInput
              label="Estado: "
              name="state"
              placeholder="Nome do estado"
              register={register}
              errors={errors}
              type="text"
              defaultValue={user.state}
            />
            <RegisterInput
              label="Cidade: "
              name="city"
              placeholder="Nome da cidade"
              register={register}
              errors={errors}
              type="text"
              defaultValue={user.city}
            />
            <RegisterInput
              label="Endereço: "
              name="address"
              placeholder="Endereço"
              register={register}
              errors={errors}
              type="text"
              defaultValue={user.address}
            />
          </FormColumn>
        </DataEntry>

        <SaveChanges
          disabled={isPending}
          type="submit"
          name="Salvar Alterações"
          relativeWidth="70%"
        >
          <SaveOutlined />
          {isPending ? 'Carregando...' : 'Salvar Alterações'}
        </SaveChanges>
      </Form>
    </Container>
  );
}

ModalChangeUserData.propTypes = {
  close: PropTypes.func.isRequired,
};
