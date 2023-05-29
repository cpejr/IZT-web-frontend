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
import {
  Container,
  Form,
  Title,
  ButtonsDiv,
  SaveButton,
  CancelButton,
} from './Styles';
import {
  buildCreateCategoryErrorMessage,
  createCategoryValidationSchema,
} from './utils';

export default function CreateCategoryMobile() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const isMediumScreen = useMediaQuery({ minWidth: 700 });

  const { mutate: createCategory, isLoading } = useCreateCategory({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['categories'],
      });

      toast.success('Categoria criada com sucesso!');
      navigate('/administrador/listar-categorias');
    },
    onError: (err) => {
      const errorMessage = buildCreateCategoryErrorMessage(err);

      toast.error(errorMessage);
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

  if (isMediumScreen) return <Navigate to="/administrador/listar-categorias" />;
  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>Adicionar Categoria</Title>

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
                <p>Carregando</p>
              </>
            ) : (
              <>
                <FiSave size={25} />
                <p>Adicionar Categoria</p>
              </>
            )}
          </SaveButton>

          <CancelButton to="/administrador/listar-categorias">
            <p>Cancelar</p>
          </CancelButton>
        </ButtonsDiv>
      </Form>
    </Container>
  );
}
