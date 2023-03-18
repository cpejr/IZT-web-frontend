import { useState } from 'react';
import PropTypes from 'prop-types';
import { z } from 'zod';
import { Modal } from 'antd';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SaveOutlined, CloseOutlined } from '@ant-design/icons';
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
import { ERROR_CODES } from '../../../utils/constants';
import useAuthStore from '../../../stores/auth';

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
  role: z
    .string()
    .min(1, 'Informe um cargo')
    .min(3, 'O cargo não pode ter menos de 3 caracteres'),
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
});

const errorMessages = {
  [ERROR_CODES.BAD_REQUEST]: 'Dados inválidos',
  [ERROR_CODES.UNAUTHORIZED]: 'Usuário não autorizado',
  [ERROR_CODES.NOT_FOUND]: 'Usuário não encontrado',
};
const defaultErrorMessage =
  'Erro ao editar os dados cadastrais. Tente novamente mais tarde';

export default function ModalChangeUserData({ openState, close }) {
  const [submitErrorMessage, setSubmitErrorMessage] = useState('');
  const user = useAuthStore((state) => state.auth.user);
  const setUser = useAuthStore((state) => state.setUser);

  const onSuccess = (data) => {
    setUser(data);
    close();
  };
  const onError = (error) => {
    const code = error.response.status;
    const message = errorMessages[code] || defaultErrorMessage;

    setSubmitErrorMessage(message);
  };
  const { mutate: updateUser } = useUpdateUser({
    onSuccess,
    onError,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validationSchema),
  });
  const onSubmit = (data) => updateUser({ id: user._id, newUserData: data });

  if (submitErrorMessage) return <p>{submitErrorMessage}</p>;
  return (
    <Modal
      open={openState}
      onCancel={close}
      footer={null}
      width={1000}
      closeIcon={<CloseOutlined />}
      destroyOnClose
      centered
    >
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
            type="submit"
            name="Salvar Alterações"
            relativeWidth="70%"
          >
            <SaveOutlined />
            Salvar Alterações
          </SaveChanges>
        </Form>
      </Container>
    </Modal>
  );
}

ModalChangeUserData.propTypes = {
  openState: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};
