import { useState } from 'react';
import { SettingOutlined } from '@ant-design/icons';
import 'react-toastify/dist/ReactToastify.css';
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
  LessonInfo,
  Infos,
  ChangeInfo,
  Body,
  DataContainer,
} from './Styles';
import { ModalChangeUserData } from '../../components/features';
import useAuthStore from '../../stores/auth';
import { AddToast } from '../../components/common';

export default function Profile() {
  const [updateUserModalState, setUpdateUserModalState] = useState(false);
  const user = useAuthStore((state) => state.auth.user);

  const openModalChangeUserData = () => setUpdateUserModalState(true);
  const closeModalChangeUserData = () => setUpdateUserModalState(false);

  if (!user) return <h1>Proibido</h1>;
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
                      <h2>{user.company}</h2>
                    </Info>
                    <Info>
                      <h1>Nome: </h1>
                      <h2>{user.name}</h2>
                    </Info>
                    <Info>
                      <h1>Sobrenome: </h1>
                      <h2>{user.surname}</h2>
                    </Info>
                    <Info>
                      <h1>Cargo: </h1>
                      <h2>{user.role}</h2>
                    </Info>
                  </Infos>
                </PersonalData>
                <Address>
                  <Subtitle>Endereço</Subtitle>
                  <Infos>
                    <Info>
                      <h1>Pais: </h1>
                      <h2>{user.country}</h2>
                    </Info>
                    <Info>
                      <h1>Estado: </h1>
                      <h2>{user.state}</h2>
                    </Info>
                    <Info>
                      <h1>Cidade: </h1>
                      <h2>{user.city}</h2>
                    </Info>
                    <Info>
                      <h1>Endereco: </h1>
                      <h2>{user.address}</h2>
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
                      <h2>{user.email}</h2>
                    </Info>
                    <Info>
                      <h1>Telefone: </h1>
                      <h2>{user.email}</h2>
                    </Info>
                  </Infos>
                </Contact>
                <Lessons>
                  <Subtitle>Lições</Subtitle>
                  <Infos>
                    <LessonInfo>
                      <h1>Curso: </h1>
                      <h2>Ratificação 3D</h2>
                    </LessonInfo>
                    <LessonInfo>
                      <h1>Validade de acesso: </h1>
                      <h2>07/03/2025</h2>
                    </LessonInfo>
                  </Infos>
                  <Subtitle>Software</Subtitle>
                  <Infos>
                    <LessonInfo>
                      <h1>Validade de acesso: </h1>
                      <h2>21/06/2025</h2>
                    </LessonInfo>
                  </Infos>
                </Lessons>
              </SecondColumn>
            </DataContainer>
            <ChangeInfo onClick={openModalChangeUserData}>
              <SettingOutlined />
              Alterar Informações
            </ChangeInfo>
          </Container>
        </Body>
        <AddToast />
      </Page>
      <ModalChangeUserData
        openState={updateUserModalState}
        close={closeModalChangeUserData}
      />
    </Background>
  );
}
