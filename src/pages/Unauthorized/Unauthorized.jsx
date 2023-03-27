import { Container, Subtitle, Title, Description } from './Styles';

export default function Unauthorized() {
  return (
    <Container>
      <Title>401</Title>
      <div>
        <Subtitle>Não Autorizado</Subtitle>
      </div>
      <Description>
        Você precisa estar logado para acessar essa página
      </Description>
    </Container>
  );
}
