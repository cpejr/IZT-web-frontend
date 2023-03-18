import { Container, Subtitle, Title, Description } from './Styles';

export default function NotFound() {
  return (
    <Container>
      <Title>404</Title>
      <div>
        <Subtitle>Página</Subtitle>
        <Subtitle>Não Encontrada</Subtitle>
      </div>
      <Description>
        Essa página não existe ou não está mais disponível
      </Description>
    </Container>
  );
}
