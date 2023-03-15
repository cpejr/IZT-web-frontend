/* eslint-disable import/extensions */
import React from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SaveOutlined } from '@ant-design/icons';
import { DataInput } from '../../common';
import { Container, Form, DataEntry, FormColumn, SaveChanges } from './Styles';
import { useUpdateUser } from '../../../hooks/query/users.js';

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

  email: z
    .string()
    .min(1, { message: 'Favor digitar o email' })
    .email({
      message: 'Insira um email no formato email@email.com',
    })
    .trim(),
}); // all inputs validation schema

function ChangeUserDataModal() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validationSchema),
  });

  const { mutateAsync: updateUser, isLoading } = useUpdateUser();

  const onSubmit = async (data) => updateUser(data);
  if (isLoading) return <p>Loading...</p>;

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <DataEntry>
          <FormColumn>
            <DataInput
              label="Empresa: "
              name="company"
              placeholder="Nome da empresa"
              register={register}
              errors={errors}
              type="text"
            />
            <DataInput
              label="Nome: "
              name="name"
              placeholder="Nome"
              register={register}
              errors={errors}
              type="text"
            />
            <DataInput
              label="Sobrenome: "
              name="surname"
              placeholder="Sobrenome"
              register={register}
              errors={errors}
              type="text"
            />
            <DataInput
              label="Cargo: "
              name="role"
              placeholder="Nome do cargo"
              register={register}
              errors={errors}
              type="text"
            />
          </FormColumn>
          <FormColumn>
            <DataInput
              label="País: "
              name="country"
              placeholder="Nome do país"
              register={register}
              errors={errors}
              type="text"
            />
            <DataInput
              label="Estado: "
              name="state"
              placeholder="Nome do estado"
              register={register}
              errors={errors}
              type="text"
            />
            <DataInput
              label="Cidade: "
              name="city"
              placeholder="Nome da cidade"
              register={register}
              errors={errors}
              type="text"
            />
            <DataInput
              label="Endereço: "
              name="address"
              placeholder="Endereço"
              register={register}
              errors={errors}
              type="text"
            />
          </FormColumn>
          <FormColumn>
            <DataInput
              label="E-mail: "
              name="email"
              placeholder="email@email.com"
              register={register}
              errors={errors}
              type="text"
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
