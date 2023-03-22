import { Container, Loader, Text } from './Styles';

// TESTANDO NA PÁGINA DE LISTAR CATEGORIAS

export default function LoadingBackEnd() {
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
