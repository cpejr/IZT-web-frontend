import { Container, Subtitle, Title, Description } from './Styles';

export default function Forbidden() {
  return (
    <Container>
      <Title>403</Title>
      <div>
        <Subtitle>Proibido</Subtitle>
      </div>
      <Description>Você não tem permissão para acessar essa página</Description>
    </Container>
  );
}
