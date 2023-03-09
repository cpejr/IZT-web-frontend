import {
  Container,
  Page,
  Title,
  PersonalData,
  Address,
  Contact,
  Lessons,
  Info,
  FirstColumn,
  SecondColumn,
  Subtitle,
  Border,
  Info2,
  Infos,
  ChangeInfo,
} from './Styles';

function Profile() {
  return (
    <Page>
      <Border />
      <Title>Informações do usuário</Title>
      <Container>
        <FirstColumn>
          <PersonalData>
            <Subtitle>Informações Pessoais</Subtitle>
            <Infos>
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
            </Infos>
          </PersonalData>
          <Address>
            <Subtitle>Endereco</Subtitle>
            <Infos>
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
            </Infos>
          </Address>
          <ChangeInfo>Alterar Informaçóes</ChangeInfo>
        </FirstColumn>
        <SecondColumn>
          <Contact>
            <Subtitle>Informações de contato</Subtitle>
            <Infos>
              <Info>
                <h1>Email: </h1>
                <h2>xxxxxxx</h2>
              </Info>
              <Info>
                <h1>Telefone: </h1>
                <h2>xxxxxxx</h2>
              </Info>
            </Infos>
          </Contact>
          <Lessons>
            <Subtitle>Lições</Subtitle>
            <Infos>
              <Info2>
                <h1>Curso: </h1>
                <h2>Ratificação 3D</h2>
              </Info2>
              <Info2>
                <h1>Validade de acesso: </h1>
                <h2>07/03/2025</h2>
              </Info2>
            </Infos>
            <Subtitle>Software</Subtitle>
            <Infos>
              <Info2>
                <h1>Validade e acesso: </h1>
                <h2>21/06/2025</h2>
              </Info2>
            </Infos>
          </Lessons>
        </SecondColumn>
      </Container>
    </Page>
  );
}

export default Profile;
