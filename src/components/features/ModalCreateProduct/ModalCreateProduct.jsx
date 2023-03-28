/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-props-no-spreading */
import { useRef } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';
import { FiSave } from 'react-icons/fi';
import { HiPlusSm } from 'react-icons/hi';
import { z } from 'zod';

import { AdminShowFiles, AdminShowPictures } from '..';
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
  TextAreaModal,
  Input,
  ModalButton,
  AddButton,
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
    .array(z.instanceof(File))
    .nonempty('Você deve inserir ao menos uma foto'),

  documents: z.array(z.instanceof(File)).default([]),
});

export default function ModalAddProduct() {
  const documentInputRef = useRef(null);
  const pictureInputRef = useRef(null);
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validationSchema),
  });

  const documentsFieldArray = useFieldArray({
    control,
    name: 'documents',
  });

  const picturesFieldArray = useFieldArray({
    control,
    name: 'pictures',
  });

  const { mutate: createProduct } = useCreateProduct();
  const onSubmit = (data) => createProduct(data);

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
              <AdminShowPictures
                register={register}
                control={control}
                errors={errors}
                picturesFieldArray={picturesFieldArray}
                buttonColor="white"
              />{' '}
              <AddButton
                type="button"
                onClick={() => pictureInputRef.current.click()}
              >
                <input
                  accept="image/jpeg, image/pjpeg, image/png, image/gif"
                  type="file"
                  style={{ display: 'none' }}
                  ref={pictureInputRef}
                  onChange={(e) => {
                    const file = e.target.files;
                    picturesFieldArray.append({ file });
                  }}
                />
                <HiPlusSm size={25} />
                Nova imagem
              </AddButton>
            </Subsection>

            <Subsection>
              <Text>Documentos</Text>
              <AdminShowFiles
                register={register}
                control={control}
                errors={errors}
                documentsFieldArray={documentsFieldArray}
                buttonColor="white"
              />
              <AddButton onClick={() => documentInputRef.current.click()}>
                <input
                  type="file"
                  style={{ display: 'none' }}
                  ref={documentInputRef}
                  onChange={(e) => {
                    const file = e.target.files;
                    documentsFieldArray.append({ file });
                  }}
                />
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
