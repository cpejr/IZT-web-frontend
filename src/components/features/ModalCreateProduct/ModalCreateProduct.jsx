import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import objToFormData from 'object-to-formdata';
import PropTypes from 'prop-types';
import { useFieldArray, useForm } from 'react-hook-form';
import { FiSave } from 'react-icons/fi';
import { TailSpin } from 'react-loader-spinner';
import { useMediaQuery } from 'react-responsive';
import { toast } from 'react-toastify';

import { useGetCategories } from '../../../hooks/query/categories';
import { useCreateProduct } from '../../../hooks/query/products';
import { DOCUMENTS_CONFIG, PICTURES_CONFIG } from '../../../utils/constants';
import { FormSelect } from '../../common';
import AddFileButton from '../AddFileButton/AddFileButton';
import DocumentFile from '../DocumentFile/DocumentFile';
import PictureFile from '../PictureFile/PictureFile';
import {
  Container,
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
  DocumentsContainer,
  PicturesContainer,
  ErrorMessage,
} from './Styles';
import {
  buildCreateProductErrorMessage,
  buildGetCategoriesErrorMessage,
  createProductValidationSchema,
} from './utils';

export default function ModalCreateProduct({ close }) {
  // Variables
  const [isPending, setIsPending] = useState(false); // Important for modal loading
  const isSmallScreen = useMediaQuery({ maxWidth: 700 });
  const queryClient = useQueryClient();
  const documentsLimit = 3;
  const picturesLimit = 4;

  // Backend calls
  const { data: categories, isLoading: isLoadingCategories } = useGetCategories(
    {
      onError: (err) => {
        const errorMessage = buildGetCategoriesErrorMessage(err);

        toast.error(errorMessage);
      },
    }
  );
  const { mutate: createProduct } = useCreateProduct({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['products', 'searchByName'],
      });

      queryClient.invalidateQueries({
        queryKey: ['categories'], // Refresh catalog page
      });

      toast.success('Produto criado com sucesso!');

      close();
    }, // insert toast
    onError: (err) => {
      const errorMessage = buildCreateProductErrorMessage(err);

      toast.error(errorMessage);
      setIsPending(false);
    },
  });

  // Form handlers
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createProductValidationSchema),
  });
  const {
    fields: fieldsDocuments,
    append: appendDocument,
    move: moveDocument,
    update: updateDocument,
    remove: removeDocument,
  } = useFieldArray({
    control,
    name: 'documents',
  });
  const {
    fields: fieldsPictures,
    append: appendPicture,
    update: updatePicture,
    remove: removePicture,
  } = useFieldArray({
    control,
    name: 'pictures',
  });
  const onSubmit = (data) => {
    setIsPending(true);

    const formData = objToFormData.serialize(data, {
      allowEmptyArrays: true,
      noFilesWithArrayNotation: true,
      indices: true,
    });
    createProduct(formData);
  };

  if (isSmallScreen) close();

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalContent>
          <LeftSection>
            <Subsection>
              <Text>Nome do produto:</Text>
              <Input
                id="name"
                name="name"
                placeholder="Digite o nome do produto"
                error={errors?.name?.message}
                {...register('name')}
              />
              <ErrorMessage>{errors?.name?.message}</ErrorMessage>
            </Subsection>

            <Subsection>
              <Text>Descrição:</Text>
              <TextAreaModal
                id="description"
                name="description"
                placeholder="Descreva o produto"
                error={errors?.description?.message}
                {...register('description')}
              />
              <ErrorMessage>{errors?.description?.message}</ErrorMessage>
            </Subsection>

            <Subsection>
              <Text>Vantagens:</Text>
              <TextAreaModal
                id="advantages"
                name="advantages"
                placeholder="Descreva as vantagens do produto"
                error={errors?.advantages?.message}
                {...register('advantages')}
              />
              <ErrorMessage>{errors?.advantages?.message}</ErrorMessage>
            </Subsection>
          </LeftSection>

          <RightSection>
            <Subsection>
              <Text>Imagens:</Text>
              <MiniText>Anexe as imagens do produto</MiniText>
              <PicturesContainer>
                {fieldsPictures.map(({ id, file: picture }, index) => (
                  <PictureFile
                    key={id}
                    index={index}
                    picture={picture}
                    control={control}
                    buttonColor="white"
                    updatePicture={updatePicture}
                    removePicture={removePicture}
                  />
                ))}
              </PicturesContainer>
              {fieldsPictures.length < picturesLimit && (
                <AddFileButton
                  label="Novo Imagem"
                  error={errors?.pictures?.message}
                  appendFn={appendPicture}
                  allowedMimeTypes={PICTURES_CONFIG.allowedMimeTypes.join(', ')}
                  sizeLimitInMB={PICTURES_CONFIG.sizeLimitInMB}
                />
              )}
              <ErrorMessage>{errors?.pictures?.message}</ErrorMessage>
            </Subsection>

            <Subsection>
              <Text>Documentos:</Text>
              <DocumentsContainer>
                {fieldsDocuments.map(({ id, file: document }, index) => (
                  <DocumentFile
                    key={id}
                    index={index}
                    isLast={index === fieldsDocuments.length - 1}
                    document={document}
                    control={control}
                    buttonColor="white"
                    moveDocument={moveDocument}
                    updateDocument={updateDocument}
                    removeDocument={removeDocument}
                  />
                ))}
              </DocumentsContainer>
              {fieldsDocuments.length < documentsLimit && (
                <AddFileButton
                  label="Novo Documento"
                  appendFn={appendDocument}
                  allowedMimeTypes={DOCUMENTS_CONFIG.allowedMimeTypes.join(
                    ', '
                  )}
                  sizeLimitInMB={DOCUMENTS_CONFIG.sizeLimitInMB}
                />
              )}
              <ErrorMessage>{errors?.documents?.message}</ErrorMessage>
            </Subsection>

            <CategorySubsection>
              <Text>Categoria:</Text>
              {isLoadingCategories ? (
                <p>Carregando...</p>
              ) : (
                <FormSelect
                  name="category"
                  control={control}
                  errors={errors}
                  data={categories.map(({ _id, name }) => ({
                    label: name,
                    value: _id,
                  }))}
                  placeholder="Selecione a categoria"
                />
              )}
            </CategorySubsection>

            <ModalButton
              type="submit"
              disabled={isPending || isLoadingCategories}
            >
              {isPending ? (
                <>
                  <TailSpin
                    height="15"
                    width="15"
                    color="white"
                    ariaLabel="tail-spin-loading"
                    radius="5"
                  />
                  <p>Carregando</p>
                </>
              ) : (
                <>
                  <FiSave size={25} />
                  <p>Criar Produto</p>
                </>
              )}
            </ModalButton>
          </RightSection>
        </ModalContent>
      </form>
    </Container>
  );
}

ModalCreateProduct.propTypes = {
  close: PropTypes.func.isRequired,
};
