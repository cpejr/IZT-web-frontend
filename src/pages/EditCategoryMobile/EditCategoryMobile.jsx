import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { FiSave } from 'react-icons/fi';
import { useMediaQuery } from 'react-responsive';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';

import { RegisterInput } from '../../components/common';
import { useUpdateCategory } from '../../hooks/query/categories';
import { Container, Title, SaveButton, CancelButton, Form } from './Styles';
import {
  buildupdateCategoryErrorMessage,
  updateCategoryValidationSchema,
} from './utils';

export default function EditCategoryMobile() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const category = useLocation().state;
  const isMediumScreen = useMediaQuery({ minWidth: 700 });

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
      navigate('/administrador/listar-categorias');
    },
    onError: (err) => {
      const errorMessage = buildupdateCategoryErrorMessage(err);

      // Do something to the errorMessage
      alert(errorMessage);
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
        <Title>Editar Categoria</Title>

        <RegisterInput
          label="Nome da categoria:"
          labelStyle={{ fontSize: '1.5em' }}
          errorStyle={{ fontSize: '1em' }}
          name="name"
          defaultValue={category?.name}
          register={register}
          errors={errors}
        />

        <SaveButton disabled={isLoading} type="submit">
          <FiSave size={20} />
          <p>{isLoading ? 'Carregando...' : 'Editar categoria'}</p>
        </SaveButton>
      </Form>

      <CancelButton to="/administrador/listar-categorias">
        <p>Cancelar</p>
      </CancelButton>
    </Container>
  );
}
