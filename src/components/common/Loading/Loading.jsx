import { Container, Loader, Text } from './Styles';

export default function Loading() {
  return (
    <Container>
      <Loader>
        <div />
        <div />
        <div />
      </Loader>
      <Text>Carregando...</Text>
    </Container>
  );
}
