import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { FiSave } from 'react-icons/fi';

import { useCreateCategory } from '../../../hooks/query/categories';
import {
  Container,
  Form,
  Label,
  Input,
  ModalContent,
  ModalButton,
} from './Styles';
import {
  buildCreateCategoryErrorMessage,
  createCategoryValidationSchema,
} from './utils';

export default function ModalCreateCategory({ close }) {
  const [isPending, setIsPending] = useState(false); // Important for modal loading

  const queryClient = useQueryClient();
  const { mutate: createCategory } = useCreateCategory({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['categories', 'searchByName'],
      });
      close();
    },
    onError: (err) => {
      const errorMessage = buildCreateCategoryErrorMessage(err);

      // Do something to the errorMessage
      alert(errorMessage);
      setIsPending(false);
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createCategoryValidationSchema),
  });
  const onSubmit = (data) => {
    createCategory(data);
    setIsPending(true);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <ModalContent>
          <Label>Nome da categoria:</Label>
          <Input
            id="name"
            name="name"
            type="name"
            {...register('name')}
            placeholder="Digite aqui o nome da categoria"
          />
          {errors?.name?.message && <p>{errors?.name?.message}</p>}
          <ModalButton disabled={isPending} type="submit">
            <FiSave size={25} />
            <p>{isPending ? 'Carregando...' : 'Criar Categoria'}</p>
          </ModalButton>
        </ModalContent>
      </Form>
    </Container>
  );
}

ModalCreateCategory.propTypes = {
  close: PropTypes.func.isRequired,
};
