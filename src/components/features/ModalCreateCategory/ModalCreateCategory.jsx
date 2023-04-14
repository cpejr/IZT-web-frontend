import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { FiSave } from 'react-icons/fi';
import { useMediaQuery } from 'react-responsive';
import { toast } from 'react-toastify';

import { useCreateCategory } from '../../../hooks/query/categories';
import {
  Container,
  Form,
  Label,
  Input,
  ModalContent,
  ModalButton,
  ErrorMessage,
} from './Styles';
import {
  buildCreateCategoryErrorMessage,
  createCategoryValidationSchema,
} from './utils';

export default function ModalCreateCategory({ close }) {
  const [isPending, setIsPending] = useState(false); // Important for modal loading
  const isSmallScreen = useMediaQuery({ maxWidth: 700 });
  const queryClient = useQueryClient();

  const { mutate: createCategory } = useCreateCategory({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['categories'],
      });

      toast.success('Categoria criada com sucesso!');
      close();
    },
    onError: (err) => {
      const errorMessage = buildCreateCategoryErrorMessage(err);

      toast.error(errorMessage);
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

  if (isSmallScreen) close();

  const errorMessage = errors?.name?.message;

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <ModalContent>
          <Label htmlFor="name">Nome da categoria:</Label>
          <Input
            id="name"
            name="name"
            placeholder="Digite aqui o nome da categoria"
            error={!!errorMessage}
            {...register('name')}
          />
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
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
