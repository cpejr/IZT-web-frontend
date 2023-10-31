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
import { useGlobalLanguage } from '../../../stores/globalLanguage';
import { DOCUMENTS_CONFIG, PICTURES_CONFIG } from '../../../utils/constants';
import { FormSelect } from '../../common';
import AddFileButton from '../AddFileButton/AddFileButton';
import DocumentFile from '../DocumentFile/DocumentFile';
import { buildGetCategoriesErrorMessageDE } from '../ModalEditProduct/utilsDE';
import { buildGetCategoriesErrorMessageEN } from '../ModalEditProduct/utilsEN';
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
import { TranslateText } from './translations';
import {
  buildCreateProductErrorMessage,
  buildGetCategoriesErrorMessage,
  createProductValidationSchema,
} from './utils';
import {
  buildCreateProductErrorMessageDE,
  createProductValidationSchemaDE,
} from './utilsDE';
import {
  buildCreateProductErrorMessageEN,
  createProductValidationSchemaEN,
} from './utilsEN';

export default function ModalCreateProduct({ close }) {
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateText({ globalLanguage });

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
        if (globalLanguage === 'PT') {
          const errorMessage = buildGetCategoriesErrorMessage(err);
          toast.error(errorMessage);
        } else if (globalLanguage === 'EN') {
          const errorMessage = buildGetCategoriesErrorMessageEN(err);
          toast.error(errorMessage);
        } else {
          const errorMessage = buildGetCategoriesErrorMessageDE(err);
          toast.error(errorMessage);
        }
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

      toast.success(translations.createProduct);
      close();
    }, // insert toast
    onError: (err) => {
      if (globalLanguage === 'PT') {
        const errorMessage = buildCreateProductErrorMessage(err);
        toast.error(errorMessage);
      } else if (globalLanguage === 'EN') {
        const errorMessage = buildCreateProductErrorMessageEN(err);
        toast.error(errorMessage);
      } else {
        const errorMessage = buildCreateProductErrorMessageDE(err);
        toast.error(errorMessage);
      }
      setIsPending(false);
    },
  });

  let validationSchema;

  if (globalLanguage === 'PT') {
    validationSchema = createProductValidationSchema;
  } else if (globalLanguage === 'EN') {
    validationSchema = createProductValidationSchemaEN;
  } else {
    validationSchema = createProductValidationSchemaDE;
  }

  // Form handlers
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validationSchema),
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
              <Text>{translations.productName}</Text>
              <Input
                id="name"
                name="name"
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
                  error={errors?.pictures?.message}
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
                  <p>{translations.createProductButton}</p>
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
