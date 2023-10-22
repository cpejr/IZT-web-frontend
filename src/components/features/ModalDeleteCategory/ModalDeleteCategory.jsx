import { useState } from 'react';

import { useQueryClient } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import { TailSpin } from 'react-loader-spinner';
import { toast } from 'react-toastify';

import { useGlobalLanguage } from '../../../stores/globalLanguage';
import { TranslateText } from './translations';

import { useDeleteCategory } from '../../../hooks/query/categories';
import { Container, DeleteButton, Message } from './Styles';
import { buildDeleteCategoryErrorMessage } from './utils';

export default function ModalDeleteCategory({ _id, close }) {
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateText({ globalLanguage });
  
  const [isPending, setIsPending] = useState(false); // Important for modals usage
  const queryClient = useQueryClient();

  const { mutate: deleteCategory, isLoading } = useDeleteCategory({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['categories'],
      });

      toast.success(<p>{translations.categoryDeleted}</p>);
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
      <Message>{translations.deleteCategory}</Message>
      <DeleteButton
        type="button"
        disabled={isPending || isLoading}
        onClick={() => {
          setIsPending(true);
          deleteCategory(_id);
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
            <p>{translations.loading}</p>
          </>
        ) : (
          <p>{translations.exclude}</p>
        )}
      </DeleteButton>
    </Container>
  );
}

ModalDeleteCategory.propTypes = {
  _id: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
};
