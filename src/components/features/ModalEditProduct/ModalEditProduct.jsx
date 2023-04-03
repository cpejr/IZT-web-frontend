import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { serialize } from 'object-to-formdata';
import PropTypes from 'prop-types';
import { useFieldArray, useForm } from 'react-hook-form';
import { FiSave } from 'react-icons/fi';

import { useGetCategories } from '../../../hooks/query/categories';
import { useUpdateProducts } from '../../../hooks/query/products';
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
} from './Styles';
import {
  buildEditProductErrorMessage,
  editProductValidationSchema,
} from './utils';

export default function ModalEditProduct({ product, close }) {
  // Variables
  const [isPending, setIsPending] = useState(false); // Important for modal loading
  const queryClient = useQueryClient();
  const documentsLimit = 3;
  const picturesLimit = 4;

  // Backend calls
  const { data: categories, isLoading: isLoadingCategories } = useGetCategories(
    {
      onError: (err) => {
        const errorMessage = buildEditProductErrorMessage(err);

        // Do something to the errorMessage
        alert(errorMessage);
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

      // Do something to the errorMessage
      alert(errorMessage);
      setIsPending(false);
    },
  });

  // Form handlers
  const {
    handleSubmit,
    register,
    control,
    // reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(editProductValidationSchema),
    defaultValues: {
      name: product.name,
      description: product.description,
      advantages: product.advantages,
      category: product.category._id,
      pictures: product.pictures.map((picture) => ({
        id: picture._id,
        file: picture,
      })),
      documents: product.documents.map((document) => ({
        id: document._id,
        file: document,
      })),
    },
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
    const { pictures, documents, ...formatedData } = data;

    formatedData.picturesIndexes = pictures.reduce((acc, picture, index) => {
      if (picture instanceof File)
        acc.newPictures = [...(acc.newPictures || []), index];
      else acc.existingPictures = [...(acc.existingPictures || []), index];

      return acc;
    }, {});

    formatedData.documentsIndexes = documents.reduce((acc, document, index) => {
      if (document instanceof File)
        acc.newDocuments = [...(acc.newDocuments || []), index];
      else acc.existingDocuments = [...(acc.existingDocuments || []), index];

      return acc;
    }, {});

    formatedData.newPictures = pictures.filter(
      (picture) => picture instanceof File
    );
    formatedData.existingPictures = pictures.filter(
      (picture) => !(picture instanceof File)
    );

    formatedData.newDocuments = documents.filter(
      (document) => document instanceof File
    );
    formatedData.existingDocuments = documents.filter(
      (document) => !(document instanceof File)
    );

    const formData = serialize(formatedData, {
      allowEmptyArrays: true,
      noFilesWithArrayNotation: true,
      indices: true,
    });

    updateProduct({ _id: product._id, newProductData: formData });
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

            <ModalButton type="submit">
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
