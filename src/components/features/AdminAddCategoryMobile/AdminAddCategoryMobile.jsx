/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FiSave } from 'react-icons/fi';
import { useCreateCategory } from '../../../hooks/query/categories';
import {
  Container,
  Form,
  Title,
  Subtitle,
  SmallInput,
  ButtonsDiv,
  SaveButton,
  CancelButton,
} from './Styles';

const validationSchema = z.object({
  name: z
    .string()
    .min(1, 'Favor inserir o nome da categoria')
    .min(3, 'O nome da categoria deve ter pelo menos 3 caracteres')
    .max(40, 'O nome da categoria deve ter no máximo 40 caracteres'),
  description: z.string().optional(),
});

export default function AdminAddCategoryMobile() {
  const { handleSubmit, register } = useForm({
    resolver: zodResolver(validationSchema),
  });

  const { mutate: createCategory } = useCreateCategory();
  const onSubmit = (data) => createCategory(data);
  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>Adicionar Categoria</Title>

        <Subtitle>Nome da categoria:</Subtitle>
        <SmallInput id="name" name="name" type="name" {...register('name')} />

        <ButtonsDiv>
          <SaveButton type="submit">
            <FiSave size={20} />
            <p>Adicionar categoria</p>
          </SaveButton>

          <CancelButton>
            <p>Cancelar</p>
          </CancelButton>
        </ButtonsDiv>
      </Form>
    </Container>
  );
}
