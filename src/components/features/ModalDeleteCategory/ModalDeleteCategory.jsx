// import { useState } from 'react';

// import { TailSpin } from 'react-loader-spinner';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import { useDeleteCategory } from '../../../hooks/query/categories';
import { Container, Delete, Message } from './Styles';

export default function ModalDeleteCategory({ _id, close }) {
  const { mutate: deleteCategory } = useDeleteCategory({
    onSuccess: () => {
      toast.success('Categoria deletada com sucesso.');
      close();
    },
    onError: (err) => {
      toast.error(err);
    },
  });

  return (
    <Container>
      <Message>
        Clique no botão abaixo para confirmar a exclusão da categoria:
      </Message>
      <Delete type="button" onClick={() => deleteCategory(_id)}>
        Excluir
      </Delete>
    </Container>
  );
}

ModalDeleteCategory.propTypes = {
  _id: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
};
