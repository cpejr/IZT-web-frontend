// import { useState } from 'react';

// import { TailSpin } from 'react-loader-spinner';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import { useDeleteProducts } from '../../../hooks/query/products';
import { Container } from './Styles';

export default function ModalDeleteProduct({ _id, close }) {
  // const [isPending, setIsPending] = useState(false); // Important for modals usage

  const { mutate: deleteProduct } = useDeleteProducts({
    onSuccess: () => {
      toast.success('Produto deletado com sucesso.');
      close();
    },
    onError: (err) => {
      toast.error(err);
    },
  });

  return (
    <Container>
      <h1>Clique no botão abaixo para confirmar a exclusão do produto.</h1>
      <button type="button" onClick={deleteProduct(_id)}>
        Excluir
      </button>
    </Container>
  );
}

ModalDeleteProduct.propTypes = {
  _id: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
};
