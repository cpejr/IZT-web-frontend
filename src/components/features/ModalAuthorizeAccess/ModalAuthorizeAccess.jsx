import {
  Container,
  Form,
  Label,
  Input,
  ModalContent,
  ModalButton,
} from './Styles';

export default function ModalAuthorizeAccess() {
  return (
    <Container>
      <Form>
        <ModalContent>
          <Label>Email:</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Digite aqui o seu email"
          />
          <Label>Validade do acesso:</Label>
          <Input
            id="acessExpiration"
            name="acessExpiration"
            type="acessExpiration"
            placeholder="DD/MM/AAAA"
          />
          <ModalButton>
            <p>+ Autorizar</p>
          </ModalButton>
        </ModalContent>
      </Form>
    </Container>
  );
}
