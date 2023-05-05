// import { useState } from 'react';

// import { TailSpin } from 'react-loader-spinner';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import { useDeleteCategory } from '../../../hooks/query/categories';
import { Container } from './Styles';

export default function ModalDeleteCategory({ _id, close }) {
  // const [isPending, setIsPending] = useState(false); // Important for modals usage

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
      <h1>Clique no botão abaixo para confirmar a exclusão da catrgoria.</h1>
      <button type="button" onClick={deleteCategory(_id)}>
        Excluir
      </button>
    </Container>
  );
}

ModalDeleteCategory.propTypes = {
  _id: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
};
