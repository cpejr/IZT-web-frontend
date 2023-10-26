import { useState } from 'react';

import { useQueryClient } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import { TailSpin } from 'react-loader-spinner';
import { toast } from 'react-toastify';

import { useGlobalLanguage } from '../../../stores/globalLanguage';
import { TranslateText } from './translations';

import { useDeleteSoftwareAccess } from '../../../hooks/query/users';
import { Container, DeleteButton, Message } from './Styles';
import { buildDeleteUserSoftwareAccessErrorMessage } from './utils';

export default function ModalDeleteUserSoftwareAccess({ _id, close }) {
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateText({ globalLanguage });

  const [isPending, setIsPending] = useState(false); // Important for modals usage
  const queryClient = useQueryClient();

  const { mutate: deleteUserSoftwareAccess, isLoading } =
    useDeleteSoftwareAccess({
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['users-with-software-access'],
        });

        toast.success(<p>{translations.softwareAuthorizationDeleted}</p>);
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
      <Message>{translations.deleteSoftwareAuthorization}</Message>
      <DeleteButton
        type="button"
        disabled={isPending || isLoading}
        onClick={() => {
          setIsPending(true);
          deleteUserSoftwareAccess(_id);
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
          <p>{translations.deleteAccess}</p>
        )}
      </DeleteButton>
    </Container>
  );
}

ModalDeleteUserSoftwareAccess.propTypes = {
  _id: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
};
