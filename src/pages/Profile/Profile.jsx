import { React, useState } from 'react';
import { SettingOutlined, CloseOutlined } from '@ant-design/icons';
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
  Background,
  Info2,
  Infos,
  ChangeInfo,
  Body,
  DataContainer,
  ModalStyle,
} from './Styles';
import ChangeUserDataModal from '../../components/features/ChangeUserDataModal/ChangeUserDataModal';
import useAuthStore from '../../stores/auth';

function Profile() {
  const [changeUserDataModal, setChangeUserDataModal] = useState(false);
  const { auth } = useAuthStore();
  console.log(auth);

  async function openchangeUserDataModal() {
    setChangeUserDataModal(true);
  }

  async function closechangeUserDataModal() {
    setChangeUserDataModal(false);
  }
  if (!auth) return <h1>Proibido</h1>;
  return (
    <Background>
      <Page>
        <Body>
          <Title>Informações do usuário</Title>
          <Container>
            <DataContainer>
              <FirstColumn>
                <PersonalData>
                  <Subtitle>Informações Pessoais</Subtitle>
                  <Infos>
                    <Info>
                      <h1>Empresa: </h1>
                      <h2>{auth.user.company}</h2>
                    </Info>
                    <Info>
                      <h1>Nome: </h1>
                      <h2>{auth.user.name}</h2>
                    </Info>
                    <Info>
                      <h1>Sobrenome: </h1>
                      <h2>{auth.user.name}</h2>
                    </Info>
                    <Info>
                      <h1>Cargo: </h1>
                      <h2>{auth.user.role}</h2>
                    </Info>
                  </Infos>
                </PersonalData>
                <Address>
                  <Subtitle>Endereço</Subtitle>
                  <Infos>
                    <Info>
                      <h1>Pais: </h1>
                      <h2>{auth.user.country}</h2>
                    </Info>
                    <Info>
                      <h1>Estado: </h1>
                      <h2>{auth.user.state}</h2>
                    </Info>
                    <Info>
                      <h1>Cidade: </h1>
                      <h2>{auth.user.city}</h2>
                    </Info>
                    <Info>
                      <h1>Endereco: </h1>
                      <h2>{auth.user.address}</h2>
                    </Info>
                  </Infos>
                </Address>
              </FirstColumn>
              <SecondColumn>
                <Contact>
                  <Subtitle>Informações de contato</Subtitle>
                  <Infos>
                    <Info>
                      <h1>Email: </h1>
                      <h2>{auth.user.email}</h2>
                    </Info>
                    <Info>
                      <h1>Telefone: </h1>
                      <h2>{auth.user.email}</h2>
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
                      <h1>Validade de acesso: </h1>
                      <h2>21/06/2025</h2>
                    </Info2>
                  </Infos>
                </Lessons>
              </SecondColumn>
            </DataContainer>
            <ChangeInfo onClick={() => openchangeUserDataModal()}>
              <SettingOutlined />
              Alterar Informações
            </ChangeInfo>
          </Container>
        </Body>
      </Page>
      <ModalStyle
        visible={changeUserDataModal}
        onCancel={() => closechangeUserDataModal()}
        footer={null}
        width="90%"
        closeIcon={<CloseOutlined />}
        bodyStyle={{ alignItems: 'center', borderRadius: 'none' }}
      >
        <ChangeUserDataModal />
      </ModalStyle>
    </Background>
  );
}

export default Profile;
