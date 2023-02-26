import react from 'react';
import { Container, Subtitle, Title, Description } from './styles';

function NotFound() {
  return (
    <Container>
      <Title>404</Title>
      <Subtitle>Página Não Encontrada</Subtitle>
      <Description>
        Essa página não existe ou não está mais disponível
      </Description>
    </Container>
  );
}

export default NotFound;
