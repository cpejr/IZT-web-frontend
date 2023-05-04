import { useParams } from 'react-router-dom';

import { Container, Title } from './Styles';

export default function NotFound() {
  const idToken = useParams();
  return (
    <Container>
      <Title>
        Parabéns, sua conta foi confirmada com sucesso! Clique aqui para fazer o
        login:
      </Title>
    </Container>
  );
}
