import {
  Container,
  Title,
  PersonalData,
  Label,
  Value,
  Address,
  Contact,
  Lessons,
  Info,
} from './Styles';

function Profile() {
  return (
    <Container>
      <Title>Informações do usuário</Title>
      <PersonalData>
        <h3>Informações Pessoais</h3>
        <Info>
          <h1>Empresa: </h1>
          <h2>xxxxxxx</h2>
        </Info>
        <Info>
          <h1>Nome: </h1>
          <h2>xxxxxxx</h2>
        </Info>
        <Info>
          <h1>Sobrenome: </h1>
          <h2>xxxxxxx</h2>
        </Info>
        <Info>
          <h1>Cargo: </h1>
          <h2>xxxxxxx</h2>
        </Info>
      </PersonalData>
      <Address>
        <h3>Endereco</h3>
        <Info>
          <h1>Pais: </h1>
          <h2>xxxxxxx</h2>
        </Info>
        <Info>
          <h1>Estado: </h1>
          <h2>xxxxxxx</h2>
        </Info>
        <Info>
          <h1>Cidade: </h1>
          <h2>xxxxxxx</h2>
        </Info>
        <Info>
          <h1>Endereco: </h1>
          <h2>xxxxxxx</h2>
        </Info>
      </Address>
      <Contact>
        <h3>Informações de contato</h3>
        <Label>Email:</Label>
        <Value>xxxxxxxxxx</Value>
        <Label>Telefone:</Label>
        <Value>xxxxxxxxxx</Value>
      </Contact>
      <Lessons>
        <h3>Lições</h3>
        <Label>Curso:</Label>
        <Value>xxxxxxxxxx</Value>
        <Label>Validade do acesso:</Label>
        <Value>xxxxxxxxxx</Value>
        <h3>Software</h3>
        <Label>Validade do acesso:</Label>
        <Value>xxxxxxxxxx</Value>
      </Lessons>
    </Container>
  );
}

export default Profile;
