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
    .min(1, 'Favor inserir o nome da categoria')
    .min(3, 'O nome da categoria deve ter pelo menos 3 caracteres')
    .max(40, 'O nome da categoria deve ter no máximo 40 caracteres'),
  description: z.string().optional(),
});

export default function ModalCreateCategory() {
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
          <Input
            id="name"
            name="name"
            type="name"
            {...register('name')}
            placeholder="Digite aqui o nome da categoria"
          />
          <ModalButton type="submit">
            <FiSave size={25} />
            <p>Criar Categoria</p>
          </ModalButton>
        </ModalContent>
      </Form>
    </Container>
  );
}
