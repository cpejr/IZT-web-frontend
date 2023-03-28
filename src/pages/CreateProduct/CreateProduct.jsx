import { useRef } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';
import { FiSave } from 'react-icons/fi';
import { HiPlusSm } from 'react-icons/hi';
import { Navigate } from 'react-router-dom';

import { AdminShowFiles, AdminShowPictures } from '../../components/features';
import { useCreateProduct } from '../../hooks/query/products';
import useWindowSize from '../../hooks/useWindowSize';
import {
  Container,
  Title,
  Subtitle,
  SmallInput,
  BigInput,
  MiniText,
  AddButton,
  AddButtonText,
  CategorySection,
  SaveButton,
  CancelButton,
} from './Styles';
import { createProductValidationSchema } from './utils';

export default function CreateProduct() {
  const { width: windowWidth } = useWindowSize();
  const mobileBreakpoint = 700;

  const documentInputRef = useRef(null);
  const pictureInputRef = useRef(null);
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createProductValidationSchema),
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

  if (windowWidth > mobileBreakpoint)
    return <Navigate to="/administrador/loja" />;
  return (
    <Container>
      <Title>Adicionar produto</Title>

      <Subtitle>Nome do produto:</Subtitle>
      <SmallInput />

      <Subtitle>Descrição:</Subtitle>
      <BigInput />

      <Subtitle>Vantagens:</Subtitle>
      <BigInput />

      <div>
        <Title>Imagens:</Title>
        <MiniText>Anexe as imagens do produto</MiniText>
        <AdminShowPictures
          register={register}
          control={control}
          errors={errors}
          picturesFieldArray={picturesFieldArray}
          buttonColor="black"
        />{' '}
      </div>

      <AddButton type="button" onClick={() => pictureInputRef.current.click()}>
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
        <AddButtonText>Nova Imagem</AddButtonText>
      </AddButton>

      <Title>Documentos</Title>
      <AdminShowFiles
        register={register}
        control={control}
        errors={errors}
        documentsFieldArray={documentsFieldArray}
        buttonColor="black"
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
        <AddButtonText>Novo Documento</AddButtonText>
      </AddButton>

      <CategorySection>
        <Title>Categoria</Title>
        <p>Select category</p>
      </CategorySection>

      <SaveButton>
        <FiSave size={20} />
        <p>Criar produto</p>
      </SaveButton>

      <CancelButton to="/administrador/loja">
        <p>Cancelar</p>
      </CancelButton>
    </Container>
  );
}
