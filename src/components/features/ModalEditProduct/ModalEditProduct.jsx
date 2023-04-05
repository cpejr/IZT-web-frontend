import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import objToFormData from 'object-to-formdata';
import PropTypes from 'prop-types';
import { useFieldArray, useForm } from 'react-hook-form';
import { FiSave } from 'react-icons/fi';

import { useGetCategories } from '../../../hooks/query/categories';
import { useUpdateProducts } from '../../../hooks/query/products';
import { DOCUMENTS_CONFIG, PICTURES_CONFIG } from '../../../utils/constants';
import putIndexIntoFiles from '../../../utils/putIndexIntoFiles';
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
    formState: { errors },
  } = useForm({
    resolver: zodResolver(editProductValidationSchema),
    defaultValues: {
      name: product.name,
      description: product.description,
      advantages: product.advantages,
      category: product.category._id,
      pictures: product.pictures
        .sort((pic1, pic2) => pic1.orderPosition - pic2.orderPosition)
        .map((pic) => ({
          id: pic.key,
          file: pic,
        })),
      documents: product.documents
        .sort((doc1, doc2) => doc1.orderPosition - doc2.orderPosition)
        .map((doc) => ({
          id: doc.key,
          file: doc,
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
  const onSubmit = (inputData) => {
    setIsPending(true);
    const { pictures, documents, ...data } = inputData;

    const [newPictures, savedPictures] = putIndexIntoFiles(pictures);
    const [newDocuments, savedDocuments] = putIndexIntoFiles(documents);

    const dataObject = {
      ...data,
      newPictures,
      savedPictures,
      newDocuments,
      savedDocuments,
    };

    const formData = objToFormData.serialize(dataObject, {
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
                type="text"
                placeholder="Digite o nome do produto"
                {...register('name')}
              />
            </Subsection>

            <Subsection>
              <Text>Descrição:</Text>
              <TextAreaModal
                id="description"
                name="description"
                placeholder="Descreva o produto"
                {...register('description')}
              />
            </Subsection>

            <Subsection>
              <Text>Vantagens:</Text>
              <TextAreaModal
                id="advantages"
                name="advantages"
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
