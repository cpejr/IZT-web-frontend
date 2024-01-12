import { useState } from 'react';

import { useQueryClient } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import { TailSpin } from 'react-loader-spinner';
import { toast } from 'react-toastify';

import { useGlobalLanguage } from '../../../stores/globalLanguage';
import { TranslateText } from './translations';

import { useDeleteProducts } from '../../../hooks/query/products';
import { Container, DeleteButton, Message } from './Styles';
import { buildDeleteProductErrorMessage } from './utils';

export default function ModalDeleteProduct({ _id, close }) {
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateText({ globalLanguage });

  const [isPending, setIsPending] = useState(false); // Important for modals usage
  const queryClient = useQueryClient();

  const { mutate: deleteProduct, isLoading } = useDeleteProducts({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['products'],
      });

      toast.success('Produto deletado com sucesso.');
      close();
    },
    onError: (err) => {
      const errorMessage = buildDeleteProductErrorMessage(err);

      toast.error(errorMessage);
      setIsPending(false);
    },
  });

  return (
    <Container>
      <Message>{translations.confirmation}</Message>
      <DeleteButton
        type="button"
        disabled={isPending || isLoading}
        onClick={() => {
          setIsPending(true);
          deleteProduct(_id);
        }}
      >
        {isPending ? (
          <>
            <TailSpin
              height="15"
              width="15"
              color="white"
              ariaLabel="tail-spin-loading"
              radius="5"
            />
            <p>{translations.awaiting}</p>
          </>
        ) : (
          <p>{translations.deleteProd}</p>
        )}
      </DeleteButton>
    </Container>
  );
}

ModalDeleteProduct.propTypes = {
  _id: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
};
