import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { FiSave } from 'react-icons/fi';
import { toast } from 'react-toastify';

import { useUpdateCategory } from '../../../hooks/query/categories';
import {
  Container,
  Label,
  Input,
  ModalContent,
  ModalButton,
  Form,
} from './Styles';
import {
  buildUpdateCategoryErrorMessage,
  updateCategoryValidationSchema,
} from './utils';

export default function ModalEditCategory({ category, close }) {
  const [isPending, setIsPending] = useState(false); // Important for modal loading
  const queryClient = useQueryClient();

  const { mutate: updateCategory } = useUpdateCategory({
    onSuccess: () => {
      Promise.all([
        queryClient.invalidateQueries({
          queryKey: ['categories'],
        }),
        queryClient.invalidateQueries({
          queryKey: ['category'],
        }),
      ]);
      toast.success('Categoria alterada com sucesso!');
      close();
    },
    onError: (err) => {
      const errorMessage = buildUpdateCategoryErrorMessage(err);

      toast.error(errorMessage);
      setIsPending(false);
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(updateCategoryValidationSchema),
  });
  const onSubmit = (data) => {
    updateCategory({ _id: category?._id, newCategoryData: data });
    setIsPending(true);
  };

  return (
    <Container>
      <ModalContent>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Label>Nome da categoria:</Label>
          <Input
            defaultValue={category?.name}
            id="name"
            name="name"
            type="name"
            {...register('name')}
          />
          {errors?.name?.message && <p>{errors?.name?.message}</p>}{' '}
          <ModalButton disabled={isPending} type="submit">
            <FiSave size={25} />
            <p>{isPending ? 'Carregando...' : 'Salvar Alterações'}</p>
          </ModalButton>
        </Form>
      </ModalContent>
    </Container>
  );
}

ModalEditCategory.propTypes = {
  category: PropTypes.object.isRequired,
  close: PropTypes.func.isRequired,
};
