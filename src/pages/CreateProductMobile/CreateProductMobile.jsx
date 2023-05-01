import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useFieldArray, useForm } from 'react-hook-form';
import { FiSave } from 'react-icons/fi';
import { useMediaQuery } from 'react-responsive';
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { FormSelect } from '../../components/common';
import { DocumentFiles, PictureFiles } from '../../components/features';
import { useGetCategories } from '../../hooks/query/categories';
import { useCreateProduct, useUploadFile } from '../../hooks/query/products';
import { PICTURES_CONFIG } from '../../utils/constants';
import {
  Container,
  Form,
  Title,
  Subtitle,
  Input,
  TextArea,
  MiniText,
  CategorySection,
  SaveButton,
  CancelButton,
  Section,
  ErrorMessage,
} from './Styles';
import {
  buildCreateProductErrorMessage,
  buildGetCategoriesErrorMessage,
  createProductValidationSchema,
  processSubmitData,
} from './utils';

export default function CreateProductMobile() {
  const isMediumScreen = useMediaQuery({ minWidth: 700 });
  const queryClient = useQueryClient();
  const navigate = useNavigate();

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

        toast.success('Produto criado com sucesso!');
        navigate('/administrador');
      },
      onError: (err) => {
        const errorMessage = buildCreateProductErrorMessage(err);

        toast.error(errorMessage);
      },
    });
  const { mutateAsync: upload } = useUploadFile({
    onError: () =>
      toast.error('Não foi possível realizar o upload de arquivos'),
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
  const documentFieldArray = useFieldArray({
    control,
    name: 'documents',
  });
  const pictureFieldArray = useFieldArray({
    control,
    name: 'pictures',
  });
  const picsIsLesserThanLimit =
    pictureFieldArray?.fields?.length < PICTURES_CONFIG.filesQuantityLimit;

  const onSubmit = async (updatedProductData) => {
    const processedProductData = await processSubmitData({
      uploadFn: upload,
      updatedProductData,
    });

    createProduct(processedProductData);
  };

  if (isMediumScreen) return <Navigate to="/administrador/listar-produtos" />;
  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>Adicionar produto</Title>

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
          {picsIsLesserThanLimit && (
            <MiniText>Anexe as imagens do produto</MiniText>
          )}
          <PictureFiles {...pictureFieldArray} isMobile />
          <ErrorMessage>{errors?.pictures?.message}</ErrorMessage>
        </Section>

        <Section>
          <Title>Documentos:</Title>
          <DocumentFiles {...documentFieldArray} />
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
                      border: '1px solid black',
                      borderRadius: '6px',
                    }
                  : {}
              }
              placeholder="Selecione a categoria"
            />
          )}
        </CategorySection>

        <SaveButton
          type="submit"
          disabled={isLoadingCreate || isLoadingCategories}
        >
          <FiSave size={20} />
          <p>{isLoadingCreate ? 'Carregando...' : 'Criar produto'}</p>
        </SaveButton>

        <CancelButton
          to="/administrador"
          disabled={isLoadingCreate || isLoadingCategories}
        >
          <p>Cancelar</p>
        </CancelButton>
      </Form>
    </Container>
  );
}
