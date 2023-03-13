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
  Label,
  Input,
  ModalContent,
  ModalButton,
} from './Styles';

const validationSchema = z.object({
  name: z
    .string()
    .min(1, 'Ctaegory name is required')
    .min(3, 'Category name must be atleast 3 characters')
    .max(40, 'Category name must be a maximum of 40 characters'),
  description: z.string().optional(),
});

export default function ModalEditCategory() {
  const { handleSubmit, register, watch } = useForm({
    resolver: zodResolver(validationSchema),
  });

  const { mutate: createCategory } = useCreateCategory();
  const onSubmit = (data) => createCategory(data);
  console.log(watch());

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <ModalContent>
          <Label>Nome da categoria:</Label>
          <Input id="name" name="name" type="name" {...register('name')} />
          <ModalButton type="submit">
            <FiSave size={25} />
            <p>Salvar alterações</p>
          </ModalButton>
        </ModalContent>
      </Form>
    </Container>
  );
}
