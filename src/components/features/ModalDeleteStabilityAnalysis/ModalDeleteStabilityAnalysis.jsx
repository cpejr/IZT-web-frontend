import { useState } from 'react';

import { useQueryClient } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import { TailSpin } from 'react-loader-spinner';
import { toast } from 'react-toastify';

import { useDeleteStabilityAnalysis } from '../../../hooks/query/stabilityAnalysis';
import { Container, DeleteButton, Message } from './Styles';
import { buildDeleteStabilityAnalysisErrorMessage } from './utils';

import { TranslateText } from './translations';

export default function ModalDeleteStabilityAnalysis({
  _id,
  close,
  globalLanguage,
}) {
  const translations = TranslateText({ globalLanguage });
  const [isPending, setIsPending] = useState(false); // Important for modals usage
  const queryClient = useQueryClient();

  const { mutate: deleteStabilityAnalysis, isLoading } =
    useDeleteStabilityAnalysis({
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['stability-analysis'],
        });

        toast.success(translations.toast);
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
      <Message>{translations.messageDelete}</Message>

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
            <p>{translations.loading}</p>
          </>
        ) : (
          <p>{translations.destroy}</p>
        )}
      </DeleteButton>
    </Container>
  );
}

ModalDeleteStabilityAnalysis.propTypes = {
  _id: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
};
