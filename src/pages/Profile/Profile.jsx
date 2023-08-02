import { useState } from 'react';

import { SettingOutlined, CloseOutlined } from '@ant-design/icons';

import { ModalChangeUserData } from '../../components/features';
import { useGetUserCourses } from '../../hooks/query/userCourse';
import useAuthStore from '../../stores/auth';
import formatDate from '../../utils/formatDate';
import {
  ModalStyle,
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

export default function Profile() {
  const [updateUserModalState, setUpdateUserModalState] = useState(false);
  const user = useAuthStore((store) => store.auth?.user);
  const { data: userCourses } = useGetUserCourses({});

  const openModalChangeUserData = () => setUpdateUserModalState(true);
  const closeModalChangeUserData = () => setUpdateUserModalState(false);
  let accessGranted = false;

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
                      <h2>{user?.company}</h2>
                    </Info>
                    <Info>
                      <h1>Nome: </h1>
                      <h2>{user?.name}</h2>
                    </Info>
                    <Info>
                      <h1>Sobrenome: </h1>
                      <h2>{user?.surname}</h2>
                    </Info>
                    <Info>
                      <h1>Cargo: </h1>
                      <h2>{user?.role}</h2>
                    </Info>
                  </Infos>
                </PersonalData>
                <Address>
                  <Subtitle>Endereço</Subtitle>
                  <Infos>
                    <Info>
                      <h1>Pais: </h1>
                      <h2>{user?.country}</h2>
                    </Info>
                    <Info>
                      <h1>Estado: </h1>
                      <h2>{user?.state}</h2>
                    </Info>
                    <Info>
                      <h1>Cidade: </h1>
                      <h2>{user?.city}</h2>
                    </Info>
                    <Info>
                      <h1>Rua: </h1>
                      <h2>{user?.address}</h2>
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
                      <h2>{user?.email}</h2>
                    </Info>
                  </Infos>
                </Contact>
                <Lessons>
                  <Subtitle>Curso:</Subtitle>
                  <Infos>
                    <LessonInfo>
                      <h1>Validade de acesso: </h1>
                      {userCourses?.map((userCourse, index) => {
                        if (user?.isAdmin && !accessGranted) {
                          accessGranted = true;
                          return <h2 key={index}>Acesso Ilimitado</h2>;
                        } else if (
                          !user?.isAdmin &&
                          userCourse.user._id === user?._id
                        ) {
                          return (
                            <h2 key={index}>
                              {userCourse?.expiresAt
                                ? new Date(userCourse?.expiresAt).getTime() >
                                  Date.now()
                                  ? formatDate({ value: userCourse?.expiresAt })
                                  : 'Sem Acesso'
                                : 'Sem Acesso'}
                            </h2>
                          );
                        } else if (
                          index === userCourses.length - 1 &&
                          !accessGranted
                        ) {
                          return <h2 key={index}>Sem Acesso</h2>;
                        }
                        return null;
                      })}
                    </LessonInfo>
                  </Infos>
                  <Subtitle>Software</Subtitle>
                  <Infos>
                    <LessonInfo>
                      <h1>Validade de acesso: </h1>
                      <h2>
                        {user?.isAdmin
                          ? 'Acesso Ilimitado'
                          : user?.softwareAccess
                          ? new Date(user.softwareAccess).getTime() > Date.now()
                            ? formatDate({ value: user.softwareAccess })
                            : 'Sem Acesso'
                          : 'Sem Acesso'}
                      </h2>
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
      </Page>
      <ModalStyle
        open={updateUserModalState}
        onCancel={closeModalChangeUserData}
        footer={null}
        width={1000}
        closeIcon={<CloseOutlined />}
        destroyOnClose
        centered
      >
        <ModalChangeUserData close={closeModalChangeUserData} />
      </ModalStyle>
    </Background>
  );
}
