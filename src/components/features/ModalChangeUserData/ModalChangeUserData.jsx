<<<<<<<

=======
import { useState } from 'react';

import { SaveOutlined } from '@ant-design/icons';
import { zodResolver } from '@hookform/resolvers/zod';
>>>>>>>
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SaveOutlined, CloseOutlined } from '@ant-design/icons';
import { toast } from 'react-toastify';
import { AddToast, RegisterInput } from '../../common';
import {
  Container,
  Form,
  DataEntry,
  FormColumn,
  SaveChanges,
  Subtitle,
} from './Styles';
import { buildUpdateUserErrorMessage, updateUserSchema } from './utils';

export default function ModalChangeUserData({ close }) {
  const [isPending, setIsPending] = useState(false); // Important for modals usage
  const {
    auth: { user },
    setUser,
  } = useAuthStore();

  address: z
    .string()
    .min(1, 'Informe um endereço')
    .min(3, 'User address must be atleast 3 characters')
    .max(50, 'User address must be a maximum of 50 characters'),
});

const errorMessages = {
  [ERROR_CODES.BAD_REQUEST]: 'Dados inválidos',
  [ERROR_CODES.UNAUTHORIZED]: 'Usuário não autorizado',
  [ERROR_CODES.NOT_FOUND]: 'Usuário não encontrado',
};
const defaultErrorMessage =
  'Erro ao editar os dados cadastrais. Tente novamente mais tarde';

export default function ModalChangeUserData({ openState, close }) {
  const user = useAuthStore((state) => state.auth.user);
  const setUser = useAuthStore((state) => state.setUser);

  const onSuccess = (data) => {
    setUser(data);
    toast.success('Dados modificados com sucesso!');
    close();
  };
  const onError = (error) => {
    const code = error.response.status;
    const message = errorMessages[code] || defaultErrorMessage;

    toast.error(message);
    close();
  };
  const { mutate: updateUser } = useUpdateUser({
    onSuccess: (data) => {
      setUser(data);
      close();
    },
    onError: (err) => {
      const errorMessage = buildUpdateUserErrorMessage(err);

      // Do something to the errorMessage
      alert(errorMessage);
      setIsPending(false);
    },
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
    updateUser({ _id: user._id, newUserData: data });
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
      <AddToast />
    </Container>
  );
}

ModalChangeUserData.propTypes = {
  close: PropTypes.func.isRequired,
};
