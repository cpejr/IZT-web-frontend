/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { FiSave } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Container,
  Title,
  Subtitle,
  SmallInput,
  SaveButton,
  CancelButton,
  Form,
} from './Styles';
import { useUpdateCategory } from '../../../hooks/query/categories';

const validationSchema = z.object({
  name: z
    .string()
    .min(1, 'Favor inserir o nome da categoria')
    .min(3, 'O nome da categoria deve ter pelo menos 3 caracteres')
    .max(40, 'O nome da categoria deve ter no máximo 40 caracteres'),
  description: z.string().optional(),
});

export default function AdminEditCategoryMobile() {
  const { handleSubmit, register, watch } = useForm({
    resolver: zodResolver(validationSchema),
  });
  const navigate = useNavigate();
  const location = useLocation();

  const queryClient = useQueryClient();
  const onSuccess = () => {
    queryClient.invalidateQueries({ queryKey: ['categories'] });
    navigate('/administrador/listar-categorias');
  };

  const { mutate: updateCategory } = useUpdateCategory({ onSuccess });
  const onSubmit = (data) =>
    updateCategory({ id: location.state.id, newCategoryData: data });
  console.log(watch());

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>Editar Categoria</Title>

        <Subtitle>Nome da categoria:</Subtitle>
        <SmallInput
          placeholder={location.state.name}
          id="name"
          name="name"
          type="name"
          {...register('name')}
        />

        <SaveButton type="submit">
          <FiSave size={20} />
          <p>Editar categoria</p>
        </SaveButton>
      </Form>

      <CancelButton to="/administrador/listar-categorias">
        <p>Cancelar</p>
      </CancelButton>
    </Container>
  );
}
