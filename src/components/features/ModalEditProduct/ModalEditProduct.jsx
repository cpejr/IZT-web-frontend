import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import { useFieldArray, useForm } from 'react-hook-form';
import { FiSave } from 'react-icons/fi';
import { toast } from 'react-toastify';

import { useGetCategories } from '../../../hooks/query/categories';
import {
  useDeleteFile,
  useUpdateProducts,
  useUploadFile,
} from '../../../hooks/query/products';
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
  ModalButton,
  Form,
  Input,
  TextAreaModal,
  PicturesContainer,
  DocumentsContainer,
  ErrorMessage,
} from './Styles';
import {
  buildEditProductErrorMessage,
  buildGetCategoriesErrorMessage,
  defaultValues,
  editProductValidationSchema,
  processSubmitData,
} from './utils';

export default function ModalEditProduct({ product, close }) {
  // Variables
  const [isPending, setIsPending] = useState(false); // Important for modal loading
  const queryClient = useQueryClient();
  const documentsLimit = 3;
  const picturesLimit = 5;

  // Backend calls
  const { data: categories, isLoading: isLoadingCategories } = useGetCategories(
    {
      onError: (err) => {
        const errorMessage = buildGetCategoriesErrorMessage(err);

        toast.error(errorMessage);
        close();
      },
    }
  );
  const { mutate: updateProduct } = useUpdateProducts({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['products', 'searchByName'],
      });

      close();
    },
    onError: (err) => {
      const errorMessage = buildEditProductErrorMessage(err);

      toast.error(errorMessage);
      setIsPending(false);
    },
  });
  const { mutateAsync: upload } = useUploadFile({
    onError: () => {
      toast.error('Não foi possível realizar o upload de arquivos');
      setIsPending(false);
    },
  });
  const { mutateAsync: deleteFile } = useDeleteFile({
    onError: () => {
      toast.error('Não foi possível excluir os arquivos');
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
    resolver: zodResolver(editProductValidationSchema),
    defaultValues: defaultValues(product),
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
  const onSubmit = async (updatedProductData) => {
    setIsPending(true);

    const processedProductData = await processSubmitData({
      uploadFn: upload,
      deleteFn: deleteFile,
      updatedProductData,
      oldProductData: product,
    });

    updateProduct({
      _id: product._id,
      updatedData: processedProductData,
    });
  };

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
                type="text"
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
                  label="Novo imagem"
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
                  label="Novo documento"
                  appendFn={appendDocument}
                  allowedMimeTypes={DOCUMENTS_CONFIG.allowedMimeTypes.join(
                    ', '
                  )}
                  sizeLimitInMB={DOCUMENTS_CONFIG.sizeLimitInMB}
                />
              )}
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
              <FiSave size={20} />
              <p>{isPending ? 'Carregando...' : 'Editar produto'}</p>
            </ModalButton>
          </RightSection>
        </ModalContent>
      </Form>
    </Container>
  );
}

ModalEditProduct.propTypes = {
  product: PropTypes.object.isRequired,
  close: PropTypes.func.isRequired,
};
