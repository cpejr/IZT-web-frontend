/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { FiSave } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import {
  Container,
  Label,
  Input,
  ModalContent,
  ModalButton,
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

export default function ModalEditCategory({ categoryId, categoryName, close }) {
  const { handleSubmit, register, watch } = useForm({
    resolver: zodResolver(validationSchema),
  });

  const queryClient = useQueryClient();
  const onSuccess = () => {
    queryClient.invalidateQueries({ queryKey: ['categories'] });
    close();
  };

  const { mutate: updateCategory } = useUpdateCategory({ onSuccess });
  const onSubmit = (data) =>
    updateCategory({ id: categoryId, newCategoryData: data });
  console.log(watch());
  return (
    <Container>
      <ModalContent>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Label>Nome da categoria:</Label>
          <Input
            placeholder={categoryName}
            id="name"
            name="name"
            type="name"
            {...register('name')}
          />
          <ModalButton type="submit">
            <FiSave size={25} />
            <p>Salvar Alterações</p>
          </ModalButton>
        </Form>
      </ModalContent>
    </Container>
  );
}
