import React, { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import objToFormData from 'object-to-formdata';
import { useFieldArray, useForm } from 'react-hook-form';
import { FiSave } from 'react-icons/fi';
import { TailSpin } from 'react-loader-spinner';
import { useMediaQuery } from 'react-responsive';
import { Navigate, useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

import { FormSelect } from '../../components/common';
import {
  AddFileButton,
  DocumentFile,
  Header,
  PictureFile,
} from '../../components/features';
import { useGetCategories } from '../../hooks/query/categories';
import { useCreateProduct } from '../../hooks/query/products';
import { DOCUMENTS_CONFIG, PICTURES_CONFIG } from '../../utils/constants';
import {
  Form,
  Title,
  Subtitle,
  Input,
  TextArea,
  MiniText,
  CategorySection,
  SaveButton,
  CancelButton,
  PicturesContainer,
  DocumentsContainer,
  Section,
  ErrorMessage,
} from './Styles';
import { TranslateText } from './translations';
import {
  buildCreateProductErrorMessage,
  buildGetCategoriesErrorMessage,
  createProductValidationSchema,
} from './utils';

export default function CreateProductMobile() {
  const isMediumScreen = useMediaQuery({ minWidth: 700 });
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const documentsLimit = 3;
  const picturesLimit = 4;

  const [currentLanguage, setCurrentLanguage] = useState('PT');
  const translations = TranslateText({ currentLanguage });

  // Backend calls
  const { data: categories, isLoading: isLoadingCategories } = useGetCategories(
    {
      onError: (err) => {
        const errorMessage = buildGetCategoriesErrorMessage(err);

        toast.error(errorMessage);
      },
    }
  );
  const { mutate: createProduct, isLoading: isLoadingCreate } =
    useCreateProduct({
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['products', 'searchByName'],
        });

        queryClient.invalidateQueries({
          queryKey: ['categories'], // Refresh catalog page
        });

        toast.success('Produto criado com sucesso!');
        navigate('/administrador');
      },
      onError: (err) => {
        const errorMessage = buildCreateProductErrorMessage(err);

        toast.error(errorMessage);
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
    const formData = objToFormData.serialize(data, {
      allowEmptyArrays: true,
      noFilesWithArrayNotation: true,
      indices: true,
    });
    createProduct(formData);
  };

  if (isMediumScreen) return <Navigate to="/administrador" />;
  return (
    <>
      <Header setCurrentLanguage={setCurrentLanguage} />

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>{translations.pageTitle}</Title>

        <Section>
          <Subtitle>{translations.nameLabel}</Subtitle>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Digite o nome do produto"
            error={errors?.name?.message}
            {...register('name')}
          />
          <ErrorMessage>{errors?.name?.message}</ErrorMessage>
        </Section>

        <Section>
          <Subtitle>{translations.descriptionLabel}</Subtitle>
          <TextArea
            id="description"
            name="description"
            placeholder="Descreva o produto"
            error={errors?.description?.message}
            {...register('description')}
          />
          <ErrorMessage>{errors?.description?.message}</ErrorMessage>
        </Section>

        <Section>
          <Subtitle>{translations.advantagesLabel}</Subtitle>
          <TextArea
            id="advantages"
            type="advantages"
            placeholder="Descreva as vantagens do produto"
            error={errors?.advantages?.message}
            {...register('advantages')}
          />
          <ErrorMessage>{errors?.advantages?.message}</ErrorMessage>
        </Section>

        <Section>
          <Title>{translations.imagesTitle}</Title>
          {fieldsPictures.length < picturesLimit && (
            <MiniText>{translations.addImageHint}</MiniText>
          )}
          <PicturesContainer>
            {fieldsPictures.map(({ id, file: picture }, index) => (
              <PictureFile
                key={id}
                index={index}
                picture={picture}
                control={control}
                buttonColor="black"
                updatePicture={updatePicture}
                removePicture={removePicture}
              />
            ))}
          </PicturesContainer>
          {fieldsPictures.length < picturesLimit && (
            <AddFileButton
              color="black"
              label={translations.addImageButtonLabel}
              appendFn={appendPicture}
              allowedMimeTypes={PICTURES_CONFIG.allowedMimeTypes.join(', ')}
              sizeLimitInMB={PICTURES_CONFIG.sizeLimitInMB}
            />
          )}
          <ErrorMessage>{errors?.pictures?.message}</ErrorMessage>
        </Section>

        <Section>
          <Title>{translations.documentsTitle}</Title>
          <DocumentsContainer>
            {fieldsDocuments.map(({ id, file: document }, index) => (
              <DocumentFile
                key={id}
                index={index}
                isLast={index === fieldsDocuments.length - 1}
                document={document}
                control={control}
                buttonColor="black"
                moveDocument={moveDocument}
                updateDocument={updateDocument}
                removeDocument={removeDocument}
              />
            ))}
          </DocumentsContainer>
          {fieldsDocuments.length < documentsLimit && (
            <AddFileButton
              color="black"
              label={translations.newDocumentButtonLabel}
              appendFn={appendDocument}
              allowedMimeTypes={DOCUMENTS_CONFIG.allowedMimeTypes.join(', ')}
              sizeLimitInMB={DOCUMENTS_CONFIG.sizeLimitInMB}
            />
          )}
        </Section>

        <CategorySection>
          <Title>{translations.categoryLabel}</Title>
          {isLoadingCategories ? (
            <p>{translations.loadingText1}</p>
          ) : (
            <FormSelect
              name="category"
              control={control}
              errors={errors}
              data={categories.map(({ _id, name }) => ({
                label: name,
                value: _id,
              }))}
              // Alter this
              style={
                !errors?.category?.message
                  ? {
                      border: '0.1rem solid black',
                      borderRadius: '0.6rem',
                    }
                  : {}
              }
              placeholder={translations.selectCategoryLabel}
            />
          )}
        </CategorySection>

        <SaveButton
          type="submit"
          disabled={isLoadingCreate || isLoadingCategories}
        >
          {isLoadingCreate ? (
            <>
              <TailSpin
                height="15"
                width="15"
                color="white"
                ariaLabel="tail-spin-loading"
                radius="5"
              />
              <p>{translations.loadingText2}</p>
            </>
          ) : (
            <>
              <FiSave size={25} />
              <p>{translations.saveButtonLabel}</p>
            </>
          )}
        </SaveButton>

        <CancelButton
          to="/administrador/listar-produtos"
          disabled={isLoadingCreate || isLoadingCategories}
        >
          <p>{translations.cancelButtonLabel}</p>
        </CancelButton>
      </Form>
    </>
  );
}
