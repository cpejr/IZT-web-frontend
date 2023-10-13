import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { FiSave } from 'react-icons/fi';
import { TailSpin } from 'react-loader-spinner';
import { useMediaQuery } from 'react-responsive';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { RegisterInput } from '../../components/common';
import { useUpdateCategory } from '../../hooks/query/categories';
import { useGlobalLanguage } from '../../stores/globalLanguage';
import { Container, Title, SaveButton, CancelButton, Form } from './Styles';
import { TranslateText } from './translations';
import {
  buildupdateCategoryErrorMessage,
  updateCategoryValidationSchema,
} from './utils';

export default function EditCategoryMobile() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const category = useLocation().state;
  const isMediumScreen = useMediaQuery({ minWidth: 700 });

  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateText({ globalLanguage });

  const { mutate: updateCategory, isLoading } = useUpdateCategory({
    onSuccess: () => {
      Promise.all([
        queryClient.invalidateQueries({
          queryKey: ['categories'],
        }),
        queryClient.invalidateQueries({
          queryKey: ['category'],
        }),
      ]);

      toast.success('Categoria atualizada com sucesso!');
      navigate('/administrador/listar-categorias');
    },
    onError: (err) => {
      const errorMessage = buildupdateCategoryErrorMessage(err);

      toast.error(errorMessage);
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(updateCategoryValidationSchema),
  });
  const onSubmit = (data) =>
    updateCategory({ _id: category?._id, newCategoryData: data });

  if (isMediumScreen || !category)
    return <Navigate to="/administrador/listar-categorias" />;
  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>{translations.title}</Title>

        <RegisterInput
          label={translations.nameLabel}
          labelStyle={{ fontSize: '1.5em' }}
          errorStyle={{ fontSize: '1em' }}
          name="name"
          defaultValue={category?.name}
          register={register}
          errors={errors}
        />

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
              <FiSave size={20} />
              <p>{translations.saveButtonLabel}</p>
            </>
          )}
        </SaveButton>
      </Form>

      <CancelButton to="/administrador/listar-categorias">
        <p>{translations.cancelButtonLabel}</p>
      </CancelButton>
    </Container>
  );
}
