import { useState } from 'react';

import { useQueryClient } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import { TailSpin } from 'react-loader-spinner';
import { toast } from 'react-toastify';

import { useUpdateSoftwareAccess } from '../../../hooks/query/users';
import { Container, DeleteButton, Message } from './Styles';
import { buildDeleteUserSoftwareAccessErrorMessage } from './utils';

export default function ModalDeleteUserSoftwareAccess({ _id, close }) {
  const [isPending, setIsPending] = useState(false); // Important for modals usage
  const queryClient = useQueryClient();

  const { mutate: deleteUserSoftwareAccess, isLoading } =
    useUpdateSoftwareAccess({
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['users'],
        });

        toast.success('Autorização ao curso deletada com sucesso.');
        close();
      },
      onError: (err) => {
        const errorMessage = buildDeleteUserSoftwareAccessErrorMessage(err);

        toast.error(errorMessage);
        setIsPending(false);
      },
    });

  return (
    <Container>
      <Message>
        Tem certeza que deseja retirar a autorização de acesso ao software do
        usuário?
      </Message>
      <DeleteButton
        type="button"
        disabled={isPending || isLoading}
        onClick={() => {
          setIsPending(true);
          deleteUserSoftwareAccess({ _id, softwareAccess: null });
        }}
      >
        {isLoading ? (
          <>
            <TailSpin
              height="15"
              width="15"
              color="white"
              ariaLabel="tail-spin-loading"
              radius="5"
              wrapperStyle={{}}
              wrapperClass=""
            />
            <p>Carregando</p>
          </>
        ) : (
          <p>Excluir</p>
        )}
      </DeleteButton>
    </Container>
  );
}

ModalDeleteUserSoftwareAccess.propTypes = {
  _id: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
};
