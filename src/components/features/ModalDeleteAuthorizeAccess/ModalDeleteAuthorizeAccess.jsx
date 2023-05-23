import { useState } from 'react';

import { useQueryClient } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import { useDeleteUserCourse } from '../../../hooks/query/userCourse';
import { Container, DeleteButton, Message } from './Styles';
import { buildDeleteUserCourseErrorMessage } from './utils';

export default function ModalDeleteUserCourse({ _id, close }) {
  const [isPending, setIsPending] = useState(false); // Important for modals usage
  const queryClient = useQueryClient();

  const { mutate: deleteUserCourse, isLoading } = useDeleteUserCourse({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['user-courses'],
      });

      toast.success('Autorização ao curso deletada com sucesso.');
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
      <Message>
        Tem certeza que deseja retirar a autorização de acesso ao curso do
        usuário?
      </Message>
      <DeleteButton
        type="button"
        disabled={isPending || isLoading}
        onClick={() => {
          setIsPending(true);
          deleteUserCourse(_id);
        }}
      >
        {/* Put proper loading here */}
        {isPending ? 'Carregando...' : 'Excluir'}
      </DeleteButton>
    </Container>
  );
}

ModalDeleteUserCourse.propTypes = {
  _id: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
};
