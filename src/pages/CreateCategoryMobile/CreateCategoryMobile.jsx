import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { FiSave } from 'react-icons/fi';
import { TailSpin } from 'react-loader-spinner';
import { useMediaQuery } from 'react-responsive';
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { RegisterInput } from '../../components/common';
import { useCreateCategory } from '../../hooks/query/categories';
import { useGlobalLanguage } from '../../stores/globalLanguage';
import {
  Container,
  Form,
  Title,
  ButtonsDiv,
  SaveButton,
  CancelButton,
} from './Styles';
import { TranslateText } from './translations';
import {
  buildCreateCategoryErrorMessage,
  createCategoryValidationSchema,
  toastSuccessMessage,
} from './utils';
import {
  buildCreateCategoryErrorMessageDE,
  createCategoryValidationSchemaDE,
  toastSuccessMessageDE,
} from './utilsDE';
import {
  buildCreateCategoryErrorMessageEN,
  createCategoryValidationSchemaEN,
  toastSuccessMessageEN,
} from './utilsEN';

export default function CreateCategoryMobile() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const isMediumScreen = useMediaQuery({ minWidth: 700 });

  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateText({ globalLanguage });

  const { mutate: createCategory, isLoading } = useCreateCategory({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['categories'],
      });
      if (globalLanguage === 'EN') toast.success(toastSuccessMessageEN);
      else if (globalLanguage === 'DE') toast.success(toastSuccessMessageDE);
      else toast.success(toastSuccessMessage);
      navigate('/administrador/listar-categorias');
    },
    onError: (err) => {
      if (globalLanguage === 'EN') {
        const errorMessage = buildCreateCategoryErrorMessageEN(err);
        toast.error(errorMessage);
      } else if (globalLanguage === 'DE') {
        const errorMessage = buildCreateCategoryErrorMessageDE(err);
        toast.error(errorMessage);
      } else {
        const errorMessage = buildCreateCategoryErrorMessage(err);
        toast.error(errorMessage);
      }
    },
  });

  // Form Handlers

  let resolver;
  if (globalLanguage === 'EN')
    resolver = zodResolver(createCategoryValidationSchemaEN);
  else if (globalLanguage === 'DE')
    resolver = zodResolver(createCategoryValidationSchemaDE);
  else resolver = zodResolver(createCategoryValidationSchema);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver });
  const onSubmit = (data) => createCategory(data);

  if (isMediumScreen) return <Navigate to="/administrador/listar-categorias" />;
  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>{translations.title}</Title>

        <RegisterInput
          label="Nome da categoria:"
          labelStyle={{ fontSize: '1.5em' }}
          errorStyle={{ fontSize: '1em' }}
          name="name"
          register={register}
          errors={errors}
        />

        <ButtonsDiv>
          <SaveButton disabled={isLoading} type="submit">
            {isLoading ? (
              <>
                <TailSpin
                  height="15"
                  width="15"
                  color="white"
                  ariaLabel="tail-spin-loading"
                  radius="5"
                />
                <p>{translations.loadingText}</p>
              </>
            ) : (
              <>
                <FiSave size={25} />
                <p>{translations.saveButtonLabel}</p>
              </>
            )}
          </SaveButton>

          <CancelButton to="/administrador/listar-categorias">
            <p>{translations.cancelButtonLabel}</p>
          </CancelButton>
        </ButtonsDiv>
      </Form>
    </Container>
  );
}
