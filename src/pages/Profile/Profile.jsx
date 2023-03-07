import {
  Container,
  Page,
  Title,
  PersonalData,
  Label,
  Value,
  Address,
  Contact,
  Lessons,
  Info,
  FirstColumn,
  SecondColumn,
  Subtitle,
} from './Styles';

function Profile() {
  return (
    <Page>
      <Title>Informações do usuário</Title>
      <Container>
        <FirstColumn>
          <PersonalData>
            <Subtitle>Informações Pessoais</Subtitle>
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
            <Subtitle>Endereco</Subtitle>
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
        </FirstColumn>
        <SecondColumn>
          <Contact>
            <Subtitle>Informações de contato</Subtitle>
            <Label>Email:</Label>
            <Value>xxxxxxxxxx</Value>
            <Label>Telefone:</Label>
            <Value>xxxxxxxxxx</Value>
          </Contact>
          <Lessons>
            <Subtitle>Lições</Subtitle>
            <Label color="white">Curso:</Label>
            <Value color="white">xxxxxxxxxx</Value>
            <Label color="white">Validade do acesso:</Label>
            <Value color="white">xxxxxxxxxx</Value>
            <Subtitle color="white">Software</Subtitle>
            <Label color="white">Validade do acesso:</Label>
            <Value color="white">xxxxxxxxxx</Value>
          </Lessons>
        </SecondColumn>
      </Container>
    </Page>
  );
}

export default Profile;
