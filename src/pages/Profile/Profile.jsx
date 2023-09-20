/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
import { useState } from 'react';

import { SettingOutlined, CloseOutlined } from '@ant-design/icons';

import { Header, ModalChangeUserData } from '../../components/features';
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
import { TranslateText } from './translations';

export default function Profile() {
  const [currentLanguage, setCurrentLanguage] = useState('PT');

  const translations = TranslateText({ currentLanguage });

  const [updateUserModalState, setUpdateUserModalState] = useState(false);
  const user = useAuthStore((store) => store.auth?.user);
  const { data: userCourses } = useGetUserCourses({});

  const openModalChangeUserData = () => setUpdateUserModalState(true);
  const closeModalChangeUserData = () => setUpdateUserModalState(false);
  let accessGranted = false;

  return (
    <>
      <Header setCurrentLanguage={setCurrentLanguage} />
      <Background>
        <Page>
          <Body>
            <Title>{translations.profileTitle1}</Title>
            <Container>
              <DataContainer>
                <FirstColumn>
                  <PersonalData>
                    <Subtitle>{translations.profilePersonalInfo}</Subtitle>
                    <Infos>
                      <Info>
                        <h1>{translations.profileCompany}</h1>
                        <h2>{user?.company}</h2>
                      </Info>
                      <Info>
                        <h1>{translations.profileName}</h1>
                        <h2>{user?.name}</h2>
                      </Info>
                      <Info>
                        <h1>{translations.profileLastName}</h1>
                        <h2>{user?.surname}</h2>
                      </Info>
                      <Info>
                        <h1>{translations.profileRole}</h1>
                        <h2>{user?.role}</h2>
                      </Info>
                    </Infos>
                  </PersonalData>
                  <Address>
                    <Subtitle>{translations.profileAdress}</Subtitle>
                    <Infos>
                      <Info>
                        <h1>{translations.profileCoutry}</h1>
                        <h2>{user?.country}</h2>
                      </Info>
                      <Info>
                        <h1>{translations.profileState}</h1>
                        <h2>{user?.state}</h2>
                      </Info>
                      <Info>
                        <h1>{translations.profileCity}</h1>
                        <h2>{user?.city}</h2>
                      </Info>
                      <Info>
                        <h1>{translations.profileStreet}</h1>
                        <h2>{user?.address}</h2>
                      </Info>
                    </Infos>
                  </Address>
                </FirstColumn>
                <SecondColumn>
                  <Contact>
                    <Subtitle>{translations.profileContactInfo}</Subtitle>
                    <Infos>
                      <Info>
                        <h1>Email: </h1>
                        <h2>{user?.email}</h2>
                      </Info>
                    </Infos>
                  </Contact>
                  <Lessons>
                    <Subtitle>{translations.profileCourse}</Subtitle>
                    <Infos>
                      <LessonInfo>
                        <h1>{translations.profileAccess}</h1>
                        {userCourses?.map((userCourse, index) => {
                          if (user?.isAdmin && !accessGranted) {
                            accessGranted = true;
                            return (
                              <h2 key={index}>
                                {translations.profileUnlimitedAccess}
                              </h2>
                            );
                          }
                          if (
                            !user?.isAdmin &&
                            userCourse.user._id === user?._id
                          ) {
                            return (
                              <h2 key={index}>
                                {userCourse?.expiresAt
                                  ? new Date(userCourse?.expiresAt).getTime() >
                                    Date.now()
                                    ? formatDate({
                                        value: userCourse?.expiresAt,
                                      })
                                    : translations.profileNoAccess
                                  : translations.profileNoAccess}
                              </h2>
                            );
                          }
                          if (
                            index === userCourses.length - 1 &&
                            !accessGranted
                          ) {
                            return (
                              <h2 key={index}>
                                {translations.profileNoAccess}
                              </h2>
                            );
                          }
                          return null;
                        })}
                      </LessonInfo>
                    </Infos>
                    <Subtitle>Software</Subtitle>
                    <Infos>
                      <LessonInfo>
                        <h1>{translations.profileAccess}</h1>
                        <h2>
                          {user?.isAdmin
                            ? translations.profileUnlimitedAccess
                            : user?.softwareAccess
                            ? new Date(user.softwareAccess).getTime() >
                              Date.now()
                              ? formatDate({ value: user.softwareAccess })
                              : translations.profileNoAccess
                            : translations.profileNoAccess}
                        </h2>
                      </LessonInfo>
                    </Infos>
                  </Lessons>
                </SecondColumn>
              </DataContainer>
              <ChangeInfo onClick={openModalChangeUserData}>
                <SettingOutlined />
                {translations.profileChangeInformation}
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
          <ModalChangeUserData
            language={currentLanguage}
            close={closeModalChangeUserData}
          />
        </ModalStyle>
      </Background>
    </>
  );
}
