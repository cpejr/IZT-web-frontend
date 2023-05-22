import { Navigate, useLocation } from 'react-router-dom';

import { Container, Text } from './Styles';

export default function VerifyEmail() {
  const email = useLocation().state;

  if (!email) return <Navigate to="/" replace />;

  return (
    <Container>
      <h1>Confira seu e-mail: {email}</h1>
      <Text>
        Você receberá um link para confirmar seu cadastro e ativar a sua conta.
      </Text>
    </Container>
  );
}
