import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import objToFormData from 'object-to-formdata';
import PropTypes from 'prop-types';
import { useFieldArray, useForm } from 'react-hook-form';
import { FiSave } from 'react-icons/fi';
import { TailSpin } from 'react-loader-spinner';
import { toast } from 'react-toastify';

import { useGlobalLanguage } from '../../../stores/globalLanguage';
import { TranslateText } from './translations';

import { useGetCategories } from '../../../hooks/query/categories';
import { useUpdateProducts } from '../../../hooks/query/products';
import { DOCUMENTS_CONFIG, PICTURES_CONFIG } from '../../../utils/constants';
import separateFileTypes from '../../../utils/separateFileTypes';
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
  editProductValidationSchema,
} from './utils';

export default function ModalEditProduct({ product, close }) {
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateText({ globalLanguage });

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

      toast.success(<p>{translations.editProduct}</p>);
      close();
    },
    onError: (err) => {
      const errorMessage = buildEditProductErrorMessage(err);

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
    resolver: zodResolver(editProductValidationSchema),
    defaultValues: {
      name: product.name,
      description: product.description,
      advantages: product.advantages,
      category: product.category._id,
      pictures: product.pictures.map((pic) => ({
        id: pic.key,
        file: pic,
      })),
      documents: product.documents.map((doc) => ({
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

    const [oldPictures, newPictures] = separateFileTypes(pictures);
    const [oldDocuments, newDocuments] = separateFileTypes(documents);

    const dataObject = {
      ...data,
      oldPictures,
      newPictures,
      oldDocuments,
      newDocuments,
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
              <Text>{translations.productName}</Text>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder={translations.typeProductName}
                error={errors?.name?.message}
                {...register('name')}
              />
              <ErrorMessage>{errors?.name?.message}</ErrorMessage>
            </Subsection>

            <Subsection>
              <Text>{translations.description}</Text>
              <TextAreaModal
                id="description"
                name="description"
                placeholder={translations.describeProduct}
                error={errors?.description?.message}
                {...register('description')}
              />
              <ErrorMessage>{errors?.description?.message}</ErrorMessage>
            </Subsection>

            <Subsection>
              <Text>{translations.benefits}</Text>
              <TextAreaModal
                id="advantages"
                name="advantages"
                placeholder={translations.describeBenefits}
                error={errors?.advantages?.message}
                {...register('advantages')}
              />
              <ErrorMessage>{errors?.advantages?.message}</ErrorMessage>
            </Subsection>
          </LeftSection>

          <RightSection>
            <Subsection>
              <Text>{translations.images}</Text>
              <MiniText>{translations.attachImages}</MiniText>
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
                  label={translations.newImage}
                  appendFn={appendPicture}
                  allowedMimeTypes={PICTURES_CONFIG.allowedMimeTypes.join(', ')}
                  sizeLimitInMB={PICTURES_CONFIG.sizeLimitInMB}
                />
              )}
              <ErrorMessage>{errors?.pictures?.message}</ErrorMessage>
            </Subsection>

            <Subsection>
              <Text>{translations.documents}</Text>
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
                <ErrorMessage>{errors?.pictures?.message}</ErrorMessage>
              </DocumentsContainer>

              {fieldsDocuments.length < documentsLimit && (
                <AddFileButton
                  label={translations.newDocument}
                  appendFn={appendDocument}
                  allowedMimeTypes={DOCUMENTS_CONFIG.allowedMimeTypes.join(
                    ', '
                  )}
                  sizeLimitInMB={DOCUMENTS_CONFIG.sizeLimitInMB}
                />
              )}
            </Subsection>

            <CategorySubsection>
              <Text>{translations.category}</Text>
              {isLoadingCategories ? (
                <p>{translations.loading}...</p>
              ) : (
                <FormSelect
                  name="category"
                  control={control}
                  errors={errors}
                  data={categories.map(({ _id, name }) => ({
                    label: name,
                    value: _id,
                  }))}
                  placeholder={translations.selectCategory}
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
                  <p>{translations.loading}</p>
                </>
              ) : (
                <>
                  <FiSave size={25} />
                  <p>{translations.saveEditions}</p>
                </>
              )}
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