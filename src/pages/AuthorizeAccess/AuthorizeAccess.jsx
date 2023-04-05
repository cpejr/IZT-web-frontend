import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { FiSave } from 'react-icons/fi';
import { Navigate, useNavigate } from 'react-router-dom';

import { RegisterInput } from '../../components/common';
import { useCreateCategory } from '../../hooks/query/categories';
import useWindowSize from '../../hooks/useWindowSize';
import {
  Container,
  Form,
  Title,
  ButtonsDiv,
  SaveButton,
  CancelButton,
} from './Styles';
import { modalAuthorizeAccessValidationSchema } from './utils';

export default function CreateCategory() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: createCategory, isLoading } = useCreateCategory({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['categories', 'searchByName'],
      });
      navigate('/administrador/loja/listar-categorias');
    },
    onError: (err) => {
      const errorMessage = buildCreateCategoryErrorMessage(err);

      // Do something to the errorMessage
      alert(errorMessage);
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createCategoryValidationSchema),
  });
  const onSubmit = (data) => createCategory(data);

  const { width: windowWidth } = useWindowSize();
  const mobileBreakpoint = 700;

  if (windowWidth > mobileBreakpoint)
    return <Navigate to="/administrador/loja/liberacao-cursos" />;
  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>Adicionar Categoria</Title>

        <RegisterInput
          label="Email:"
          labelStyle={{ fontSize: '1.5em' }}
          errorStyle={{ fontSize: '1em' }}
          name="email"
          register={register}
          errors={errors}
        />

        <ButtonsDiv>
          <SaveButton disabled={isLoading} type="submit">
            <FiSave size={20} />
            <p>{isLoading ? 'Carregando...' : '+ Autorizar Acesso'}</p>
          </SaveButton>

          <CancelButton to="/administrador/loja/liberacao-cursos">
            <p>Cancelar</p>
          </CancelButton>
        </ButtonsDiv>
      </Form>
    </Container>
  );
}
