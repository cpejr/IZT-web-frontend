/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { HiPlusSm } from 'react-icons/hi';
import { FiSave } from 'react-icons/fi';
import { z } from 'zod';
import { useCreateProduct } from '../../../hooks/query/products';

import {
  Container,
  Form,
  ModalContent,
  LeftSection,
  RightSection,
  Subsection,
  CategorySubsection,
  Text,
  MiniText,
  AddButton,
  TextAreaModal,
  Input,
  ModalButton,
} from './Styles';

const validationSchema = z.object({
  name: z
    .string()
    .min(1, 'Favor digitar o nome do produto')
    .max(20, 'Nome do produto deve ter no máximo 20 caracteres'),
  category: z.string({ required_error: 'Product category ID is required' }), // Here we need to pass the category id only

  description: z
    .string()
    .min(1, 'Favor inserir uma descrição do produto')
    .max(150, 'Descrição do produto deve ter no máximo 150 caracteres'),

  advantages: z
    .string()
    .min(1, 'Favor inserir as vantagens do produto')
    .max(150, 'Vantagens do produto devem ter no máximo 150 caracteres'),

  pictures: z
    .array(z.instanceof(FileList))
    .nonempty('Você deve inserir ao menos uma foto'),

  documents: z.array(z.instanceof(FileList)).default([]),
});

export default function ModalAddProduct() {
  const { handleSubmit, register, watch, control } = useForm({
    resolver: zodResolver(validationSchema),
  });

  const { mutate: createProduct } = useCreateProduct();
  const onSubmit = (data) => createProduct(data);
  console.log(watch());

  const {
    fields: fieldsPictures,
    append: appendPicture,
    remove: removePicture,
  } = useFieldArray({
    control,
    name: 'pictures',
  });

  const {
    fields: fieldsDocuments,
    append: appendDocument,
    remove: removeDocument,
  } = useFieldArray({
    control,
    name: 'documents',
  });

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <ModalContent>
          <LeftSection>
            <Subsection>
              <Text>Nome do produto:</Text>
              <Input
                id="name"
                name="name"
                type="name"
                placeholder="Digite o nome do produto"
                {...register('name')}
              />
            </Subsection>

            <Subsection>
              <Text>Descrição:</Text>
              <TextAreaModal
                id="description"
                name="description"
                type="description"
                placeholder="Descreva o produto"
                {...register('description')}
              />
            </Subsection>

            <Subsection>
              <Text>Vantagens:</Text>
              <TextAreaModal
                id="advantages"
                name="advantages"
                type="advantages"
                placeholder="Descreva as vantagens do produto"
                {...register('advantages')}
              />
            </Subsection>
          </LeftSection>

          <RightSection>
            <Subsection>
              <Text>Imagens:</Text>
              <MiniText>Anexe as imagens do produto</MiniText>
              {fieldsPictures.map((field, index) => (
                <input
                  type="file"
                  key={field.id} // important to include key with field's id
                  {...register(`pictures.${index}.value`)}
                />
              ))}
              <AddButton type="button" onClick={() => appendPicture}>
                <HiPlusSm size={25} />
                Nova imagem
              </AddButton>
            </Subsection>

            <Subsection>
              <Text>Documentos</Text>
              <AddButton>
                <HiPlusSm size={25} />
                Novo documento
              </AddButton>
            </Subsection>

            <CategorySubsection>
              <Text>Categorias</Text>
              <p>SETLIST</p>
            </CategorySubsection>

            <ModalButton type="submit">
              <FiSave size={20} />
              <p>Criar produto</p>
            </ModalButton>
          </RightSection>
        </ModalContent>
      </Form>
    </Container>
  );
}
