import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import objToFormData from 'object-to-formdata';
import { useFieldArray, useForm } from 'react-hook-form';
import { FiSave } from 'react-icons/fi';
import { TailSpin } from 'react-loader-spinner';
import { useMediaQuery } from 'react-responsive';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { FormSelect } from '../../components/common';
import {
  AddFileButton,
  DocumentFile,
  PictureFile,
} from '../../components/features';
import { useGetCategories } from '../../hooks/query/categories';
import { useUpdateProducts } from '../../hooks/query/products';
import { DOCUMENTS_CONFIG, PICTURES_CONFIG } from '../../utils/constants';
import separateFileTypes from '../../utils/separateFileTypes';
import {
  Container,
  Title,
  Subtitle,
  MiniText,
  CategorySection,
  SaveButton,
  CancelButton,
  Form,
  Section,
  Input,
  TextArea,
  PicturesContainer,
  DocumentsContainer,
  ErrorMessage,
} from './Styles';
import {
  buildEditProductErrorMessage,
  editProductValidationSchema,
} from './utils';

export default function EditProductMobile() {
  // Variables
  const navigate = useNavigate();
  const product = useLocation().state;
  const queryClient = useQueryClient();
  const isMediumScreen = useMediaQuery({ minWidth: 700 });

  const documentsLimit = 3;
  const picturesLimit = 5;

  // Backend calls
  const { data: categories, isLoading: isLoadingCategories } = useGetCategories(
    {
      onError: (err) => {
        const errorMessage = buildEditProductErrorMessage(err);

        toast.error(errorMessage);
      },
    }
  );
  const { mutate: updateProduct, isLoading: isLoadingUpdate } =
    useUpdateProducts({
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['products', 'searchByName'],
        });

        toast.success('Produto atualizado com sucesso!');
        navigate('/administrador');
      },
      onError: (err) => {
        const errorMessage = buildEditProductErrorMessage(err);

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
    resolver: zodResolver(editProductValidationSchema),
    defaultValues: {
      name: product?.name,
      description: product?.description,
      advantages: product?.advantages,
      category: product?.category._id,
      pictures: product?.pictures?.map((pic) => ({
        id: pic.key,
        file: pic,
      })),
      documents: product?.documents?.map((doc) => ({
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
    const { pictures, documents, ...data } = inputData;

    const [newPictures, savedPictures] = separateFileTypes(pictures);
    const [newDocuments, savedDocuments] = separateFileTypes(documents);

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

    updateProduct({ _id: product?._id, newProductData: formData });
  };

  if (isMediumScreen || !product) return <Navigate to="/administrador" />;
  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>Editar produto</Title>

        <Section>
          <Subtitle>Nome do produto:</Subtitle>
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
          <Subtitle>Descrição:</Subtitle>
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
          <Subtitle>Vantagens:</Subtitle>
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
          <Title>Imagens:</Title>
          {fieldsPictures.length < picturesLimit && (
            <MiniText>Anexe as imagens do produto</MiniText>
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
              label="Novo Imagem"
              appendFn={appendPicture}
              allowedMimeTypes={PICTURES_CONFIG.allowedMimeTypes.join(', ')}
              sizeLimitInMB={PICTURES_CONFIG.sizeLimitInMB}
            />
          )}
          <ErrorMessage>{errors?.pictures?.message}</ErrorMessage>
        </Section>

        <Section>
          <Title>Documentos:</Title>
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
              label="Novo Documento"
              appendFn={appendDocument}
              allowedMimeTypes={DOCUMENTS_CONFIG.allowedMimeTypes.join(', ')}
              sizeLimitInMB={DOCUMENTS_CONFIG.sizeLimitInMB}
            />
          )}
        </Section>

        <CategorySection>
          <Title>Categoria:</Title>
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
              // Alter this
              style={
                !errors?.category?.message
                  ? {
                      border: '0.1rem solid black',
                      borderRadius: '0.1rem',
                    }
                  : {}
              }
              placeholder="Selecione a categoria"
            />
          )}
        </CategorySection>

        <SaveButton
          type="submit"
          disabled={isLoadingUpdate || isLoadingCategories}
        >
          {isLoadingUpdate ? (
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
              <p>Editar Produto</p>
            </>
          )}
        </SaveButton>

        <CancelButton to="/administrador/listar-produtos">
          <p>Cancelar</p>
        </CancelButton>
      </Form>
    </Container>
  );
}
