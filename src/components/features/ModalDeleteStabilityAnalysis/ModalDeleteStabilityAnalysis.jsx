import { useState } from 'react';

import { useQueryClient } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import { TailSpin } from 'react-loader-spinner';
import { toast } from 'react-toastify';

import { useDeleteStabilityAnalysis } from '../../../hooks/query/stabilityAnalysis';
import { Container, DeleteButton, Message } from './Styles';
import { buildDeleteStabilityAnalysisErrorMessage } from './utils';

export default function ModalDeleteStabilityAnalysis({ _id, close }) {
  const [isPending, setIsPending] = useState(false); // Important for modals usage
  const queryClient = useQueryClient();

  const { mutate: deleteStabilityAnalysis, isLoading } =
    useDeleteStabilityAnalysis({
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['stability-analysis'],
        });

        toast.success('Relatório delatado com sucesso.');
        close();
      },
      onError: (err) => {
        const errorMessage = buildDeleteStabilityAnalysisErrorMessage(err);

        toast.error(errorMessage);
        setIsPending(false);
      },
    });

  return (
    <Container>
      <Message>Tem certeza que deseja apagar o(a) relatório?</Message>

      <DeleteButton
        type="button"
        disabled={isPending || isLoading}
        onClick={() => {
          setIsPending(true);
          deleteStabilityAnalysis(_id);
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

ModalDeleteStabilityAnalysis.propTypes = {
  _id: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
};
