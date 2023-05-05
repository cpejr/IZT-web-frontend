import { useState } from 'react';

import { useParams } from 'react-router-dom';

import { useVerifyUser } from '../../hooks/query/users';
import { Container, Title } from './Styles';

export default function NotFound() {
  const { token } = useParams();
  const [message, setMessage] = useState('');
  const { data: user, isLoading } = useVerifyUser({
    token,
    onError: () => {
      setMessage('Não foi possível validar seu email.');
    },
    onSuccess: () => {
      setMessage(
        `Parabéns ${user.name}! Seu email foi validado com sucesso. Clique no botão e siga para o login.`
      );
    },
  });
  return (
    <Container>
      {isLoading ? (
        <h1
          style={{
            height: '660px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Carregando...
        </h1>
      ) : (
        <Title>{message}</Title>
      )}
    </Container>
  );
}
