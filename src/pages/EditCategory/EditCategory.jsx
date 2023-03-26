import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { FiSave } from 'react-icons/fi';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';

import { RegisterInput } from '../../components/common';
import { useUpdateCategory } from '../../hooks/query/categories';
import useWindowSize from '../../hooks/useWindowSize';
import { Container, Title, SaveButton, CancelButton, Form } from './Styles';
import {
  buildupdateCategoryErrorMessage,
  updateCategoryValidationSchema,
} from './utils';

export default function EditCategory() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const currentCategory = useLocation().state;

  const { mutate: updateCategory, isLoading } = useUpdateCategory({
    onSuccess: () => {
      Promise.all([
        queryClient.invalidateQueries({
          queryKey: ['categories', 'searchByName'],
        }),
        queryClient.invalidateQueries({
          queryKey: ['category'],
        }),
      ]);
      navigate('/administrador/loja/listar-categorias');
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
    updateCategory({ _id: currentCategory?._id, newCategoryData: data });

  const { width: windowWidth } = useWindowSize();
  const mobileBreakpoint = 700;

  if (windowWidth > mobileBreakpoint)
    return <Navigate to="/administrador/loja/listar-categorias" />;
  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>Editar Categoria</Title>

        <RegisterInput
          label="Nome da categoria:"
          labelStyle={{ fontSize: '1.5em' }}
          errorStyle={{ fontSize: '1em' }}
          name="name"
          defaultValue={currentCategory?.name}
          register={register}
          errors={errors}
        />

        <SaveButton disabled={isLoading} type="submit">
          <FiSave size={20} />
          <p>{isLoading ? 'Carregando...' : 'Editar categoria'}</p>
        </SaveButton>
      </Form>

      <CancelButton to="/administrador/loja/listar-categorias">
        <p>Cancelar</p>
      </CancelButton>
    </Container>
  );
}
