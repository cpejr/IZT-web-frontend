import { useState } from 'react';

import { useQueryClient } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import { TailSpin } from 'react-loader-spinner';
import { toast } from 'react-toastify';

import { useGlobalLanguage } from '../../../stores/globalLanguage';
import { TranslateText } from './translations';

import { useDeleteUserCourse } from '../../../hooks/query/userCourse';
import { Container, DeleteButton, Message } from './Styles';
import { buildDeleteUserCourseErrorMessage } from './utils';

export default function ModalDeleteUserCourse({ _id, close }) {
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateText({ globalLanguage });

  const [isPending, setIsPending] = useState(false); // Important for modals usage
  const queryClient = useQueryClient();

  const { mutate: deleteUserCourse, isLoading } = useDeleteUserCourse({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['user-courses'],
      });
      queryClient.invalidateQueries({
        queryKey: ['users'],
      });

      toast.success(<p>{translations.courseAuthorizationDeleted}</p>);
      close();
    },
    onError: (err) => {
      const errorMessage = buildDeleteUserCourseErrorMessage(err);

      toast.error(errorMessage);
      setIsPending(false);
    },
  });

  return (
    <Container>
      <Message>{translations.deleteCourseAuthorization}</Message>
      <DeleteButton
        type="button"
        disabled={isPending || isLoading}
        onClick={() => {
          setIsPending(true);
          deleteUserCourse(_id);
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

ModalDeleteUserCourse.propTypes = {
  _id: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
};
