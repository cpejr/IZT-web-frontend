import { useState } from 'react';

import { useQueryClient } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import { useDeleteCategory } from '../../../hooks/query/categories';
import { Container, DeleteButton, Message } from './Styles';
import { buildDeleteCategoryErrorMessage } from './utils';

export default function ModalDeleteCategory({ _id, close }) {
  const [isPending, setIsPending] = useState(false); // Important for modals usage
  const queryClient = useQueryClient();

  const { mutate: deleteCategory, isLoading } = useDeleteCategory({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['categories'],
      });

      toast.success('Categoria deletada com sucesso.');
      close();
    },
    onError: (err) => {
      const errorMessage = buildDeleteCategoryErrorMessage(err);

      toast.error(errorMessage);
      setIsPending(false);
    },
  });

  return (
    <Container>
      <Message>Tem certeza que deseja excluir a categoria?</Message>
      <DeleteButton
        type="button"
        disabled={isPending || isLoading}
        onClick={() => {
          setIsPending(true);
          deleteCategory(_id);
        }}
      >
        {/* Put proper loading here */}
        {isPending ? 'Carregando...' : 'Excluir'}
      </DeleteButton>
    </Container>
  );
}

ModalDeleteCategory.propTypes = {
  _id: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
};