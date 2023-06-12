import { Container, Loader } from './Styles';

export default function Loading(props) {
  return (
    <Container {...props}>
      <Loader>
        <div />
        <div />
        <div />
      </Loader>
    </Container>
  );
}
